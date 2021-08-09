import React from 'react';
import LogoURL from '../../../app/assets/images/linkedin.png';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import Modal from '../modal/modal';
import { deletePost, editPost } from '../../actions/post_actions';

class NewGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      author_id: this.props.author_id,
    };
    this.logout = this.logout.bind(this);
    this.createPost = this.createPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }
  
  componentDidMount() {this.props.fetchPosts()}

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  logout(){
    this.props.logout();
  }

  createPost(){
    this.props.history.push("/feed")
  }

  deletePost(id){
    this.props.deletePost(id);
  }

  editPost(id, post){
    this.props.editPost(id, post);
  }

  render() {
    let posts = this.props.posts ? this.props.posts : [];

    if (posts.length !== 0 && Array.isArray(posts)){
      return (
        <div className="new_greeting">
          <div>{`Hi, ${this.props.currentUser}!`}</div>
          <Modal />
          <button onClick={() => this.props.openModal('post')}>Post</button>
          {/* {this.props.post} */}
          <button onClick={this.logout}>Logout</button>
          {
            posts.map ((post, index) => {
              return (
                <div key={post.id} className="feed-box">
                  {post.body}
                  {this.props.current_user_id === post.author_id ? 
                    <button onClick={() => this.props.openModal('edit')} className="feed-post-edit">Edit</button>
                    : <br />}
                  {this.props.current_user_id === post.author_id ? 
                    <button onClick={() => this.props.deletePost(post.id)} className="feed-post-delete">Delete</button>
                    : <br />}
                  {/* <Modal /> */}
                </div>
              )
            })
          }
        </div>
      )
    } else {
      return (
        <div className="new_greeting">
        <div>{`Hi, ${this.props.currentUser}!`}</div>
        <Modal />
        <button onClick={() => this.props.openModal('post')}>Post</button>
        {/* {this.props.post} */}
        <button onClick={this.logout}>Logout</button>
      </div>
      )
    }
  }
}

export default NewGreeting;