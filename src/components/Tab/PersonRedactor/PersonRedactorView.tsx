import * as React from 'react'
import { UPDATE_PERSON, CREATE_NEW_PERSON, DELETE_PERSON, DELETE_PERSON_ERROR, DELETE_PERSON_SUCCESS, CREATE_NEW_PERSON_SUCCESS, CREATE_NEW_PERSON_ERROR, ARCHIVE_PERSON_SUCCESS, ARCHIVE_PERSON_ERROR, DELETE_FROM_ARCHIVE_PERSON_SUCCESS, DELETE_FROM_ARCHIVE_PERSON_ERROR, UPDATE_PERSON_SUCCESS, UPDATE_PERSON_ERROR, CLOSE_REDACTOR } from '../../../model/models/constants';
import StatusMessage from '../../../model/interfaces/statusMessage';
import { createPerson } from '../../../actions/PersonActions';
import DataItem from '../../../model/interfaces/DataItem';
import { Repetition } from '../Repetiotion/Repetition';
import StateRow from '../StateRow/StateComponent';
import InputMask from 'react-input-mask';
import { Scrollbars } from 'react-custom-scrollbars';

export interface PersonRedactorViewProps {
    Id: string,
    Fio: string,
    DoB: string,
    Position: string,
    Info: string,
    InArchive: boolean,
    SourcesUrl_id: string,
    Action: string,
    onClose: any,
    onUpdate: any,
    onSave: any,
    onArchive: any,
    onDeleteFromArchive: any,
    onDelete: any,
    onFindLocalRepetition: any,
    Persons: DataItem[],
    TabId: string,
    StatusMessage: StatusMessage,
    repetitions: Repetition[],
    openRepetition: any,
    closeRepetition: any,
    repetiotionIsOpen: boolean,
    FileName: string,
    initHtml: string
}

export interface PersonRedactorFormState {
    Id: string,
    SourcesUrl_id: string,
    Position: string,
    Fio: string,
    DoB: string|null,
    YoB: string|null,
    Info: string,
    File: any,
    StatusMessage: StatusMessage,

    PositionBoxOpen: boolean, //открыта подсказка для должности
    Action: string,
    TabId: string,
    hasRepetition: boolean
}

export class PersonRedactorView extends React.Component<PersonRedactorViewProps, PersonRedactorFormState>{
    constructor(props: any) {
        super(props);
        this.state = {
            Id: this.props.Id,
            SourcesUrl_id: this.props.SourcesUrl_id,
            Position: this.props.Position,
            Fio: this.props.Fio,
            DoB: (this.props.DoB!=null?this.props.DoB.length>4?this.props.DoB:null:null),
            YoB: (this.props.DoB!=null? this.props.DoB.length==4?this.props.DoB:null:null),
            Info: this.props.Info,
            PositionBoxOpen: false,
            Action: this.props.Action,
            TabId: this.props.TabId,
            File: null,
            StatusMessage: this.props.StatusMessage,
            hasRepetition: false,
        }

        this.handleFioChange = this.handleFioChange.bind(this);
        this.handleDoBChange = this.handleDoBChange.bind(this);
        this.handleInfoChange = this.handleInfoChange.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.togglePositionBox = this.togglePositionBox.bind(this);
        this.positionBoxClickHandler = this.positionBoxClickHandler.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.personRedactorHandler = this.personRedactorHandler.bind(this);
        this.handleYoBChange = this.handleYoBChange.bind(this);
    }

    //  static getDerivedStateFromProps(props:PersonRedactorViewProps,state:PersonRedactorFormState){
    //     return{
    //         Id: props.Id,
    //         SourcesUrl_id: props.SourcesUrl_id,
    //         Position: props.Position,
    //         Fio: props.Fio,
    //         DoB: props.DoB,
    //         Info: props.Info,
    //         PositionBoxOpen: false,
    //         Action: props.Action,
    //         TabId: props.TabId,
    //         StatusMessage: props.StatusMessage,
    //         hasRepetition:false,
    //     };
    // }

