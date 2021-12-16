import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { updateComment } from '../../actions/comments_actions';
import { faPortrait, faTimes } from '@fortawesome/free-solid-svg-icons';

class EditCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: props.comment.body,
      commentId: props.comment.id,
      post_id: props.post_id,
      post_author_id: props.post_author_id,
      user_id: props.user_id
    };
    console.log("i am in the commentForm", props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    let comment = Object.assign({}, {body: this.state.body}, {user_id: this.state.user_id},
      {post_id: this.state.post_id}, {post_author_id: this.state.post_author_id}, {id: this.state.commentId})

    this.props.updateComment(comment)
      .then(() => this.props.closeModal());
  };

  render() {
    return (
      <div className="create-comment-form-container">
        <div className="create-comment-form-label-container">
          <div className="create-comment-form-label">Add A Comment</div>
          <div className="x-button-icon">
            <div onClick={() => this.props.closeModal()}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
        </div>
        <div className="create-comment-form-user">
          <FontAwesomeIcon icon={faPortrait} />
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="create-comment-input">
            <input type="text"
            value={this.state.body}
            onChange={this.update('body')}
            className="create-comment-input" />
          </div>
          <div className="create-comment-button-container">
            <button className="create-comment-form-button">Save Changes</button>
          </div>
        </form>
      </div>
    )
  }
}

export default EditCommentForm;