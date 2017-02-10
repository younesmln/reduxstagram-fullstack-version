import {
  POSTS_FETCHING_START, POSTS_FETCHING_FAILED, POSTS_FETCHING_SUCCEED
} from '../actions/actionCreators';

const initialState =  {loading: false, error: false, posts: []};

export default function posts(state = initialState, action) {
  switch (action.type){
    case POSTS_FETCHING_START:
      return Object.assign({}, state, {loading: true, error: false});
    case POSTS_FETCHING_FAILED:
      return Object.assign({}, state, {error: true, loading: false});
    case POSTS_FETCHING_SUCCEED:
      return Object.assign({}, state, { posts: action.payload, loading: false, error: false});
    break;
    default:
      return state;
  }
  /*if (action.type !== 'INCREMENT_LIKES') {
    return state
  }

  const i = action.index;

  return [
    ...state.slice(0, i),
    { ...state[i], likes: state[i].likes + 1 },
    ...state.slice(i + 1)
  ]*/
}
