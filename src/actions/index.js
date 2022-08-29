import {actionType} from './actionType';

const saveEmpData = (data) =>{

    return {
        type: actionType,
        data
    }
}

export default saveEmpData;