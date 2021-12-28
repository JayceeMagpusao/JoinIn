import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: this.props.currentUser,
      last_name: this.props.currentUserLastName,
      email: this.props.currentUserEmail,
      company_name: this.props.currentUserCompanyName,
      industry_type: this.props.currentUserIndustryType,
      job_title: this.props.currentUserJobTitle,
      start_date: this.props.currentUserStartDate,
      end_date: this.props.currentUserEndDate
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();

    let user = Object.assign({}, {first_name: this.state.first_name}, {last_name: this.state.last_name},
      {email: this.state.email}, {company_name: this.state.company_name}, {industry_type: this.state.industry_type},
      {job_title: this.state.job_title}, {start_date: this.state.start_date}, {end_date: this.state.end_date},
      {id: this.props.currentUserId})

    this.props.updateUser(user)
      .then(() => this.props.closeModal());
  };

  render() {
    return (
      <div className="edit-user-form-container">
        <div className="edit-user-form-label-container">
          <div className="edit-user-form-label">Update User Info</div>
          <div className="x-button-icon">
            <div onClick={() => this.props.closeModal()}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="full-name-container">
            <div className="first-name-container">
              <div className="edit-user-label">First Name</div>
              <div className="edit-user-input">
                <input type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="edit-user-input" />
              </div>
            </div>
            <div className="last-name-container">
              <div className="edit-user-label">Last Name</div>
              <div className="edit-user-input">
                <input type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="edit-user-input" />
              </div>
            </div>
          </div>
          <div className="edit-user-label">Email</div>
          <div className="edit-user-input">
            <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="edit-user-input" />
          </div>
          <div className="edit-user-label">Company Name</div>
          <div className="edit-user-input">
            <input type="text"
            value={this.state.company_name}
            onChange={this.update('company_name')}
            className="edit-user-input" />
          </div>
          <div className="edit-user-label">Industry Type</div>
          <div className="edit-user-input">
            <input type="text"
            value={this.state.industry_type}
            onChange={this.update('industry_type')}
            className="edit-user-input" />
          </div>
          <div className="edit-user-label">Job Title</div>
          <div className="edit-user-input">
            <input type="text"
            value={this.state.job_title}
            onChange={this.update('job_title')}
            className="edit-user-input" />
          </div>
          <div className="edit-user-label">Start Date</div>
          <div className="edit-user-input">
            <input type="date"
            value={this.state.start_date}
            onChange={this.update('start_date')}
            className="edit-user-input" />
          </div>
          <div className="edit-user-label">End Date</div>
          <div className="edit-user-input">
            <input type="date"
            value={this.state.end_date}
            onChange={this.update('end_date')}
            className="edit-user-input" />
          </div>
          <div className="edit-user-button-container">
            <button className="edit-user-form-button"><FontAwesomeIcon icon={faSave} /></button>
          </div>
        </form>
      </div>
    )
  }
}

export default UserForm;