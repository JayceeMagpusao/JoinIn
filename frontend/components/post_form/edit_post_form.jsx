import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faPortrait, faThumbsUp, faPencilAlt, faTrashAlt, faEllipsisH, faLongArrowAltRight, faTimes } from '@fortawesome/free-solid-svg-icons'

class EditPostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: props.post.body,
      author_id: props.author_id,
      post_id: props.post.id
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    let post = Object.assign({}, { body: this.state.body }, 
      { author_id: this.state.author_id }, { id: this.state.post_id })
    this.props.updatePost(post)
      .then(() => this.props.closeModal())
  }

  render() {
    return (
      <div className="create-post-form-container">
        <div className="create-post-form-label-container">
          <div className="create-post-form-label">Edit post</div>
          <div className="x-button-icon">
            <div onClick={() => this.props.closeModal()}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
        </div>
        <div className="create-post-form-user">
          <FontAwesomeIcon icon={faPortrait} />
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="create-post-input">
            <input type="text"
              value={this.state.body}
              onChange={this.update('body')}
              className="create-post-input" />
          </div>
          <div className="create-post-button-container">
            <button className="create-post-form-button">Save</button>
          </div>
        </form>
      </div>
    )
  }
}

export default EditPostForm;