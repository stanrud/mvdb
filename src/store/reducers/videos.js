import * as types from '../actionTypes/videos';

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
        videos: action.data.videos
          .filter(({ title, artist }) => title.toString().toLowerCase().includes(state.filters.search)
            || artist.toString().toLowerCase().includes(state.filters.search))
          .filter(f =>  (state.filters.genre_id.length > 0) ? state.filters.genre_id.some(g => g === f.genre_id) : true),
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
        filters: { ...state.filters, genre_id: (state.filters.genre_id.indexOf(action.genreId) > -1) ? state.filters.genre_id.filter(i => i !== action.genreId) : [...state.filters.genre_id, action.genreId]}
      }
    default:
      return { ...state };
  }
}
