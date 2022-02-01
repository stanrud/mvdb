import { makeGetVideos } from './videos';

export default function* indexSaga() {
  yield (makeGetVideos);
}
