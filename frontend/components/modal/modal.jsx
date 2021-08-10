import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreatePostFormContainer from '../post_form/create_post_form_container';
import EditPostFormContainer from '../post_form/edit_post_form_container';
import { withRouter } from 'react-router-dom';

function Modal({ modal, closeModal, allPosts }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case 'post':
      component = <CreatePostFormContainer />;
      break;
    case 'edit':
      let post = allPosts[modal.id]
      component = <EditPostFormContainer post={post} />;
      break;
    // case 'login':
    //   component = <LoginFormContainer />;
    //   break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  modal: state.ui.modal,
  allPosts: state.entities.posts
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);