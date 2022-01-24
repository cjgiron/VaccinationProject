import * as ActionTypes from "../actionTypes";

//product calls
//Product Action and Server Call
export const saveHospital = (hospital)=>{
    console.log("Hospital ", hospital);
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/hospital/api/saveHospital",{
            method: 'POST', //rest method type 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(hospital)
        })
        .then(hospitalResp => hospitalResp.json())
        .then((hospitalResp)=>{
            console.log("hospital save response ", hospitalResp);
            //dispatch(loading(false));
            dispatch(fetchHospitals());
        })
        .catch((err)=>{
            console.log("Error While Saving Hospital", err)
        })
    }
};

export const updateHospitalCharge = (hospitalId, charges)=>{
    console.log("hospitalId and charges: ", hospitalId, charges);
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/hospital/api/updateHospitalCharge", {
            method: 'POST', //rest method type 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({hospitalId, charges})
        })
        .then(hospitalResp => hospitalResp.json())
        .then((hospitalResp)=>{
            console.log("hospital update response ", hospitalResp);
            //dispatch(loading(false));
            dispatch(fetchHospitals());
        })
        .catch((err)=>{
            console.log("Error While Updating Hospital", err)
        })
    }
};




export const fetchHospitals = ()=>{
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/hospital/api/getHospitals",{
            method: 'GET' //rest method type 
        })
        .then(hospitalResp => hospitalResp.json())
        .then((hospitalResp)=>{
            console.log("hospital save response ", hospitalResp);
            //dispatch(loading(false));
            dispatch(addHospitalToStore(hospitalResp));
        })
        .catch((err)=>{
            console.log("Error While Fetching Hospitals", err)
        })
    }  
} 

export const addHospitalToStore = (hospitals)=>({
    type : ActionTypes.ADD_HOSPITALS_TOSTORE,
    payload : {hospitals}
}) 

export const addCharge = (hospitals, id) => ({
    type: ActionTypes.ADD_CHARGE,
    payload: {
        hospitals,
        id
    }
})