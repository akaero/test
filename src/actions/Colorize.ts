import { COLORIZE, COLORIZE_START, COLORIZE_END } from "../model/models/constants";
import DataItem from "../model/interfaces/DataItem";

export function colorize(html: string, persons: DataItem[]) {
    return (dispatch:any)=>{
        dispatch({
            type:COLORIZE_START
        });

    let colorized_persons:DataItem[]=[];
    if (html.length < 100) return;
    let colorizedHtml=html;

    persons.forEach((person, index) => {
        if(person.DeleteDate){
            colorized_persons.push({...person, isInRawHtml:null});
            return;
        } 
        let str = person.FIO;
        //индекс первого вхождения
        let findex:number= colorizedHtml.indexOf(str);
        if (findex == -1) {
            let splitStrs = str.split(' ');
            let expression = '';
            let count = 0;
            let mas = [];
            for (let i = 0; i < splitStrs.length; i++) {
                if (splitStrs[i]) {
                    mas[count++] = splitStrs[i];
                }
            }

            let regexp = mas[0] + '[\\n\\w\\W]{0,1000}' + mas[1] + '[\\n\\w\\W]{0,1000}' + mas[2] + '(\\s|\\n){0,3}';
            let reg = new RegExp(mas[0] + '[\\n\\w\\W\\s]{0,1000}' + mas[1] + '[\\n\\w\\W\\s]{0,1000}' + mas[2] + '(\\s|\\n){0,3}', 'i');
            let findingStr = colorizedHtml.match(reg);
            if (!findingStr) {
                let reg1 = new RegExp(mas[1] + '[\\n\\w\\W]{0,1000}' + mas[2] + '[\\n\\w\\W]{0,1000}' + mas[0] + '(\\s|\\n){0,3}', 'i');
                findingStr = colorizedHtml.match(reg1); //пробуем в другом порядке ФИО
            }
            //если не нашли значения, подсвечиваем карсным и прокидываем ошибку наверх
            if (!findingStr) {
             colorized_persons.push({ ...person, isInRawHtml: false });
             return
            }
            findex = findingStr.index||0;
            str = findingStr[0];
           
        }
            colorized_persons.push({ ...person, isInRawHtml: true })

         //вырезаем кусок до
         let before = colorizedHtml.slice(0, findex);
         let result ='';
         //выделяем кусок, который ищется
         result = before + "<i style='background-color:yellow'>" + str + '</i>';

         //индекс, с которого будем вставлять конец 
         let afterIndex = findex! + str.length;
         let afterhtml = colorizedHtml.substr(afterIndex);
         result += afterhtml;
         colorizedHtml=result;

        
    });
    dispatch({type:COLORIZE_END});
    dispatch( {
        type:COLORIZE,
        html:colorizedHtml,
        persons: colorized_persons
    });
}
}


