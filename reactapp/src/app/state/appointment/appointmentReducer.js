import * as ActionTypes from "../actionTypes";

const INITIAL_STATE = {
    appointments: [],
    defaultAppointment : {
        user : null,
        hospital: null,
        vaccine: null,
        date: "default date"
    }
}

export default function AppointmentReducer(state = INITIAL_STATE, action) {

    switch(action.type) {
        case ActionTypes.ADD_APPOINTMENTS_TOSTORE:
            return {...state, appointments: action.payload.appointments}

        default:
            return state;
    }
}