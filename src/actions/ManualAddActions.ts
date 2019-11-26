import { LOAD_GOS_ORG_LIST_ERROR, LOAD_GOS_ORG_LIST, LOAD_GOS_ORG_LIST_CLOSE, LOAD_REGIONS_LIST_ERROR, LOAD_REGIONS_LIST, LOAD_REGIONS_LIST_CLOSE, MANUAL_ADD, MANUAL_ADD_ERROR } from "../model/models/constants";
import { LoadOrgsResponse } from "../model/interfaces/LoadOrgsResponse";
import { ManualTabResponse } from "../model/interfaces/IManualTab";

export function GosOrganHelper(value: string) {
    return (dispatch: any) => {


        fetch("/official/OrgFinder",
            {
                method: "POST", headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({ input: value }), credentials: 'include'
            }
        ).then(
            (result) => {
                if (result.status == 200) {
                    return result.json();
                }

                if (result.status == 204) {
                    dispatch({
                        type: LOAD_GOS_ORG_LIST,
                        list: null
                    })
                }
                dispatch({ type: LOAD_GOS_ORG_LIST_ERROR })
                throw new TypeError("Oops, we haven't got JSON!");

            }
        ).then(
            (json: LoadOrgsResponse) => {
                dispatch({
                    type: LOAD_GOS_ORG_LIST,
                    list: json
                })
            }

        )
    }
}

export function RegionHelper(value: string) {
    return (dispatch: any) => {
        fetch("/official/RegionFinder",
            {
                method: "POST", headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({ input: value }), credentials: 'include'
            }
        ).then(
            (result) => {
                if (result.status == 200) {
                    return result.json();
                }

                if (result.status == 204) {
                    dispatch({
                        type: LOAD_GOS_ORG_LIST,
                        list: null
                    })
                }
                dispatch({ type: LOAD_REGIONS_LIST_ERROR })
                throw new TypeError("Oops, we haven't got JSON!");

            }
        ).then(
            (json: LoadOrgsResponse) => {
                dispatch({
                    type: LOAD_REGIONS_LIST,
                    list: json
                })
            }

        )
    }
}

export function CloseGosOrganHelper() {
    return ({ type: LOAD_GOS_ORG_LIST_CLOSE });
}

export function CloseRegionsHelper(){
    return({type:LOAD_REGIONS_LIST_CLOSE});
}


export function ManualAdd(obj:ManualTabResponse){
    return (dispatch:any)=>{
    fetch('/Official/ManualSourceUrlSave',{
        method:'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(
            { 
                SourceUrlName: obj.SourceUrlName,
                SourceUrl:obj.SourceUrl,
                GosOrg:obj.GosOrg,
                Region:obj.Region
        }), credentials: 'include'
    }).then(
        (response)=>{
            if(response.status == 200){
                return response.json();
            }

            if(response.status == 500){
                dispatch({type:MANUAL_ADD_ERROR})
                throw TypeError(response.statusText)
            }

            throw TypeError("Ошибка при сохранении")
        }
    ).then((json)=>{
        dispatch({
            type:MANUAL_ADD,
            id:json.id
        })
    })
}
}