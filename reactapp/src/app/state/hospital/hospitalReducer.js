import * as ActionTypes from "../actionTypes";

const INITIAL_STATE = {
    hospitals: [],
    defaultHospital: {
        name: "default hospital name",
        address: "somewhere in US",
        type: "Government",
        charges: 0
    }
}

export default function HospitalReducer(state = INITIAL_STATE, action) {

    switch(action.type) {
        case ActionTypes.ADD_HOSPITALS_TOSTORE:
            return {...state, hospitals:action.payload.hospitals}

        case ActionTypes.ADD_CHARGE:
            let newHospitals = state.hospitals.map((hospital) =>{
                if(hospital._id == action.payload.id) {
                    return {...hospital, charges: hospital.charges + 1}
                }
                return hospital;
            })
            return {...state, hospitals: newHospitals};

        default: 
            return state;
    }
}