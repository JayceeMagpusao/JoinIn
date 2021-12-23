import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/users_actions';
import UserForm from './user_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    currentUser: state.entities.users[state.session.id].first_name,
    currentUserId: state.entities.users[state.session.id].id,
    currentUserLastName: state.entities.users[state.session.id].last_name,
    currentUserEmail: state.entities.users[state.session.id].email,
    currentUserCompanyName: state.entities.users[state.session.id].company_name,
    currentUserIndustryType: state.entities.users[state.session.id].industry_type,
    currentUserJobTitle: state.entities.users[state.session.id].job_title,
    currentUserStartDate: state.entities.users[state.session.id].start_date,
    currentUserEndDate: state.entities.users[state.session.id].end_date,
  };
};

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);