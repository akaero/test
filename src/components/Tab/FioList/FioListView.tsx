import * as React from 'react';
import { PersonView } from './PersonView';
import DataItem from '../../../model/interfaces/DataItem';
import { Repetition } from '../Repetiotion/Repetition';
import { element } from 'prop-types';
import StatusMessage from '../../../model/interfaces/statusMessage';
import { MAKE_STATUS_CHECKED_SUCCESS } from '../../../model/models/constants';

interface FioListViewProps {
    items: DataItem[],
    editorHandler:any,
    openRepetition: any,
    closeRepetition:any,
    redactorIsOpen:boolean,
    statusMessage:StatusMessage,
    html:string
}

export class FioListView extends React.Component<FioListViewProps>{
    render() {
        const items = this.props.items;
        const statusMessage = this.props.statusMessage
        const openRedactor = this.props.editorHandler;
        const openRepetition= this.props.openRepetition;
        const closeRepetiotion = this.props.closeRepetition;
        const html = this.props.html;
        return (
            <div className="person" >
                <div className="row">
                {(items.some((item)=>item.isInRawHtml==false && html!=""))?
                     <div className="alert alert-error">
                     <button type="button" className="close" data-dismiss="alert">&times;</button>
                     <strong>Внимание!</strong> В карточке присутствуют записи, которые не найдены в тексте!
                 </div>
                    :""}

                    {statusMessage.operationType == MAKE_STATUS_CHECKED_SUCCESS?
                      <div className="alert alert-info">
                      Карточка была перенесена в "Проверено"
                      </div>
                    :""
                    }

                   

                    <table className="table table-striped table-bordered table-condensed">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col" style={{width:"50px"}}>#</th>
                                <th scope="col">ФИО</th>
                                <th scope="col">Должность</th>
                                <th scope="col">Дата рождения</th>
                                <th scope="col">Доп. информация</th>
                                {/* <th scope="col">Ред.</th>
                                <th scope="col">В арх.</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {items
                             .sort((a,b)=>{
                                if(a.DeleteDate!=null && b.DeleteDate!=null && a.DeleteDate == true && b.DeleteDate==false)
                                    return -1;
                                
                                if(a.DeleteDate!=null && b.DeleteDate!=null && a.DeleteDate == false && b.DeleteDate==true)
                                    return 1;
                                
                                if(a.DeleteDate==null && b.DeleteDate!=null )
                                    return -1;
        
                                if(a.DeleteDate!=null && b.DeleteDate==null )
                                    return 1;
                                return 0;
                            })
                            .map((val: DataItem) =>
                                <PersonView item={val} key={val.id}
                                 editorHandler={openRedactor} 
                                 onRepetition={openRepetition}
                                  redactorIsOpen={this.props.redactorIsOpen}></PersonView>
                            )}
                        </tbody>
                    </table>
                    {items.filter((val:DataItem)=>{
                        if(val.repetitionsInfo!== undefined)
                        return true;
                        return false;
                    })
                   
                    .map((pers:DataItem)=>{
                        return(
                                <Repetition
                                 key={pers.id}
                                 repetitions={pers.repetitionsInfo}
                                  OpenRepetitionWindow={pers.OpenRepetitionWindow}
                                  OnClose={closeRepetiotion}
                                  id={pers.id}
                                  ></Repetition>

                        )
                    })}
                    
                </div>
            </div>
        )

    }
}