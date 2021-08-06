import * as APIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts,
});

export const receivePost = ({ post }) => ({
  type: RECEIVE_POST,
  post,
});

export const removePost = id => ({
  type: REMOVE_POST,
  id
})

export const fetchPosts = posts => dispatch => (
  APIUtil.fetchPost(posts).then(posts => (
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

export const updatePost = post => (
  APIUtil.updatePost(post).then(updatedPost => (
    dispatch(receivePost(updatedPost))
  ))
);

export const deletePost = id => (
  APIUtil.deletePost(deletePost).then(() => (
    dispatch(deletePost(id))
  ))
)