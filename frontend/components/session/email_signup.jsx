import React from 'react';

class EmailSignupForm extends React.Component {
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
    this.props.nameEmailForm(user);
    this.props.history.push("/final-signup")
    // console.log("testing stateteetetee", this.state)
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    return (
      <div className="login_form-container">
        <div className="joinin-logo-title">
          <label className="joinin-logo">Join
            <img src="../../images/linkedin-logo-copy.png" className="login-logo-image"/>
          </label>
        </div>
        <form className="login-form-box">
          <label className="login-subtitle">
            Make the most of your professional life
          </label>
          <br />
          {/* Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()} */}
          <div className="login-form">
            <label className="email-label">Email
              <br />
              <input
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input" />
            </label>
            <br />
            <label className="password-label">Password (6 or more characters)
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input" />
            </label>
            <br />
            {/* <label>First Name:
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
          </label> */}
            <br />
            <button className="session-submit" onClick={this.handleSubmit}>{`Agree & Join`}</button>
            <div className="already-signed-up-box">
              <label className="already-signed-up-text">Already on JoinIn?
                <Link to="/final-signup">Sign in</Link>
              </label>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default EmailSignupForm;