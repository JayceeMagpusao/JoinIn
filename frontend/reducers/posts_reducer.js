import { RECEIVE_POSTS, RECEIVE_POST, CREATE_POST, REMOVE_POST } from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      
      const updatedPost = nextState.posts.map(post => post.id === action.post.id ? post.body = action.post.body : post )
      
      // const updatedPost = { [action.post.id]: action.post };
      // const updatedPost = action.post;
      return Object.assign({}, state, updatedPost);
    case CREATE_POST:
      state.posts.unshift(action.post);
      return state;
    case REMOVE_POST:
      // debugger
      // delete nextState[action.postId];
      // console.log("i am in the remove post reducer", nextState, action.postId)
      // let newState = nextState.posts.filter(post => post.id !== action.postId)
      let newState = nextState.posts.filter(post => post.id !== action.postId)
      nextState.posts = newState
      // console.log("i am in the remove post", nextState)
      return nextState;
      // return nextState.posts.filter(post => post.id !== action.postId);
      // return newState;
    default:
      return state;
  }
};

export default postsReducer;