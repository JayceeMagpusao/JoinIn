import { connect } from 'react-redux';

import { createPost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);