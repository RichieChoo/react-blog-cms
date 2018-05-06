import actionTypes from '../actionTypes';
// import * as req from '../../../utils/request';
// import api from '../../../api-interface';
// import { getToken } from '../../../utils/auth';
// import msg from '../../../utils/msg';


function fetching() {
    return{
        type:actionTypes.FETCH_REQUEST
    };
}

function fetched(data) {
    return {
        type: actionTypes.FETCH_SUCCESS,
        data,
    };
}

function fetchFail(error) {
    return {
        type: actionTypes.FETCH_FAILURE,
        error,
    };
}
export default function fetchAction() {

    return (dispatch) => {
        dispatch(fetching());
        dispatch(fetched({status:"OK"}))
        // const token = getToken();
        // req.postRequestDetail(token,api.getContent)
        //     .then((responseJson) => {})
        //     .catch((err) => {dispatch(fetchFail(err));console.error(err);});
    }
}