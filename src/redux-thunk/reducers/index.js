import { combineReducers } from "redux";

const initialState = []

 const fetchPostsReducer =  (state = initialState,actions) => {
    switch(actions.type){
        case 'FETCH_POST':
                return actions.payload
}
return state;
}
export default combineReducers({
    posts: fetchPostsReducer
})