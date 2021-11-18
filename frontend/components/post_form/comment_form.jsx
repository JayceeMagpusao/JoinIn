import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { updateComment } from '../../actions/comments_actions';
import { faPortrait, faTimes } from '@fortawesome/free-solid-svg-icons';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_id: this.props.user_id,
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
    let comment = Object.assign({}, {body: this.state.body}, {user_id: this.state.user_id},
      {post_id: this.props.post.id}, {post_author_id: this.props.post.author_id})

    this.props.createComment(comment)
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
            placeholder="Add a comment..."
            className="create-comment-input" />
          </div>
          <div className="create-comment-button-container">
            <button className="create-comment-form-button">Post</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CommentForm;