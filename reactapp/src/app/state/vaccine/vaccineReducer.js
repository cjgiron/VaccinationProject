import * as ActionTypes from "../actionTypes";

let INITIAL_STATE = {
    vaccines: [],
    defaultVaccine : {
        name: "default name",
        price: 0,
        type: "default type",
        sideEffects: "default side effects",
        origin: "default origin",
        doses: 0,
        otherInfo: "default other info"
    }
}

export default function VaccineReducer(state=INITIAL_STATE, action)
{
    switch (action.type) {        

        case ActionTypes.ADD_VACCINES_TOSTORE:            
            return {...state, vaccines:action.payload.vaccines};

        // case ActionTypes.FETCH_PRODUCTS_FULFILLED:            
        //     return {...state, products:action.payload};

        default:
            return state;
    }
} 