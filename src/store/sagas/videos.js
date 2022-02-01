import { call, put, takeLatest } from 'redux-saga/effects';
import client from './client';
import { getVideosSuccess, getVideosFailed } from '../actions/videos';
import { GET_VIDEOS } from '../actionTypes/videos';

async function getVideosCall() {
  return await client.get('/dataset.json');
}

function* getVideos(action) {
  try {
    const videos = yield call(getVideosCall);
    yield put(getVideosSuccess(videos.data));
  } catch (e) {
    yield put(getVideosFailed(e));
  }
}
 	
export const makeGetVideos = takeLatest(GET_VIDEOS, getVideos);
