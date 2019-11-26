import * as React from 'react';
import FioList from '../FioList/FioList';
import StateRow from '../StateRow/StateComponent';
import PersonRedactor from '../PersonRedactor/PersonRedactor';
import ContextMenu from '../../ContextMenu/ContextMenu';
import { TAB_TYPE_MANUAL } from '../../../model/models/constants';


interface IContentProps {
    tabId: string;
    html: string;
    openRedactor:boolean;
    OpenContextMenu:any,
    CloseContextMenu:any,
    typeOfTab:string,
    onCreatePerson:any

}

class ContentView extends React.Component<IContentProps>{
    constructor(props: IContentProps) {
        super(props);
    }
     

    render() {
        var { tabId, html,openRedactor, typeOfTab , onCreatePerson} = this.props;
        const htmlRaw = { __html: html }
        return (
            
            <div className="row" 
            
            >
            <ContextMenu/>
                <div className="col-sm-5">
                {(typeOfTab!=TAB_TYPE_MANUAL)? <div id={tabId} className="col-sm-12 html"
                     dangerouslySetInnerHTML={htmlRaw}
                     onContextMenu={(event)=>this.props.OpenContextMenu(event, window.getSelection().toString())} 
                     onClick={this.props.CloseContextMenu}
                     >
                      
                    </div>:
                    <div><input type='button' value='Создать запись'onClick={onCreatePerson}/></div>
                }
                   
                   
                </div>
                <div className="col-sm-7">
                    <StateRow />
                    <FioList></FioList>
                    {(openRedactor? <PersonRedactor/>:"")}
                </div>
            </div>
        )
    }

}

export default ContentView;