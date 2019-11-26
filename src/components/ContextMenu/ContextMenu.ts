import { connect } from 'react-redux'
import State from '../../model/interfaces/store';
import { contextMenuView } from './ContextMenuView';
import { createNewPerson } from '../../actions/ContextMenuAction';

const mapStateToProps = (state:State)=>{
    return{
        show:state.contextMenuOpen.IsOpen,
        x:state.contextMenuOpen.x,
        y:state.contextMenuOpen.y,
        fio:state.contextMenuOpen.selection
    }
}

  const mapDispatchToProps = (dispatch:any)=> {
      return{
        CreateNewPerson:(fio:string)=>dispatch(createNewPerson(fio))
      }

  }

const ContextMenu = connect(mapStateToProps,mapDispatchToProps)(contextMenuView)
export default ContextMenu;