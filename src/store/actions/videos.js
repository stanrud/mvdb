import * as types from '../actionTypes/videos';

export const getVideos = filters => {
  return({
    type: types.GET_VIDEOS,
    filters
  })
}

export const getVideosSuccess = data => {
  return({
    type: types.GET_VIDEOS_SUCCESS,
    data
  })
}

export const getVideosFailed = error => {
  return({
    type: types.GET_VIDEOS_FAILED,
    error
  })
}

export const showFilters = () => {
  return({
    type: types.SHOW_FILTERS,
  })
}

export const hideFilters = () => {
  return({
    type: types.HIDE_FILTERS,
  })
}

export const setGenre = genreId => {
  return({
    type: types.SET_GENRE,
    genreId
  })
}

export const removeGenre = () => {
  return({
    type: types.REMOVE_GENRE,
  })
}
