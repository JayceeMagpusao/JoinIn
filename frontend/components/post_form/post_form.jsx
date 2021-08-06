import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      author_id: this.props.author_id,
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
    let post = Object.assign({}, this.state)
    console.log(post)
    this.props.createPost(post)
      .then(() => {
        this.props.history.push("/")
      })
    // console.log("prooooopppppsss", this.props)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>body
          <input type="text"
            value={this.state.body}
            onChange={this.update('body')} />
        </label>
        <button>Create Event</button>
      </form>
    )
  }

}

export default PostForm;