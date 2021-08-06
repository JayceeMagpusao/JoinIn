import { connect } from 'react-redux';

import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    currentUser: state.entities.users[state.session.id].first_name,
    author_id: state.session.id,
  };
};

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);