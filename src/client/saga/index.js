import { takeLatest, delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { POSTS_FETCHING_START, postsFetchingSucceed, postsFetchingFailed } from '../actions/actionCreators';

const API_BASE = 'http://localhost:3000';

function *fetchPosts(action) {
  console.log('hello starting fetchPosts saga');
  try {
    const posts = yield fetch(`${API_BASE}/api/posts`).then(resp => resp.json());
    yield put(postsFetchingSucceed(posts));
  } catch (e){
    yield put(postsFetchingFailed())
  }
  console.log('ending fetchPosts saga');
}

export default function *rootSaga() {
  yield [
    takeLatest(POSTS_FETCHING_START, fetchPosts)
  ]
}