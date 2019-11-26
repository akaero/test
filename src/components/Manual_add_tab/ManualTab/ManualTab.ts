import {connect} from 'react-redux'
import State from '../../../model/interfaces/store';
import { ManualTabView } from './ManualTabView';
import { GosOrganHelper, RegionHelper, CloseGosOrganHelper, CloseRegionsHelper, ManualAdd } from '../../../actions/ManualAddActions';
import { ManualTabResponse } from '../../../model/interfaces/IManualTab';

const   mapStateToProps =(state:State)=>{
    return({
        tabId:state.tabId,
        gosOrgs:state.manualTabStore.gosOrgs,
        regions:state.manualTabStore.region,
        savedId:state.manualTabStore.savedId
    })
    
}

const mapDispatchToProps = (dispatch: any) => {
    return({
        onGosOrganChange:(value:string)=>dispatch(GosOrganHelper(value)),
        onRegionChange:(value:string)=>dispatch(RegionHelper(value)),
        closeGosOrganHelper:()=>dispatch(CloseGosOrganHelper()),
        closeRegionHelper:()=>dispatch(CloseRegionsHelper()),
        onsendForm:(obj:ManualTabResponse)=>dispatch(ManualAdd(obj))
    })
}

const ManualTab = connect(mapStateToProps,mapDispatchToProps)(ManualTabView);
export default ManualTab;


