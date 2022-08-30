import {actionType} from '../actions/actionType';
import { INCREMENT, DECREMENT, RESET } from "../actions/actionType";

const initialState = {
    counter: 0
};
const SaveData =(state = initialState, action)=>{
    if(action.type === actionType){
        // return Object.assign({}, state,{formData: state.formData.concat(action.data)});
        return action.data;
    }
    if(action.type === INCREMENT){
        let counterData ={
           counter :state.counter + 1
        }
        return counterData;
    }
    if(action.type === DECREMENT){
        let counterData ={
            counter :state.counter - 1
         }
        return counterData
    }
    if(action.type === RESET){
      
        return Object.assign({},state,{
            counter: initialState.counter
        })
    }
    return state;
}

export default SaveData;