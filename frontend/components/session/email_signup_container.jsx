import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signupEmailPassword } from '../../actions/session_actions';
import EmailSignupForm from './email_signup';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    nameEmailForm: (user) => dispatch(signupEmailPassword(user)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailSignupForm);