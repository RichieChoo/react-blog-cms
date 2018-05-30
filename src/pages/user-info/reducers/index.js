import { fromJS } from 'immutable';
import reduceReducers from 'reduce-reducers';

import fetchAction from './fetch';

const initialState = fromJS({
    fetchData:{},
    fetching:false,
});

const reducer = reduceReducers(
    (state = initialState, action) => fetchAction(state, action),
);

export default reducer;