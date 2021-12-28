import { RECEIVE_POSTS, RECEIVE_POST, CREATE_POST, REMOVE_POST } from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      const updatedPost = nextState.posts.map(post => post.id === action.post.id ? post.body = action.post.body : post )

      return Object.assign({}, state, updatedPost);
    case CREATE_POST:
      state.posts.unshift(action.post);
      return state;
    case REMOVE_POST:
      let newState = nextState.posts.filter(post => post.id !== action.postId)

      nextState.posts = newState
      return nextState;
    default:
      return state;
  }
};

export default postsReducer;