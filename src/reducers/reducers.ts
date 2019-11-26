import State from "../model/interfaces/store";
import { combineReducers } from "redux";
import DataItem from "../model/interfaces/DataItem";
import { Reducer } from "react";
import { INIT_TAB, OPEN_REDACTOR, CLOSE_REDACTOR, COLORIZE, FIND_REPETIOTION, OPEN_REPETIOTION, CLOSE_REPETIOTION, UPDATE_PERSON, OPEN_CONTEXT_MENU, CLOSE_CONTEXT_MENU, CREATE_NEW_PERSON, CREATE_NEW_PERSON_SUCCESS, CREATE_NEW_PERSON_ERROR, DELETE_PERSON_SUCCESS, DELETE_PERSON_ERROR, DELETE_PERSON, ARCHIVE_PERSON_SUCCESS, ARCHIVE_PERSON_ERROR, DELETE_FROM_ARCHIVE_PERSON_SUCCESS, DELETE_FROM_ARCHIVE_PERSON_ERROR, UPDATE_PERSON_SUCCESS, UPDATE_PERSON_ERROR, MAKE_STATUS_CHECKED_SUCCESS, MAKE_STATUS_CHECKED_ERROR, FIND_REPETIOTION_FROM_REDACTOR, OPEN_REPETIOTION_REDACTOR, CLOSE_REPETIOTION_REDACTOR, FIND_REPETIOTION_START, FIND_REPETIOTION_END, COLORIZE_START, COLORIZE_END, TAB_TYPE_AUTO, TAB_TYPE_MANUAL, HIDEORSHOW_SOURCE_URL_SUCCESS } from "../model/models/constants";
import { Repetition } from "../components/Tab/Repetiotion/Repetition";
import { UpdatePerson } from "../actions/PersonActions";
import { ContextMenuModel } from "../model/interfaces/ContextMenu";
import StatusMessage from "../model/interfaces/statusMessage";

export function initHtmlReducer(state:string|null = null, action:any){
    switch(action.type){

        case INIT_TAB:
            return action.data.SourcesUrl.Html||state

        default:return state;
    }
}

export function contextMenuOpenReducer(state: ContextMenuModel = { IsOpen: false, x: 0, y: 0, selection: "" }, action: any): ContextMenuModel {
    switch (action.type) {

        case OPEN_CONTEXT_MENU: {
            return {
                x: action.x,
                y: action.y,
                IsOpen: true,
                selection: action.selection
            };
        }

        case CLOSE_CONTEXT_MENU: {
            return {
                ...state,
                IsOpen: false
            };
        }

        case CREATE_NEW_PERSON:{
            return{
                ...state, IsOpen:false
            };
        }

        default:
            return state
    }
}

export function htmlReducer(state: string = "", action: any): string {
    switch (action.type) {
        case INIT_TAB: {
            return action.data.SourcesUrl.Html||state
        }

        case COLORIZE: {
            return action.html;
        }

        default: return state;
    }
}

export function source_nameReducer(state: string = "loading...", action: any) {
    switch (action.type) {
        case INIT_TAB: {
            return action.data.SourcesUrl.Remark
        }
        default: return state;
    }
}

export function UrlReducer(state: string = "", action: any) {
    switch (action.type) {
        case INIT_TAB: {
            return action.data.SourcesUrl.parseUrl
        }
        default: return state;
    }
}


export function UdateOfLastSaveReducer(state: string = "", action: any) {
    switch (action.type) {
        case INIT_TAB: {
            return action.data.SourcesUrl.UpdateDateString;
        }
        default: return state;
    }
}

export function cardIsHiddenReducer(state: boolean = false, action: any) {
    switch (action.type) {
        case INIT_TAB: {
            return action.data.SourcesUrl.IsHidden
        }

        case HIDEORSHOW_SOURCE_URL_SUCCESS:{
            return !state;
        }

        default: return state;
    }
}
/*data reducer*/
export function dataReducer(state: Array<DataItem> = [], action: any) {
    switch (action.type) {
        case INIT_TAB: {
            const resultDataArray = action.data.Rows.map((element: DataItem) => {
                return { ...element, isInRawHtml: null, isRepetition: false, repetitionsInfo: [], OpenRepetitionWindow: false }
            });

            return resultDataArray; //action.data.Rows;
        }
        case FIND_REPETIOTION: {
            const resultPersons = state.map((per: DataItem) => {
                if (action.answer.some((answ: any) => answ.name == per.FIO)) {
                    const repetitions = action.answer.filter((a: any) => a.name == per.FIO)[0].tabs;
                    return { ...per, isRepetition: true, repetitionsInfo: repetitions };
                }


                return per;
            });
            return resultPersons;
        }

        case OPEN_REPETIOTION: {
            return state.map((element: DataItem) => {
                if (element.id == action.id)
                    return { ...element, OpenRepetitionWindow: true }

                return element;
            })
        }

        case CLOSE_REPETIOTION: {
            return state.map((element: DataItem) => {
                if (element.id == action.id)
                    return { ...element, OpenRepetitionWindow: false }

                return element;
            })
        }

        case COLORIZE: {
            return action.persons;
        }

        case UPDATE_PERSON_SUCCESS: {
            return state.map((person: DataItem) => {
                if (person.id == action.person.Id)
                    return { ...person, FIO: action.person.Fio, DoB: action.person.DoB, info: action.person.Info }

                return person;
            });
        }

        case DELETE_PERSON_SUCCESS:{
            return state.filter((person:DataItem)=>{
                if(person.id != action.id) 
                    return true; else return false;
                });
        }

        case ARCHIVE_PERSON_SUCCESS:{
            return state.map((person:DataItem)=>{
                if(person.id == action.id) 
                 return {...person, DeleteDate:"now", isInRawHtml:null}
                 else return person;
            })
        }

        case DELETE_FROM_ARCHIVE_PERSON_SUCCESS:{
            return state.map((person:DataItem)=>{
                if(person.id == action.id) 
                 return {...person, DeleteDate:null, isInRawHtml:false}
                 else return person;
            })
        }

        case HIDEORSHOW_SOURCE_URL_SUCCESS:{
            return state.filter((person:DataItem)=>{
                if(person.DeleteDate == null) return false;
                    return true;
            })
        }
        default:
            return state;
    }
}



