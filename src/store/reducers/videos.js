import * as types from '../actionTypes/videos';
import {
  filterBySearchAndGenres,
  setUniqueGenre
} from '../../helpers/filters';

const filters = {
  search: '',
  genre_id: []
};

const initialState = {
  isGetting: false,
  isFiltersShowing: false,
  videos: [],
  genres: [],
  filters
};

export default function useReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_VIDEOS:
      return {
        ...state,
        filters: action.filters,
        isGetting: true
      }
    case types.GET_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: filterBySearchAndGenres(action.data.videos, state.filters),
        genres: action.data.genres,
        isGetting: false
      }
    case types.GET_GIFTS_FAILED:
      return {
        ...state,
        error: action.error,
        isGetting: false
      }
    case types.SHOW_FILTERS:
      return {
        ...state,
        isFiltersShowing: true
      }
    case types.HIDE_FILTERS:
      return {
        ...state,
        isFiltersShowing: false
      }
    case types.SET_GENRE:
      return {
        ...state,
        filters: {
          ...state.filters,
          genre_id: setUniqueGenre(state.filters.genre_id, action.genreId)
        }
      }
    case types.REMOVE_GENRE:
      return {
        ...state,
        filters: { ...state.filters, genre_id: [] }
      }
    default:
      return { ...state };
  }
}