    handleFileChange(event: any) {
        const file: File = event.target.files[0];
        this.setState({ File: file });
    }

    handleFioChange(event: any) {
        const fioWithoutSpaces = event.target.value.replace(/\s{2,}/, ' ');
        const hasRepetition = this.props.Persons.some((person) => { if (person.FIO == fioWithoutSpaces) return true; return false; })
        this.setState({ ...this.state, Fio: fioWithoutSpaces, hasRepetition: hasRepetition });

    }

    handleDoBChange(event: any) {
        //console.log(event.target.value);
        
        const removeComma = event.target.value.replace(',', '.');
        const value = removeComma.replace(/[a-zA-ZА-Яа-я]+/g, '');

        this.setState({ ...this.state, DoB: value.replace(/^\s+/, ''),YoB:null });
    }

    handleYoBChange(event: any) {
        //console.log(event.target.value);

        const removeComma = event.target.value.replace(',', '.');
        const value = removeComma.replace(/[a-zA-ZА-Яа-я]+/g, '');

        this.setState({ ...this.state, YoB: value.replace(/^\s+/, ''), DoB: null });
    }

    handleInfoChange(event: any) {
        this.setState({ ...this.state, Info: event.target.value.replace(/\s{2,}/, ' ') });
    }

    handlePositionChange(event: any) {
        event.stopPropagation();
        this.setState({ ...this.state, Position: event.target.value.replace(/\s{2,}/, ' ') })
    }

    togglePositionBox(event: any) {
        event.stopPropagation();
        this.setState({ PositionBoxOpen: !this.state.PositionBoxOpen })
    }

    positionBoxClickHandler(event: any) {
        this.setState({ Position: event.target.innerHTML })
    }

    personRedactorHandler(event: any) {
        this.setState({ PositionBoxOpen: false })
    }


    componentDidMount() {
        if (this.state.Fio != '') {
            this.props.onFindLocalRepetition(this.state.Fio, this.state.TabId);
        }
    }

