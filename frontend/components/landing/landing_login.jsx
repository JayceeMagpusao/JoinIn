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
    this.demoSubmit = this.demoSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);

    this.props.processForm(user)
      .then(() => window.location.reload(false));
  }

  demoSubmit(e) {
    e.preventDefault;
    const demoUser = {email: 'demo_user@hireme.com', password: '123456'}

    this.props.processForm(demoUser)
      .then(() => window.location.reload(false))
  }

  renderErrors() {
    return (
      <ul>
        <div className="sign-in-errors-container">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`} className="sign-in-errors-list">
              {error}
            </li>
          ))}
        </div>
      </ul>
    );
  }

  componentWillUnmount(){
    if (this.props.errors.length !== 0) {
      window.location.reload(false)
    }
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
            {/* {this.props.errors === 0 ? null : this.renderErrors()} */}
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
              <br />
              <button className="sign-in-demo-submit" onClick={this.demoSubmit} >{this.props.demoLogin}
              </button>
            </div>
          </form>
        </div>
        <div className="new-to-joinin-box">
          <label className="new-to-joinin-text">New to JoinIn?</label>
          <Link to="/start-signup" >Join now</Link>
        </div>
      </div>
    )
  }
}

export default LandingLoginForm;