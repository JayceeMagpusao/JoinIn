import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments,
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment,
});

export const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId,
});

export const fetchComments = () => dispatch => (
  CommentAPIUtil.fetchComments().then(comments => (
    dispatch(receiveComments(comments))
  ))
);

export const fetchComment = id => dispatch => (
  CommentAPIUtil.fetchComment(id).then(comment => (
    dispatch(receiveComment(comment))
  ))
);

export const createComment = comment => dispatch => (
  CommentAPIUtil.createComment(comment).then(createdComment => (
    dispatch(receiveComment(createdComment))
  ))
);

export const deleteComment = commentId => dispatch => (
  CommentAPIUtil.deleteComment(deleteId).then(() => (
    dispatch(removeComment(commentId))
  ))
);