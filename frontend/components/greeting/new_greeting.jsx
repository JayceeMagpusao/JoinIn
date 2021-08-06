import React from 'react';
import LogoURL from '../../../app/assets/images/linkedin.png';
import { Link } from 'react-router-dom';

class NewGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      author_id: this.props.author_id,
    };
    console.log("proooppppsss", this.props.currentUser)
    console.log("statetteetete", this.state)
    console.log("statetteetete", this.props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logout = this.logout.bind(this);
    this.createPost = this.createPost.bind(this);
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

  logout(){
    this.props.logout();
  }

  createPost(){
    this.props.history.push("/posts/new")
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
      <div className="new_greeting">
        <div>{`Hi, ${this.props.currentUser}!`}</div>
        <button onClick={this.createPost}>Post</button>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}

export default NewGreeting;