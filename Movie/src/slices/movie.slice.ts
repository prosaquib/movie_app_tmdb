import {createSlice} from '@reduxjs/toolkit';
import {fetchMovies} from '../service/movie';

export interface MovieState {
  loading: boolean;
  movies: Record<string, any>;
  error: boolean;
  success: boolean;
}

const initialState: MovieState = {
  loading: false,
  movies: {},
  error: false,
  success: false,
};

export const MovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
    isError: state => {
      state.error = true;
    },
  },
});

export const {isLoading, isError} = MovieSlice.actions;

export const fetchMoviesAction = searchTerm => async (dispatch: any) => {
  dispatch(isLoading(true));
  try {
    const response = await fetchMovies(searchTerm);
    dispatch(isLoading(false));
    return response;
  } catch (err: any) {
    const {response} = err;
    console.log('err', response.data);
    dispatch(isLoading(false));
    dispatch(isError);
    return Promise.reject(response.data);
  }
};

export default MovieSlice;
