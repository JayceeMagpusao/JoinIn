import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
// import LoginFormContainer from '../session_form/login_form_container';
import EditFormContainer from '../post_form/edit_post_form';
import PostFormContainer from '../post_form/post_form_container';
import { withRouter } from 'react-router-dom';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'post':
      component = <PostFormContainer />;
      break;
    case 'edit':
      component = <EditFormContainer />;
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

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);