import * as api from "../api";

//Action creators
//functions that return an action
//actions are just an object that returns a type and a payload
export const getPosts = () => async(dispatch) => {
    try{
        const {data} = await api.fetchPosts();
        dispatch({type: "FETCH_ALL", payload: data});
    }catch(err){
        console.log(err.message);
    }

}