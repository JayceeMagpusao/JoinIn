import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const receiveLikes = likes => ({
  type: RECEIVE_LIKES,
  likes,
});

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like,
});

export const removeLike = likeId => ({
  type: REMOVE_LIKE,
  likeId,
})

export const fetchLikes = () => dispatch => (
  APIUtil.fetchLikes().then(likes => (
    dispatch(receiveLikes(likes))
  ))
);

export const fetchLike = id => dispatch => (
  APIUtil.fetchLike(id).then(like => (
    dispatch(receiveLike(like))
  ))
);

// export const createLike = like => dispatch => (
//   APIUtil.createLike(like).then(createdLike => (
//     dispatch(receiveLike(createdLike))
//     ))
// );

export const createLike = like => dispatch => (
  APIUtil.createLike(like).then(createdLike => (
    dispatch(receiveLike(createdLike))
    ))
);

export const deleteLike = likeId => dispatch => (
  APIUtil.deleteLike(likeId)
    .then(() => dispatch(removeLike(likeId)))
);