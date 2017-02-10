
export const POSTS_FETCHING_START = 'POSTS_FETCHING_START';
export function postsFetchingStart() {
  return {type: POSTS_FETCHING_START}
}
export const POSTS_FETCHING_SUCCEED =  'POSTS_FETCHING_SUCCEED';
export function postsFetchingSucceed(posts) {
  return {
    type: POSTS_FETCHING_SUCCEED,
    payload: posts
  }
}
export const POSTS_FETCHING_FAILED =  'POSTS_FETCHING_FAILED';
export function postsFetchingFailed() {
  return {
    type: POSTS_FETCHING_FAILED
  }
}

export function incrementLikes(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index
  }
}
