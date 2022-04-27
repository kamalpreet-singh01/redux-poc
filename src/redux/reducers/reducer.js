import { combineReducers } from "redux";

const initialState = [{
    id: 1,
    description: 'CSS is not right',
    currentStatus: 'Open'
},{
    id: 2,
    description: 'Button is not working',
    currentStatus: 'Open'
},{
    id: 3,
    description: 'Heading is not correct',
    currentStatus: 'Closed'
}]


 const bugReducer =  (state = initialState,actions) => {
    switch(actions.type){
        case 'BUG_ADDED':
                return [
                    ...state,
                    actions.payload.bug
                ]
        
        case 'BUG_REMOVED':
                return state.filter(bug => bug.id != actions.payload.id);
}
return state;
}

export default combineReducers({
    bugReducer: bugReducer
})