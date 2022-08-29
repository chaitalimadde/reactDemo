import {actionType} from '../actions/actionType';

const initialState = {
    formData:[]
};
const SaveData =(state = initialState, action)=>{
    if(action.type === actionType){
        // return Object.assign({}, state,{formData: state.formData.concat(action.data)});
        return action.data;
    }
    else{
        return state;
    }
}

export default SaveData;