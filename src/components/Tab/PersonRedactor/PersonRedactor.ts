import { connect } from 'react-redux'
import State from '../../../model/interfaces/store';
import { PersonRedactorView, PersonRedactorViewProps, PersonRedactorFormState } from './PersonRedactorView';
import { CloseRedactor } from '../../../actions/RedactorActions';
import { UpdatePerson, createPerson, removePerson, archivePerson, deleteFromArchivePerson } from '../../../actions/PersonActions';
import DataItem from '../../../model/interfaces/DataItem';
import { UPDATE_PERSON, CREATE_NEW_PERSON } from '../../../model/models/constants';
import { findRepetitions, findRepetitionsFromRedactor, OpenRepetiotion, CloseRepetition, OpenRepetiotionRedactor, CloseRepetitionRedactor } from '../../../actions/FindRepetiotions';

const mapStateToProps = (state: State) => {
    var currentPersons = state.data.filter((val) => val.id == state.dataEditingId);
    if (currentPersons.length) {
        const person = currentPersons[0];
        return ({
            Id: person.id,
            Fio: person.FIO,
            DoB: person.DoB,
            Position: person.PositionName,
            Info: person.info,
            FileName:person.PhotoFilename,
            InArchive: person.DeleteDate==null?false:true,
            SourcesUrl_id: person.SourcesUrl_id,
            Action: UPDATE_PERSON,
            TabId: state.tabId,
            StatusMessage: state.statusMessage,
            Persons: state.data, 
            html:state.html,
            repetitions: state.repetitionInRedactor,
            repetiotionIsOpen:state.OpenRepetitionInRedactorWindow,
            initHtml :state.html


        })
    }
    return ({
        Fio: state.pasteFioToRedactor,
        Action: CREATE_NEW_PERSON,
        TabId: state.tabId,
        StatusMessage: state.statusMessage,
        Persons: state.data,
        repetitions: state.repetitionInRedactor,
        repetiotionIsOpen:state.OpenRepetitionInRedactorWindow ,
        initHtml :state.html
    }
    );
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onClose: () => dispatch(CloseRedactor()),
        onUpdate: (person: PersonRedactorFormState) => dispatch(UpdatePerson(person)),
        onSave: (person: PersonRedactorFormState) => dispatch(createPerson(person)),
        onDelete: (id: string, tabId: string) => dispatch(removePerson(id, tabId)),
        onArchive: (id: string, tabId:string) => dispatch(archivePerson(id,tabId)),
        onDeleteFromArchive: (id:string, tabId:string) => dispatch(deleteFromArchivePerson(id, tabId)),
        onFindLocalRepetition: (data:string,tabId:string)=>dispatch(findRepetitionsFromRedactor(data,tabId)),
        
        openRepetition:()=>dispatch(OpenRepetiotionRedactor()),
        closeRepetition:()=>dispatch(CloseRepetitionRedactor()),
    }
}

const PersonRedactor = connect(mapStateToProps, mapDispatchToProps)(PersonRedactorView)
export default PersonRedactor;