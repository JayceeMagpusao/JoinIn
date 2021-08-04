import React from 'react';
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
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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
        <div >
          <Link to="/landing">Sign in</Link>
          <Link to="/start-signup">Join now</Link>
        </div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to JoinIn!
          <br />
          {this.renderErrors()}
          <div className="login-form">
            <label>Email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input" />
            </label>
            <br />
            <label>Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input" />
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    )
  }
}

export default LandingLoginForm;