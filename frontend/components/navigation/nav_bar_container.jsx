import { connect } from 'react-redux';
import React from 'react';
import NavBar from './nav_bar';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id].first_name,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);