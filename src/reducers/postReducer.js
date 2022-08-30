import {POSTS} from '../actions/actionType';

const initialState={
    remoteArticle: []
}

function postReducer(state = initialState, action){
    if(action.type === POSTS && action?.payload){
        return Object.assign({}, state,{
            remoteArticle: state.remoteArticle.concat(action.payload?.data)
        })
    }

    return state;
}

export default postReducer;