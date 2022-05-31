import { combineReducers } from "redux";
const initialState = 0;

const updateCounter = (state=initialState,actions)=>{
    switch(actions.type){
        case 'INCREMENT':
            return state+actions.payload
        case 'DECREMENT':
            return state-1;
    }
    return state;
}

export default combineReducers({
    updateCounter
});