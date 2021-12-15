import React from 'react';
import LogoURL from '../../../app/assets/images/linkedin.png';
import { Link } from 'react-router-dom';

class LandingLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    let feed = "/feed"
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      // .then(() =>  this.props.history.push(feed));
      .then(() => window.location.reload(false))
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="sign-in-form-container">
        <div className="sign-in-joinin-logo-title">
          <label className="sign-in-joinin-logo">Join
            <img src={LogoURL} className="sign-in-joinin-logo-image" />
          </label>
        </div>
        <div className="sign-in-join-form">
          <form onSubmit={this.handleSubmit} className="sign-in-form-box">
            <label className="sign-in-title">
              Sign in
            </label>
            <br />
            <label className="sign-in-subtitle">
              Stay updated on your professional world
            </label>
            <br />
            {this.renderErrors()}
            <div className="sign-in-form">
              <label for="email" className="sign-in-email-label">Email
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="sign-in-email-input" />
              </label>
              <br />
              <label for="password" className="sign-in-password-label">Password
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="sign-in-password-input" />
              </label>
              <br />
              <input className="sign-in-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
        </div>
        <div className="new-to-joinin-box">
          <label className="new-to-joinin-text">New to JoinIn?</label>
          <Link to="/start-signup">Join now</Link>
        </div>
      </div>
    )
  }
}

export default LandingLoginForm;