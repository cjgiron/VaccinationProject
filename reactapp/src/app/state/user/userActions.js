//action : an object that contains two properties : type and payload
//type : action type and payload : object that we want to update in reducer for new state (userObject)

import * as ActionTypes from "../actionTypes";

//action that would be dispatched to the store (eventually to reducer)
export const addUserToStore = (users) => ({    //user : is the user object dispatched from user component    
    type: ActionTypes.AddUserToStore,
    payload: {users}
})

export const signInUser = (user) => ({
    type: ActionTypes.SIGN_IN_USER,
    payload: {user}
})

export const signOutUser = () => ({
    type: ActionTypes.SIGN_OUT_USER
})

//we'll use react fetch api to make ajax post call to server to signup and signin user
export const signinUser = (userObject)=>{
    // thunk, returns function as an action
    return function (dispatch, getState) {
        // here we go with ajax call : to save data to the server or fetch it from the server
        // using fetch method of react
        console.log("called by thunk");
        //dispatch(loading(true));
        window.fetch("http://localhost:9090/user/api/signinup",//uri or end point of singninup api
            {
                method: 'POST', //rest method type to save the data
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userObject)
            })
            .then(userresp => userresp.json())//response from the server/ api - parsing to json
            .then(userresp => {
                console.log("response ", userresp); // this response will come with _id   
                dispatch(fetchUsers()); // it will keep the current context to update the user object and takes it to the reducer
                dispatch(signInUser(userresp))
            })
            .catch((err)=>{
                console.log("Error While Login", err)
            });
    }
}

export const fetchUsers = ()=>{
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/user/api/getUsers",{
            method: 'GET' //rest method type 
        })
        .then(userResp => userResp.json())
        .then((userResp)=>{
            console.log("userResp: ", userResp);
            console.log("user save response ", userResp);
            //dispatch(loading(false));
            dispatch(addUserToStore(userResp));
        })
        .catch((err)=>{
            console.log("Error While Fetching Users", err)
        })
    }  
}