import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      company_name: '',
      industry_type: '',
      job_title: '',
      start_date: '',
      end_date: '',

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
          <label>Company Name:
            <input
              type="text"
              value={this.state.company_name}
              onChange={this.update('company_name')}
              className="login-input" />
          </label>
          <br/>
          <label>Industry Type:
            <input
              type="text"
              value={this.state.industry_type}
              onChange={this.update('industry_type')}
              className="login-input" />
          </label>
          <br/>
          <label>Job Title:
            <input
              type="text"
              value={this.state.job_title}
              onChange={this.update('job_title')}
              className="login-input" />
          </label>
          <br/>
          <label>Start Date:
            <input
              type="date"
              value={this.state.start_date}
              onChange={this.update('start_date')}
              className="login-input" />
          </label>
          <br/>
          <label>End Date:
            <input
              type="date"
              value={this.state.end_date}
              onChange={this.update('end_date')}
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