import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import HomeGreetingForm from './home_greeting';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign in',
    navLink: <Link to="/start-signup">Sign Up</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeGreetingForm);