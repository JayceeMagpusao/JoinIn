import { RECEIVE_POSTS, RECEIVE_POST } from '../actions/post_actions';

const benchesReducer = (oldState = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      const newPost = { [action.post.id]: action.post };
      return Object.assign({}, oldState, newPost);
    default:
      return oldState;
  }
};

export default postsReducer;