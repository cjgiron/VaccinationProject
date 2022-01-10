import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"; //is used to pipeline the dispatched objects and give us a feeling of sync execution by being async
import promise from "redux-promise-middleware";//is used to make calls to the server using promise
import vaccineReducer from "../state/vaccine/vaccineReducer";
import hospitalReducer from "../state/hospital/hospitalReducer";

let logger = () => (next) => (action) => {
    //currying in javasript where we pass function as input and recieve function as output
    console.log("Logged Action : Store File ", action); 

    next(action); //move to the actual execution
};

export default createStore(
    combineReducers({
        vaccineReducer,
        hospitalReducer
    }),
    {},//inital state if we want to set from store instead of reducer
    applyMiddleware(logger, thunk, promise)
)
