import * as React from 'react';
import Header from './Header/HeaderComponent';
import Content from './Content/Content';
import { Repetition } from './Repetiotion/Repetition';

interface ITabProps{
    html:string,
    source_name:string,
    tabId: string,
    initTab: any,
    typeOfTab:string
}


export class TabView extends React.Component<ITabProps,any> {
componentDidMount(){
  this.props.initTab(this.props.tabId);
}
    render() {
      var {html, source_name} = this.props;
      return( 
        <div className="row-fluid">
          <div className="container-fluid">
            <Header></Header>
            <Content></Content>
          </div>
        </div>
      )
      ;
    }
  }
  