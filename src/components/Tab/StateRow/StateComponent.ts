import { connect } from 'react-redux'
import State from '../../../model/interfaces/store';
import { StateRowView } from './StateComponentView';
import MakeStatusChecked, { HideOrShowCard } from '../../../actions/TabActions';
import { createNewPerson } from '../../../actions/ContextMenuAction';

const mapStateToProps = (state:State)=>{
    return{
        cardIsHidden:state.cardIsHidden,
        tabId: state.tabId,
    }
      
    
}

 const mapDispatchToProps = (dispatch:any)=> {
     return({
    onMakeStatusChanged:(id:string)=>dispatch(MakeStatusChecked(id)),
    onHideOrShow:(id:string, action:string)=>dispatch(HideOrShowCard(id,action)),
    onCreatePerson:()=> dispatch(createNewPerson(""))
})
    
 }

const StateRow = connect(mapStateToProps,mapDispatchToProps)(StateRowView)
export default StateRow;