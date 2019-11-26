
import * as React from 'react';
import { SHOW_SOURCE_URL, HIDE_SOURCE_URL } from '../../../model/models/constants';

export class StateRowView extends React.Component<any, any>{
    
    render() {
        const w:any = window;
        const onMakeStatusChanged = this.props.onMakeStatusChanged;
        const onHideOrShow = this.props.onHideOrShow;
        const onCreatePerson = this.props.onCreatePerson;
        const tabId = this.props.tabId;
        return (
            <div className='row'>
                <div className='col-sm-2'><button className='btn btn-primary' onClick={()=>onMakeStatusChanged(tabId)}>Проверено</button></div>
                <div className='col-sm-3'><button className='btn btn-success' onClick={()=>onCreatePerson()} >+</button></div>
                {this.props.cardIsHidden ?
                    <div className='col-sm-3'><button className='btn btn-info' onClick={()=>onHideOrShow(tabId, SHOW_SOURCE_URL)}>Восстановить</button></div> :
                    <div className='col-sm-3'><button className='btn btn-danger' onClick={()=>onHideOrShow(tabId, HIDE_SOURCE_URL)}>Скрыть</button></div>
                }

                <div className='col-sm-4'><div className='pull-right'><button className="btn btn-primary" onClick={()=>w.closeWindowId(this.props.tabId)}>Выйти</button></div></div>
            </div>);
    }
}