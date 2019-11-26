import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { htmlReducer } from './reducers/reducers';
import thunk from 'redux-thunk';
import State from './model/interfaces/store';
import Tab from './components/Tab/TabComponent';
import ManualTab from './components/Manual_add_tab/ManualTab/ManualTab';
import { TAB_TYPE_AUTO } from './model/models/constants';

var tabId = (window as any).officialTabId;
interface Props {
  name: string
}

const initialState = {
  tabId: tabId,
} as State
const w: any = window;
const composeEnhancers = w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState as any, composeEnhancers(
    applyMiddleware(thunk)
  ));


class App extends React.Component {

  render() {
    return (
      <Provider store={store} >
     
      {(tabId == -1)?<ManualTab/>:
      
        <Tab></Tab>
      }
      </Provider>
    )

  }
}


var mountNode = document.getElementById("tab_" + tabId);
//console.log(tabId);

ReactDOM.render(<App />, mountNode);
