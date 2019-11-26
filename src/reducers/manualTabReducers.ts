import StateRow from "../components/Tab/StateRow/StateComponent";
import { combineReducers } from "redux";
import { LOAD_GOS_ORG_LIST_ERROR, LOAD_GOS_ORG_LIST, LOAD_GOS_ORG_LIST_CLOSE, LOAD_REGIONS_LIST, LOAD_REGIONS_LIST_CLOSE, LOAD_REGIONS_LIST_ERROR, MANUAL_ADD } from "../model/models/constants";
import { OrgItem, RegionItem } from "../model/interfaces/LoadOrgsResponse";

//manualTabMainReducer
export const manualTabReducer = combineReducers(
    {
        gosOrgs:gosOrgsReducer,
        error:errorReducer,
        region:regionReducer,
        savedId:savedIdReducer
        
    })


function gosOrgsReducer(state: OrgItem[] = [], action: any ) {
    switch (action.type) {

        case LOAD_GOS_ORG_LIST:{
            return (action.list!=null?action.list:[])
        }

        case LOAD_GOS_ORG_LIST_CLOSE:{
            return [];
        }
        default:
            return state;
    }
}

function regionReducer(state:RegionItem[]=[], action:any){
    switch(action.type){
        case LOAD_REGIONS_LIST:{
            return (action.list!=null?action.list:[])
        }

        case LOAD_REGIONS_LIST_CLOSE:{
            return [];
        }
        default: return state;
    }
}

function errorReducer(state:string="",action:any ){
    switch(action.type){
        case LOAD_GOS_ORG_LIST_ERROR:{
            return LOAD_GOS_ORG_LIST_ERROR;
        }

        case LOAD_REGIONS_LIST_ERROR:{
            return LOAD_REGIONS_LIST_ERROR;
        }

        default: return state;
    }
}

function savedIdReducer(state:string = "", action:any){
    switch(action.type){
        case MANUAL_ADD:{
            return action.id;
        }

        default: return state;
    }
}

