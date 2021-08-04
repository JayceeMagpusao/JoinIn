import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
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
    return(
      <div className="login_form-container">
        <form onSubmit={this.handleSubmit} className ="login-form-box">
          Welcome to JoinIn!
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
          <label>Email:
            <input 
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input" />
          </label>
          <br/>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input" />
          </label>
          <br/>
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
          <br/>
          <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    )
  }
}

export default SessionForm;