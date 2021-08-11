import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { deletePost, editPost } from '../../actions/post_actions';
import LogoURL from '../../../app/assets/images/linkedin.png';
import Modal from '../modal/modal';

class NewGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      author_id: this.props.author_id,
    };
    this.logout = this.logout.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.createLike = this.createLike.bind(this);
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

  deletePost(id){
    this.props.deletePost(id);
  }

  editPost(id, post){
    this.props.editPost(id, post);
  }

  createLike(userId, postId){
    // console.log("i am inside createlike", userId)
    let like = {user_id: userId, post_id: postId}
    console.log("i am inside createlike", like)
    this.props.createLike(like)
  }

  render() {
    let posts = this.props.posts ? this.props.posts : [];

    if (posts.length !== 0 && Array.isArray(posts)){
      return (
        <div className="new_greeting">
          <div>{`Hi, ${this.props.currentUser}!`}</div>
          <Modal />
          <button onClick={() => this.props.openModal('post')}>Post</button>
          <button onClick={this.logout}>Logout</button>
          {
            posts.map ((post, index) => {
              return (
                <div key={post.id} className="feed-box">
                  {post.body}
                  <button onClick={() => this.createLike(this.state.author_id, post.id)}>Like</button>
                  {this.props.current_user_id === post.author_id ? 
                    <button onClick={() => this.props.openModal('edit', post.id)} className="feed-post-edit">Edit</button>
                    : <br />}
                  {this.props.current_user_id === post.author_id ? 
                    <button onClick={() => this.props.deletePost(post.id)} className="feed-post-delete">Delete</button>
                    : <br />}
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