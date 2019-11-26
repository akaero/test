import { OPEN_REDACTOR, CLOSE_REDACTOR } from "../model/models/constants";

export function OpenRedactor(personId:string){
    if(personId !==''){
        return{
            type:OPEN_REDACTOR,
            id:personId
        }
    }

    return;
}

export function CloseRedactor(){
    return{
        type:CLOSE_REDACTOR,
    }
}