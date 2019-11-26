import DataItem from "../model/interfaces/DataItem";
import { FIND_REPETIOTION, OPEN_REPETIOTION, CLOSE_REPETIOTION, FIND_REPETIOTION_FROM_REDACTOR, OPEN_REPETIOTION_REDACTOR, CLOSE_REPETIOTION_REDACTOR, FIND_REPETIOTION_START, FIND_REPETIOTION_END,  } from "../model/models/constants";

export function findRepetitions(persons: DataItem[], tabId: string) {
    return (
        function (dispatch: any) {
            dispatch({
                type:FIND_REPETIOTION_START
            });
            fetch('/Official/CheckRepetitions', {
                method: "POST", headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({ json: JSON.stringify(persons.map((per)=>per.FIO)), id: tabId }),credentials: 'include'
            })
                .then(
               
                     (response) =>{
                        
                        return response.json();
                    }
                )
                .then(
                    (answer) => {
                        dispatch({
                            type:FIND_REPETIOTION_END
                        });
                        
                        dispatch({
                            type:FIND_REPETIOTION,
                            answer: answer
                        }) 
                    }
                );
        }
    )
}

export function findRepetitionsFromRedactor(FIO: string, tabId: string) {
    return (
        
        function (dispatch: any) {
            dispatch({
                type:FIND_REPETIOTION_START
            });

            fetch('/Official/CheckRepetitions', {
                method: "POST", headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({ json: JSON.stringify([FIO]), id: tabId }), credentials: 'include'
            })
                .then(
               
                     (response) =>{
                        
                        return response.json();
                    }
                )
                .then(
                    (answer) => {
                       
            
                        dispatch({
                            type:FIND_REPETIOTION_END
                        });

                        dispatch({
                            type:FIND_REPETIOTION_FROM_REDACTOR,
                            answer: answer
                        }) 
                    }
                );
        }
    )
}

export function OpenRepetiotion(id:string, event:any){
    event.stopPropagation();
    return{
        type:OPEN_REPETIOTION,
        id:id
    }
}

export function CloseRepetition(id:string){
    return{
        type:CLOSE_REPETIOTION,
        id:id
    }
}

export function OpenRepetiotionRedactor(){
    return{
        type:OPEN_REPETIOTION_REDACTOR
    }
}

export function CloseRepetitionRedactor(){
    return{
        type:CLOSE_REPETIOTION_REDACTOR
    }
}