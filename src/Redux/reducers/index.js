import {combineReducers} from 'redux';

import FetchMoviesReducer from './FetchMoviesReducer';

export default combineReducers({
    fetchMoviesReducer: FetchMoviesReducer
});
