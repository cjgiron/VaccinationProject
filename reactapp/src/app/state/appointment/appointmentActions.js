import * as ActionTypes from "../actionTypes";

//product calls
//Product Action and Server Call
export const saveAppointment = (appointment)=>{
    console.log("Appointment ", appointment);
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/appointment/api/saveAppointment",{
            method: 'POST', //rest method type 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
        .then(appResp => appResp.json())
        .then((appResp)=>{
            console.log("appointment save response ", appResp);
            //dispatch(loading(false));
            dispatch(fetchAppointments());
        })
        .catch((err)=>{
            console.log("Error While Saving Appointment", err)
        })
    }
};

export const fetchAppointments = ()=>{
    return function (dispatch) {
        //dispatch(loading(true));

        window.fetch("http://localhost:9090/appointment/api/getAppointments",{
            method: 'GET' //rest method type 
        })
        .then(appResp => appResp.json())
        .then((appResp)=>{
            console.log("appointment save response ", appResp);
            //dispatch(loading(false));
            dispatch(addAppointmentToStore(appResp));
        })
        .catch((err)=>{
            console.log("Error While Fetching Appointments", err)
        })
    }  
} 

export const addAppointmentToStore = (appointments)=>({
    type : ActionTypes.ADD_APPOINTMENTS_TOSTORE,
    payload : {appointments}
}) 