import DataItem from "../model/interfaces/DataItem";
import { UPDATE_PERSON, CREATE_NEW_PERSON, CREATE_NEW_PERSON_SUCCESS, CREATE_NEW_PERSON_ERROR, DELETE_PERSON, DELETE_PERSON_SUCCESS, DELETE_PERSON_ERROR, ARCHIVE_PERSON, ARCHIVE_PERSON_SUCCESS, ARCHIVE_PERSON_ERROR, DELETE_FROM_ARCHIVE_PERSON_ERROR, DELETE_FROM_ARCHIVE_PERSON_SUCCESS, UPDATE_PERSON_SUCCESS, UPDATE_PERSON_ERROR } from "../model/models/constants";
import { PersonRedactorFormState } from "../components/Tab/PersonRedactor/PersonRedactorView";
import { initStateAsync } from "./initTabStateAsync";
import { findRepetitions } from "./FindRepetiotions";
import { colorize } from "./Colorize";
import { findDOMNode } from "react-dom";

export function UpdatePerson(person: PersonRedactorFormState) {
    return function (dispatch: any) {
        let fd = new FormData();
        if (person.Id != null) fd.append("id", person.Id);
        if (person.SourcesUrl_id != null) fd.append("SourcesUrl_id", person.SourcesUrl_id);
        if (person.Fio != null) fd.append("Fio", person.Fio);
        if (person.DoB != null) fd.append("DoB", person.DoB);
        if (person.Position != null) fd.append("PositionName", person.Position);
        if (person.Info != null) fd.append("Info", person.Info);
        if (person.File != null) fd.append("file", person.File);
        return (


            fetch('/Official/SaveRpdl', {
                method: "POST",
                headers: {
                    'Accept': 'application/json'
                },
                body:
                    //  JSON.stringify({
                    //     id: person.Id,
                    //     SourcesUrl_id: person.SourcesUrl_id,
                    //     FIO: person.Fio,
                    //     DoB: person.DoB,
                    //     PositionName: person.Position,
                    //     info: person.Info
                    // })
                    fd
            ,credentials: 'include'})
                .then((res) => res.json())
                .then((json: any) => {
                    if (json.status == 'success') {
                        dispatch({
                            type: UPDATE_PERSON_SUCCESS,
                            person: person
                        });

                        dispatch(initStateAsync(person.SourcesUrl_id));
                    }

                    if (json.status == 'error') {
                        dispatch({
                            type: UPDATE_PERSON_ERROR,
                            message:json.message
                        })
                    }
                })

        )
    }
}


function sendPersonToServer(person: PersonRedactorFormState) {

}

export function createPerson(person: PersonRedactorFormState) {
    return function (dispatch: any) {
        let fd = new FormData();
        if (person.Id != null) fd.append("id", person.Id);
        if (person.SourcesUrl_id != null) fd.append("SourcesUrl_id", person.SourcesUrl_id);
        if (person.Fio != null) fd.append("Fio", person.Fio);
        if (person.DoB != null) fd.append("DoB", person.DoB);
        if (person.Position != null) fd.append("PositionName", person.Position);
        if (person.Info != null) fd.append("Info", person.Info);
        if (person.File != null) fd.append("file", person.File);

        dispatch({ type: CREATE_NEW_PERSON });
        return (
            fetch('/Official/SaveRpdl', {
                method: "POST",
                headers: {
                    'Accept': 'application/json'
                    
                },
                body: fd
                // JSON.stringify({
                //     id: person.Id,
                //     SourcesUrl_id: person.SourcesUrl_id,
                //     FIO: person.Fio,
                //     DoB: person.DoB,
                //     PositionName: person.Position,
                //     info: person.Info
                // })
            })
                .then((response) => response.json())
                .then((json: any) => {

                    if (json.status == 'success') {
                        dispatch(initStateAsync(person.SourcesUrl_id));
                        dispatch({
                            type: CREATE_NEW_PERSON_SUCCESS,
                            message: 'success',
                            id: json.id
                        });


                    }

                    if (json.status == 'error') {
                        dispatch({
                            type: CREATE_NEW_PERSON_ERROR,
                            message: json.message
                        })
                    }
                }
                )
        )
    };

}

export function removePerson(id: string, tabId: string) {
    return (dispatch: any) => {
        fetch('/Official/DeletePerson', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })
            .then((res) => res.json())
            .then((json: any) => {
                if (json.status == 'success') {
                    dispatch({
                        type: DELETE_PERSON_SUCCESS,
                        id: id
                    });

                    //dispatch(initStateAsync(tabId));
                }

                if (json.status == 'error') {
                    dispatch({
                        type: DELETE_PERSON_ERROR,
                        message: json.message
                    })
                }
            })
    }
}

export function archivePerson(id: string, tabId:string) {
    return (dispatch: any) => {
        fetch('/Official/ArchivePerson', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })
            .then((res) => res.json())
            .then((json: any) => {
                if (json.status == 'success') {
                    dispatch({
                        type: ARCHIVE_PERSON_SUCCESS,
                        id: id
                    });

                    dispatch(initStateAsync(tabId));
                }

                if (json.status == 'error') {
                    dispatch({
                        type: ARCHIVE_PERSON_ERROR,
                        message: json.message
                    })
                }
            })
    }
}

export function deleteFromArchivePerson(id: string, tabId: string) {
    return (dispatch: any) => {
        fetch('/Official/RemoveFromArchivePerson', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })
            .then((res) => res.json())
            .then((json: any) => {
                if (json.status == 'success') {
                    
                    dispatch({
                        type: DELETE_FROM_ARCHIVE_PERSON_SUCCESS,
                        id: id
                   });
                
                    dispatch(initStateAsync(tabId));

                   
                }

                if (json.status == 'error') {
                    dispatch({
                        type: DELETE_FROM_ARCHIVE_PERSON_ERROR,
                        message: json.message
                    })
                }
            })
    }
}