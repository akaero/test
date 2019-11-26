import { string } from "prop-types";
import { INIT_TAB } from "../model/models/constants";
import { colorize } from "./Colorize";
import { findRepetitions } from "./FindRepetiotions";
import DataItem from "../model/interfaces/DataItem";
import { SetManualTab } from "./TabTypeAction";

//загружаем информацию о табе
export function initStateAsync(tabId: string) {
    return (
        function (dispatch:any) {
            return (
                fetch('Official/InitTab/', {
                    method: "POST", headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }, body: JSON.stringify({ id: tabId }), credentials: 'include'
                }
                ).then(
                    res => res.json()
                ).then(
                    function (res) {
                       
                        dispatch({
                            type: INIT_TAB,
                            data: res
                        });

                        if(res.SourcesUrl.IsManual){
                            dispatch(SetManualTab());
                        } else{
                            if(res.SourcesUrl.Html&&res.Rows.length){
                                dispatch(colorize(res.SourcesUrl.Html,res.Rows));
                                dispatch(findRepetitions(res.Rows,tabId));
                            }
                            
                        }

                        
                    }
                )
            )
        }
    );
}


