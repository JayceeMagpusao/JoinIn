import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

class EditPostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: props.post.body,
      author_id: props.author_id,
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
    let post = Object.assign({}, { body: this.state.body }, { author_id: this.state.author_id })
    console.log("i am inside handlesubmit", this.props)
    this.props.updatePost(post)
      .then(() => this.props.closeModal())
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>body
          <input type="text"
            value={this.state.body}
            onChange={this.update('body')} />
        </label>
        <button>Save</button>
      </form>
    )
  }
}

export default EditPostForm;