import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updatePost } from '../../actions/post_actions';
import EditPostForm from './edit_post_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    currentUser: state.entities.users[state.session.id].first_name,
    author_id: state.session.id,
  };
};

const mapDispatchToProps = dispatch => ({
  updatePost: post => dispatch(updatePost(post)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);