    render() {
        const { Fio, DoB, Position, Info, InArchive, onClose, onUpdate,
            onSave, TabId, onDelete, onArchive, onDeleteFromArchive,
            StatusMessage, Id, onFindLocalRepetition
            , repetitions, openRepetition,
            closeRepetition, repetiotionIsOpen, FileName } = this.props;
        const statusDiv = () => {
            switch (this.props.StatusMessage.operationType) {
                case DELETE_PERSON_ERROR: {
                    return (<div className="alert alert-error">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Ошибка!</strong> {this.props.StatusMessage.messageText}
                    </div>);
                }

                case DELETE_PERSON_SUCCESS: {
                    return (<div className="alert alert-success">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Успешно удалено!</strong>
                    </div>)
                }

                case CREATE_NEW_PERSON_SUCCESS: {
                    return (<div className="alert alert-success">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Успешно сохранено!</strong>
                    </div>)

                }

                case CREATE_NEW_PERSON_ERROR: {

                    return (<div className="alert alert-error">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Ошибка!</strong> {this.props.StatusMessage.messageText}
                    </div>);

                }

                case ARCHIVE_PERSON_SUCCESS: {
                    return (<div className="alert alert-success">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Успешно перенесено в архив!</strong>
                    </div>)
                }

                case ARCHIVE_PERSON_ERROR: {
                    return (<div className="alert alert-error">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Ошибка!</strong> {this.props.StatusMessage.messageText}
                    </div>);
                }

                case DELETE_FROM_ARCHIVE_PERSON_SUCCESS: {
                    return (<div className="alert alert-success">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Успешно удалено из архива!</strong>
                    </div>)
                }

                case DELETE_FROM_ARCHIVE_PERSON_ERROR: {
                    return (<div className="alert alert-error">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Ошибка!</strong> {this.props.StatusMessage.messageText}
                    </div>);
                }

                case UPDATE_PERSON_SUCCESS: {
                    return (<div className="alert alert-success">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Успешно обновлено!</strong>
                    </div>)
                }

                case UPDATE_PERSON_ERROR: {
                    return (<div className="alert alert-error">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Не удалось обновить запись!</strong> {this.props.StatusMessage.messageText}
                    </div>);
                }

                case CLOSE_REDACTOR: {
                    return ""
                }
                default: return '';
            }
        }


        const archiveBtn = () => {
            if (this.props.Action == UPDATE_PERSON || this.props.Action == CREATE_NEW_PERSON_SUCCESS) {
                if (!this.props.InArchive) {
                    return (
                        <input type='button' className='btn btn-info personRedactor__archive_btn'
                            value='В архив'
                            onClick={() => onArchive(this.props.Id, this.props.TabId)}
                        />
                    )
                } else {
                    return (
                        <input type='button' className='btn btn-info personRedactor__archive_btn'
                            value='Удалить из архива'
                            onClick={() => onDeleteFromArchive(this.props.Id, this.props.TabId)}
                        />
                    )
                }
            } else {
                return '';
            }
        }

        const updateOrSaveBtn = () => {
            switch (this.state.Action) {
                case UPDATE_PERSON: {
                    return (
                        <input type="button"
                            className="btn btn-success"
                            value="Обновить"
                            onClick={(event:any) => {
                                (onUpdate({
                                    Id: this.props.Id,
                                    Fio: this.state.Fio,
                                    DoB: this.state.DoB != null ? this.state.DoB : this.state.YoB != null ? this.state.YoB : null,
                                    Info: this.state.Info,
                                    SourcesUrl_id: this.state.SourcesUrl_id,
                                    Position: this.state.Position,
                                    File: this.state.File
                                }));

                                let target = event.target;
                                target.disabled = true;
                                setTimeout(() => {
                                    target.disabled = false;
                                }, 1000);
                            }
                            } />
                    );
                }

                case CREATE_NEW_PERSON: {
                    return (
                        <input type="button"
                            className="btn btn-success"
                            value="Создать"
                            onClick={(event:any) => {
                                (onSave({
                                    Id: this.props.Id,
                                    Fio: this.state.Fio,
                                    DoB: this.state.DoB != null ? this.state.DoB : this.state.YoB != null ? this.state.YoB : null,
                                    Info: this.state.Info,
                                    SourcesUrl_id: this.state.TabId,
                                    Position: this.state.Position,
                                    File: this.state.File

                                }))
                            
                                
                                let target = event.target;
                                target.disabled = true;
                                setTimeout(() => {
                                    target.disabled = false;
                                }, 100)
                            }
                            } />
                    )
                }

                default: return "";
            }

        }

        const deleteBtn = () => {
            switch (this.props.Action) {
                case CREATE_NEW_PERSON:
                    return '';

                case UPDATE_PERSON: {
                    return (
                        <div className="pull-left">
                            <button className='btn btn-danger' onClick={() => onDelete(this.props.Id, this.state.TabId)}>Удалить</button>
                        </div>)
                }

                default: return '';
            }
        }

        return (
           
            
                <div className='col-sm-6  personRedactor' onClick={this.personRedactorHandler}>
                {/* <Scrollbars autoHeight={true} autoHeightMax={700}> */}
                <div className='pull-right close' onClick={onClose}>
                    <span> <img style={{ width: "15px"}}src="/Content/themes/base/images/close_btn.svg"></img></span>
                    {/* <span className="icon-remove"></span> */}
                </div>
                <div className='' ><h4>Редактирование записи</h4></div>

                <form className="form-horizontal">
                    {statusDiv()}
                    <div className="control-group">
                        <label className="control-label" >Id</label>
                        <div className="controls">
                            <label style={{ padding: "5px 0 0 0px" }}>{this.props.Id || ""}</label>
                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label" >ФИО</label>
                        <div className="controls">
                            <input type="text"
                                value={this.state.Fio.replace(/\s+/, ' ') || ""}
                                onChange={this.handleFioChange}
                                onBlur={() => { if (this.state.Fio !== '') return onFindLocalRepetition(this.state.Fio, this.state.TabId) }}
                                autoFocus={true}
                            />
                            {(repetitions.length) ? (
                                <span>
                                    <div onClick={() => openRepetition()}
                                        className=" alert alert-error repetition_alert repetition_alert_padding">Повтор</div>
                                    <Repetition
                                        key={"-1"}
                                        repetitions={repetitions}
                                        OpenRepetitionWindow={repetiotionIsOpen}
                                        OnClose={closeRepetition}
                                        id={"-1"}
                                    ></Repetition>
                                </span>) : ""

                            }
                            {(this.state.hasRepetition == true) ?
                                <div className="alert alert-error repetition_alert_padding">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>Обнаружен повтор в текущей вкладке</strong>
                                </div>
                                : ""}
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label" >Дата рождения</label>
                        <div className="controls">
                            <div className='container-fluid'>

                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <InputMask mask="99.99.9999" maskChar="_" type='text' value={this.state.DoB!=null?this.state.DoB: ""} onChange={this.handleDoBChange} />
                                    </div>
                                    <div className='col-sm-6'>
                                        <InputMask value={this.state.YoB != null ? this.state.YoB : ""} mask="9999" maskChar="_" type='text' onChange={this.handleYoBChange} />
                                    </div>
                                </div>
                            </div>
                            {/* <input type="date" value={this.state.DoB.indexOf('-')!=-1?this.state.DoB:""} onChange={this.handleDoBChange} />
                            <InputMask value={(this.state.DoB.indexOf('-')==-1?this.state.DoB:"")} mask="9999" maskChar="_" type='text' /> */}

                        </div>
                    </div>
                    <div className="control-group">
                        <label className="control-label" >Должность</label>
                        <div className="controls">
                            <input type="text" value={this.state.Position || ""} onChange={this.handlePositionChange} />
                            <span className="drop-down" onClick={(event) => this.togglePositionBox(event)}></span>
                        </div>
                        {this.state.PositionBoxOpen ?
                            <div className="controls position_box_wrapper" >
                                <div className="position_box" onClick={(event) => this.positionBoxClickHandler(event)}>
                                    <div className="position_box__item" >Председатель суда</div>
                                    <div className="position_box__item" >И.о. председателя суда</div>
                                    <div className="position_box__item" >Заместитель председателя суда</div>
                                    <div className="position_box__item" >Судья</div>
                                </div>
                            </div> : ""}
                    </div>
                    <div className="control-group">
                        <label className="control-label" >Доп. информация</label>
                        <div className="controls">
                            <textarea value={this.state.Info || ''} onChange={this.handleInfoChange} rows={5}></textarea>
                        </div>

                    </div>
                    <div className="control-group">
                        <label className="control-label" >Изображение</label>
                        <div className="controls">
                            <input type="file" id="file" onChange={this.handleFileChange} />
                        </div>

                    </div>

                    <div className="control-group">
                        <div className="controls">
                            {(FileName != null ? <img style={{ width: "70px" }} src={"/o/"+this.state.SourcesUrl_id +'/'+ FileName} /> : "")}
                        </div>

                    </div>


                </form>
                {deleteBtn()}
                {/* <div className= "pull-left">
                <button className='btn btn-danger' onClick={() => onDelete(this.props.Id, this.state.TabId)}>Удалить</button>
                </div> */}
                <div className="pull-right" >

                    {archiveBtn()}
                    {updateOrSaveBtn()}
                </div>
                {/* </Scrollbars> */}
                </div>
                
       
        )
    }

}