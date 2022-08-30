import store from '../store';
import {actionType} from './actionType';
import  {INCREMENT} from "./actionType"
import  {DECREMENT} from "./actionType";
import  {RESET} from "./actionType";
import  {POSTS} from "./actionType";

export const saveEmpData = (data) =>{

    return {
        type: actionType,
        data
    }
}

export const Increment = () =>{

    return {
        type: INCREMENT
    }
}

export const Decrement = () =>{

    return {
        type: DECREMENT
    }
}

// export const Posts = () =>{

//     return {
//         type: POSTS
//     }
// }

export function getData(){
    store.dispatch({type:POSTS});
    return function(dispatch){
        return fetch("https://reqres.in/api/users?page=2")
        .then((response) => response.json())
        .then((json) =>{
            dispatch({type:POSTS, payload:json});
        });
    };
}

export const Reset = () =>{

    return {
        type: RESET
    }
}

// export default saveEmpData;