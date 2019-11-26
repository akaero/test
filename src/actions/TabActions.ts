import { MAKE_STATUS_CHECKED_SUCCESS, MAKE_STATUS_CHECKED_ERROR, HIDE_SOURCE_URL, SHOW_SOURCE_URL, HIDEORSHOW_SOURCE_URL_SUCCESS, HIDEORSHOW_SOURCE_URL_ERROR } from "../model/models/constants";
import { initStateAsync } from "./initTabStateAsync";

export default function MakeStatusChecked(id:string){
    return (dispatch:any)=>{
        return(
            fetch('/Official/MakeStatusChecked',{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id
                })
            }).then((res)=>res.json())
            .then((json)=>{
                if (json.status == 'success') {
                    dispatch({
                        type: MAKE_STATUS_CHECKED_SUCCESS,
                        id:id
                    });
                }
    
                if (json.status == 'error') {
                    dispatch({
                        type: MAKE_STATUS_CHECKED_ERROR,
                        message: json.message
                    })
                }
            })
        )
    }
}

export function HideOrShowCard(tabId:string, hideorshow:string){
return (dispatch:any)=>{

    var action:number=0;
    if(hideorshow == HIDE_SOURCE_URL) 
    {
        dispatch({type:HIDE_SOURCE_URL});
        action = 0;
    }
    if(hideorshow == SHOW_SOURCE_URL) {
        action = 1;
        dispatch({type:SHOW_SOURCE_URL})
    }
     return   fetch("/official/HideCurrentOfficial", {
            method:"post", headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body:JSON.stringify({id:tabId, todo:action}),credentials: 'include'
    })
    .then((resp)=>{
        if(resp.status==200) 
            return ; 
        
        dispatch({type:HIDEORSHOW_SOURCE_URL_ERROR});
        throw new TypeError("Не удалось обновить статус")})
    .then(()=>{
        dispatch({type:HIDEORSHOW_SOURCE_URL_SUCCESS});
        if(hideorshow == SHOW_SOURCE_URL) 
           dispatch(initStateAsync(tabId));
    })
    ;
}


}

