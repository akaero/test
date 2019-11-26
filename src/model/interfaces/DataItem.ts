import { Repetition } from "../../components/Tab/Repetiotion/Repetition";

//Строчка рпдла
export default interface DataItem {

    id: string,
    SourcesUrl_id:string,
    FIO: string, //фио
    DoB: string, // дата рождения
    PositionName: string, //должность
    info: string, //дополнительная инфомрация
    DeleteDate: boolean|null, //в архиве или нет
    PhotoFilename: string, //ссылка на фото
    isInRawHtml: boolean|null, //присутствует в html, который слева(используем для подсветки строки)
    isRepetition: boolean //существует повтор в базе
    repetitionsInfo: Repetition[] //информация о повторах
    OpenRepetitionWindow: boolean //открыта ли карточка с повтором

}
