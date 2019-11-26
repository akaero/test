import { connect } from 'react-redux'
import State from '../../../model/interfaces/store';
import ContentView from './ContentView';
import { openContextMenu, closeContextMenu, createNewPerson } from '../../../actions/ContextMenuAction';
import { contextMenuView } from '../../ContextMenu/ContextMenuView';

const mapStateToProps = (state:State)=>{
    return{
      tabId: state.tabId,
      html: state.html,
      openRedactor:state.openRedactor,
      typeOfTab:state.typeOfTab
    }
}

 const mapDispatchToProps = (dispatch:any)=>{
   return({
     OpenContextMenu:(event:any, selection:string)=>dispatch(openContextMenu(event, selection)),
     CloseContextMenu:()=>dispatch(closeContextMenu()),
     onCreatePerson:()=> dispatch(createNewPerson(""))
   })
  
 }

const Content = connect(mapStateToProps,mapDispatchToProps)(ContentView)
export default Content;