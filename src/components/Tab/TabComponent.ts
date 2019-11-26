import { connect } from 'react-redux'
import State from '../../model/interfaces/store';
import { TabView } from './TabView';
import { initStateAsync } from '../../actions/initTabStateAsync';

const mapStateToProps = (state:State)=>{
    return{
        html:state.html,
        source_name: state.source_name,
        tabId: state.tabId,
        typeOfTab:state.typeOfTab
    }
}

const mapDispatchToProps = (dispatch:any)=>({
    initTab  : (id:string):any => dispatch(initStateAsync(id))
})

const Tab = connect(mapStateToProps, mapDispatchToProps)(TabView)
export default Tab;