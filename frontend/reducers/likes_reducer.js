import { RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/likes_actions';

const LikesReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)
  
  switch (action.type) {
    case RECEIVE_LIKES:
      return action.likes;
    case RECEIVE_LIKE:
      const newLike = { [action.like.id]: action.like };

      return Object.assign({}, state, newLike);
    case REMOVE_LIKE:
      delete nextState[action.likeId];
      return nextState;
    default:
      return state;
  }
};

export default LikesReducer;