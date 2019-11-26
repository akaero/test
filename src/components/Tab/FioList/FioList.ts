import { connect } from 'react-redux'
import State from '../../../model/interfaces/store';
import { FioListView } from './FioListView';
import { openRedactorReducer } from '../../../reducers/reducers';
import { OpenRedactor, CloseRedactor } from '../../../actions/RedactorActions';
import { OpenRepetiotion, CloseRepetition } from '../../../actions/FindRepetiotions';
import MakeStatusChecked from '../../../actions/TabActions';

const mapStateToProps = (state:State)=>{
    return{
        items:state.data,
        statusMessage: state.statusMessage,
        redactorIsOpen:state.openRedactor,
        html:state.html
    }
      
    
}

const mapDispatchToProps = (dispatch:any)=>{
    return{
        editorHandler:(id:string)=>dispatch(OpenRedactor(id)),
        closeRedactor:()=>dispatch(CloseRedactor()),
        openRepetition:(id:string, event:any)=>dispatch(OpenRepetiotion(id,event)),
        closeRepetition:(id:string)=>dispatch(CloseRepetition(id)),
      
    }
    
}

const FioList = connect(mapStateToProps,mapDispatchToProps)(FioListView)
export default FioList;