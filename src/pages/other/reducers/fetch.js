import actionTypes from '../actionTypes';

export default (state, action) => {
    switch (action.type) {
        case actionTypes.FETCH_REQUEST:
            return state.merge({
                fetching:false,
            });
        case actionTypes.FETCH_SUCCESS: {
            return state.merge({
                fetchData:action.data,
                fetching:true,
            });
        }
        case actionTypes.FETCH_FAILURE:
            return state.merge({
                fetchData:{},
                fetching:false,
            });
        default:
            return state;
    }
};