export function tabIdReducer(state: string = "", action: any) {
    switch (action.type) {
        default:
            return state;
    }
}

export function dataEditingIdReducer(state: string = '0', action: any) {
    switch (action.type) {
        case OPEN_REDACTOR:
            return action.id;

        case CREATE_NEW_PERSON: {
            return 'new person';
        }

        case CREATE_NEW_PERSON_SUCCESS:{
            return action.id;
        }

        default:
            return state;
    }
}

export function openRedactorReducer(state: boolean = false, action: any) {
    switch (action.type) {
        case CLOSE_REDACTOR:
            return false;
        case OPEN_REDACTOR:
            return true;

        case CREATE_NEW_PERSON: {
            return true;
        }
        default:
            return state;
    }
}


export function pasteFioToRedactorReducer(state: string = '',action:any){
    switch(action.type){
        case CREATE_NEW_PERSON:{
            return action.fio||'';
        }
        default: return state;
    }
}

export function statusMessageReducer (state:StatusMessage={messageText:'', operationType:''},action:any){
    switch (action.type){
        case CREATE_NEW_PERSON_SUCCESS:{
            return {
                messageText:'Успешно сохранено',
                operationType:CREATE_NEW_PERSON_SUCCESS
            };
        }

        case CREATE_NEW_PERSON_ERROR:{
            return {
                messageText:action.message,
                operationType:CREATE_NEW_PERSON_ERROR
            }
        }

        case DELETE_PERSON_SUCCESS:{
            return {
                messageText:'Успешно удалено',
                operationType:DELETE_PERSON_SUCCESS
            }
        }
        
        case DELETE_PERSON_ERROR:{
            return {
                messageText:action.message,
                operationType:DELETE_PERSON_ERROR
            }
        }

        case ARCHIVE_PERSON_SUCCESS:{
            return {
                messageText:'Успешно перенесено в архив',
                operationType:ARCHIVE_PERSON_SUCCESS
            }
        }

        case ARCHIVE_PERSON_ERROR:{
            return {
                messageText:action.message,
                operationType:ARCHIVE_PERSON_ERROR
            }
        }

        case DELETE_FROM_ARCHIVE_PERSON_SUCCESS:{
            return {
                messageText:'Успешно удалено из архива',
                operationType:DELETE_FROM_ARCHIVE_PERSON_SUCCESS
            }
        }

        case DELETE_FROM_ARCHIVE_PERSON_ERROR: {
            return {
                messageText:action.message,
                operationType:DELETE_FROM_ARCHIVE_PERSON_ERROR
            }
        }

        case UPDATE_PERSON_SUCCESS:{
            return {
                operationType:UPDATE_PERSON_SUCCESS
            }
        }

        case UPDATE_PERSON_ERROR:{
            return {
                messageText:action.message,
                operationType:UPDATE_PERSON_ERROR
            }
        }

        case MAKE_STATUS_CHECKED_SUCCESS:{
            return {
                operationType:MAKE_STATUS_CHECKED_SUCCESS
            }
        }

        case MAKE_STATUS_CHECKED_ERROR:{
            return {
                messageText:action.message,
                operationType:MAKE_STATUS_CHECKED_ERROR
            }
        }
        
        case CLOSE_REDACTOR:{
            return {
                operationType:CLOSE_REDACTOR
            }
        }

        default: return state;
    }
}

export function repetitionInRedactorReducer(state:Repetition[]=[], action:any){
    switch(action.type){
        case FIND_REPETIOTION_FROM_REDACTOR:{
           if(action.answer){
               console.log(action.answer[0].tabs);
               return  action.answer[0].tabs;
           }
           return state;
        }

        case CLOSE_REDACTOR:{
            return [];
        }

        default: return state;


    }
}

export function OpenRepetitionInRedactorWindowReducer (state: boolean = false, action:any){
    switch(action.type){
        case OPEN_REPETIOTION_REDACTOR:{
            return true;
        }

        case CLOSE_REPETIOTION_REDACTOR:{
            return false;
        }

        case CLOSE_REDACTOR:{
            return false;
        }

        default : return state;
    }
}

export function backgroundWorkersReducer (state:string[]=[],action:any){
    switch(action.type){
        case FIND_REPETIOTION_START:{
            if(state.some((status)=>{
                if (status==FIND_REPETIOTION) return true;
                return false;
            })){
                return state;
            } else
            return [...state, FIND_REPETIOTION]
        }

        case FIND_REPETIOTION_END:{
            return state.filter((status)=>{
                if(status == FIND_REPETIOTION) return false;
                return true;
            })
        }

        case COLORIZE_START:{
            if(state.some((status)=>{
                if (status==COLORIZE) return true;
                return false;
            })){
                return state;
            } else
            return [...state, COLORIZE]
        }

        case COLORIZE_END:{
            return state.filter((status)=>{
                if(status == COLORIZE) return false;
                return true;
            })
        }
        
        default: return state;
    }
}

export function typeOfTabReducer(state:string="", action:any){
    switch (action.type) {
        case TAB_TYPE_AUTO:{
            return TAB_TYPE_AUTO;
        }

        case TAB_TYPE_MANUAL:{
            return TAB_TYPE_MANUAL;
        }
        default: return state;
        
    }
}