import React from 'react';
import LogoURL from '../../../app/assets/images/linkedin.png';
import { Link } from 'react-router-dom';

class EmailSignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: this.props.email,
      password: this.props.password,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.props.history.push("/feed");
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
      <div className="login_form-container">
        <div className="joinin-logo-title">
          <label className="joinin-logo">Join
            <img src={LogoURL} className="login-logo-image" />
          </label>
        </div>
        <form className="login-form-box">
          <label className="login-subtitle">
            Make the most of your professional life
          </label>
          {this.renderErrors()}
          <div className="login-form">
              <br />
            <label>First Name:
              <input
                type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="login-input"
                required />
            </label>
            <br/>
            <label>Last Name:
              <input
                type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="login-input"
                required />
            </label>
              <br />
              <button className="session-submit" onClick={this.handleSubmit}>Continue</button>
              <div className="email-password-link-container">
                <a href='#/start-signup' className='email-password-link'>Update Email and Password</a> 
              </div>
          </div>
        </form>
      </div>
    )
  }
}

export default EmailSignupForm;