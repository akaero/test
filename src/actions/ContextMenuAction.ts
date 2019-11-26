import { OPEN_CONTEXT_MENU, CLOSE_CONTEXT_MENU, OPEN_REDACTOR, CREATE_NEW_PERSON } from "../model/models/constants";

export function openContextMenu(event:any, selection:string){
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    return({
        type:OPEN_CONTEXT_MENU,
        x: event.pageX,
        y: event.pageY,
        selection: selection
    });
}


export function closeContextMenu(){
    return({
        type:CLOSE_CONTEXT_MENU
    });
}

export function createNewPerson(fio:string){
    return {
        type:CREATE_NEW_PERSON,
        fio:fio
    }

}