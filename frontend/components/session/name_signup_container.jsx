import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import NameSignForm from './name_signup';

const mapStateToProps = ( state ) => {
  // console.log('errrrrrrrrrrrrrrrrrors', errors)
  console.log('errrrrrrrrrrrr', state)
  return {
    errors: state.errors.session,
    email: state.session.email.email,
    password: state.session.email.password,
    // formType: 'signup',
    // navLink: <Link to="/landing">Log In</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NameSignForm);