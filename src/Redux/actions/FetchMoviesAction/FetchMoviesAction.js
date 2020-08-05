import { FETCH_MOVIES, LOADING_MOVIES } from '../../constants';
import { API_BASE_URL } from '../../../../config/constants';
import axios from 'axios';
export const FetchMoviesAction = {
    fetchMovies,
    deleteMovies

}
function fetchMovies(value) {
    return dispatch => {
        dispatch(lodingMovies(true));
        axios.get(`${API_BASE_URL}${value}`)
            .then((response) => { 
                dispatch(success(response.data.data)) ;
                dispatch(lodingMovies(false));
        });
    }

    function success(data) {
        const movieList = data.filter((item , index) => item.key = index);
        return { type: FETCH_MOVIES, payload: { movieList , isLoading : false } }
    }
    function lodingMovies(value) { return { type: LOADING_MOVIES, payload: { isLoading: value } } }
}


function deleteMovies(index , movieList){
    return dispatch => {
        dispatch(lodingMovies(true));
        dispatch(success(movieList.slice(1,index))) 
        dispatch(lodingMovies(false));
    }

    function success(data) {
        const movieList = data.filter((item , index) => item.key = index);
        return { type: FETCH_MOVIES, payload: { movieList , isLoading : false } }
    }
    function lodingMovies(value) { return { type: LOADING_MOVIES, payload: { isLoading: value } } }
}


