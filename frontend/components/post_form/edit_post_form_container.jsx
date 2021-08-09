import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

class EditPostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: this.props.body,
      author_id: this.props.author_id,
      post: false
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

    console.log("really new post", post)
    this.props.createPost(post)
      // .then(() => {
      //   this.props.history.push("/feed")
      //   console.log("prooooopppppsss", this.props)
      // })
      .then(() => this.props.closeModal())
    // .then(this.setState({post: true}))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>body
          <input type="text"
            value={this.state.body}
            onChange={this.update('body')} />
        </label>
        <button>Create Post</button>
      </form>
    )
  }

}

export default EditPostForm;