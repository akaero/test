import { connect } from 'react-redux'
import State from '../../../model/interfaces/store';
import HeaderView, { HeaderProps } from './HeaderView';

const mapStateToProps = (state:State):HeaderProps=>{
    return{
        Remark:state.source_name,
        ParseUrl:state.url,
        UpdateDate:state.dateOfLastSave,
        backgroundWorkers: state.backgroundWorkers,
        typeOfTab:state.typeOfTab
    }
}



const Header = connect(mapStateToProps,{})(HeaderView)
export default Header;