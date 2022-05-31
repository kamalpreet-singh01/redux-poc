import axios from "../../axios/axios";

export const fetchPost = () => {
    return async (dispatch,state)=>{
        const response = await axios.get('/posts');
        dispatch({type: 'FETCH_POST', payload: response.data})

    }
}