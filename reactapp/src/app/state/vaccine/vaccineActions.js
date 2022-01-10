import * as ActionTypes from "../actionTypes";

//product calls
//Product Action and Server Call
export const saveVaccine = (vaccine)=>{
    console.log("Vaccine ", vaccine);
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/vaccine/api/saveVaccine",{
            method: 'POST', //rest method type 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vaccine)
        })
        .then(vaccineResp => vaccineResp.json())
        .then((vaccineResp)=>{
            console.log("vaccine save response ", vaccineResp);
            //dispatch(loading(false));
            dispatch(fetchVaccines());
        })
        .catch((err)=>{
            console.log("Error While Saving Vaccine", err)
        })
    }
};

export const fetchVaccines = ()=>{
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/vaccine/api/getVaccines",{
            method: 'GET' //rest method type 
        })
        .then(vaccineResp => vaccineResp.json())
        .then((vaccineResp)=>{
            console.log("vaccine save response ", vaccineResp);
            //dispatch(loading(false));
            dispatch(addVaccineToStore(vaccineResp));
        })
        .catch((err)=>{
            console.log("Error While Fetching Vaccines", err)
        })
    }  
} 


export const addVaccineToStore = (vaccines)=>({
    type : ActionTypes.ADD_VACCINES_TOSTORE,
    payload : {vaccines}
}) 