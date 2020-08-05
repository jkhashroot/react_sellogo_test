import { FETCH_MOVIES, LOADING_MOVIES  } from '../../constants';

import { Default } from './InitialState';

const FetchMovieReducer = (state = Default(), action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return Object.assign(
                {},
                state,
                action.payload
            );
            case LOADING_MOVIES:
                return Object.assign(
                    {},
                    state,
                    action.payload
            );
        default:
            return state;
    }
};
export default FetchMovieReducer;
