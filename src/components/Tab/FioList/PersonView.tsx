import * as React from 'react';
import DataItem from '../../../model/interfaces/DataItem';
interface PersonViewProps {
    item: DataItem,
    editorHandler: any,
    onRepetition:any,
    redactorIsOpen:boolean
}


export class PersonView extends React.Component<PersonViewProps, any> {


    

    render() {
       
        const { FIO, DoB, PositionName, id, isInRawHtml, isRepetition, repetitionsInfo, DeleteDate, PhotoFilename, info } = this.props.item;
        const redactorHandler = this.props.editorHandler;
        const onRepetition = this.props.onRepetition;
        const redactorIsOpen = this.props.redactorIsOpen;

        const fioTd = ()=>{
               if(!redactorIsOpen) {
                   return(<td onClick={()=>redactorHandler(id)}  style={{width:"25px"}}>
                   <span className='person__fio'>{FIO}</span><br/>
                   {isRepetition?<div onClick={(event)=>onRepetition(this.props.item.id,event)} className=" alert alert-error repetition_alert">Повтор</div>:""}
                {( DeleteDate != null)?<div className=" alert alert-error ">В архиве</div>:""}
                </td>
                   )} else{
                       return(<td  style={{width:"50px"}}>
                       <span className='person__fio'>{FIO}</span> <br/>
                       {isRepetition?<div onClick={()=>onRepetition(this.props.item.id)} className=" alert alert-error repetition_alert">Повтор</div>:""}
                    {( DeleteDate != null)?<div className=" alert alert-error ">В архиве</div>:""}
                    </td>)
                   }
               }
        
        return (

            

            <tr key={id}>
                <th scope="row" style={{backgroundColor:(isInRawHtml!=null?(isInRawHtml?"#58FA82":"#FE2E64"):"#FFFFFF")}}></th>
                {fioTd()}
                <td>{PositionName}</td>
                <td>{DoB}</td>
                <td>{info}</td>
            </tr>

       

        )
    }
}
