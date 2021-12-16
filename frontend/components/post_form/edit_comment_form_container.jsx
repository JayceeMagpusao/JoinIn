import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createComment, updateComment, deleteComment } from '../../actions/comments_actions';
import { fetchPost, fetchPosts } from '../../actions/post_actions';
import EditCommentForm from './edit_comment_form';

const mapStateToProps = (state) => {
  console.log("i am in the comment container", state.entities.comments)
  return {
    comment_id: state.entities.comments,
    errors: state.errors.session,
    currentUser: state.entities.users[state.session.id].first_name,
    user_id: state.session.id,
  };
};

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  closeModal: () => dispatch(closeModal()),
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  fetchPost: id => dispatch(fetchPost(id)),
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentForm);