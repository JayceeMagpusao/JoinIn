import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';
import NewGreeting from './new_greeting';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    currentUser: state.entities.users[state.session.id].first_name,
    author_id: state.session.id,
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    // post: (<button onClick={() => openModal('post')}>Post</button>),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewGreeting);