import * as APIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts,
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post,
});

export const removePost = postId => ({
  type: REMOVE_POST,
  postId,
});

export const receiveComment = ({ comment }) => ({
  type: RECEIVE_COMMENT,
  review
});

export const fetchPosts = () => dispatch => (
  APIUtil.fetchPosts().then(posts => (
    dispatch(receivePosts(posts))
  ))
);

export const fetchPost = id => dispatch => (
  APIUtil.fetchPost(id).then(post => (
    dispatch(receivePost(post))
  ))
);

export const createPost = post => dispatch => (
  APIUtil.createPost(post).then(createdPost => (
    dispatch(receivePost(createdPost))
  ))
);

export const updatePost = post => dispatch => (
  APIUtil.updatePost(post)
    .then(updatedPost => dispatch(receivePost(updatedPost)
  ))
);

export const deletePost = postId => dispatch => (
  APIUtil.deletePost(postId)
    .then(() => dispatch(removePost(postId)))
);

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment).then(createdComment => (
    dispatch(receiveComment(createdComment))
  ))
);