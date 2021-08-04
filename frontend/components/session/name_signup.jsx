import React from 'react';

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
    this.props.history.push("/");
    // console.log("testing stateteetetee", this.state)
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
        <form className="login-form-box">
          Welcome to JoinIn!
          <br />
          {/* Please {this.props.formType} or {this.props.navLink} */}
          {this.renderErrors()}
          <div className="login-form">
            {/* <label>Email:
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
            </label> */}
            <br />
          <label>First Name:
            <input
              type="text"
              value={this.state.first_name}
              onChange={this.update('first_name')}
              className="login-input" />
          </label>
          <br/>
          <label>Last Name:
            <input
              type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
              className="login-input" />
          </label>
            <br />
            <button className="session-submit" onClick={this.handleSubmit}>Continue</button>
          </div>
        </form>
      </div>
    )
  }
}

export default EmailSignupForm;