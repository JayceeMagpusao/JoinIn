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
        <div className="new-greeting">
          <div className="new-greeting-container">
            <div className="new-greeting-box">
              <label className="new-greeting-user-label">{`Hi, ${this.props.currentUser}!`}</label>
              <button onClick={this.logout} className="joinin-logout-button">Logout</button>
            </div>
          </div>
          <Modal />
          <div className="post-form-container">
            <div className="joinin-post-container">
              <button onClick={() => this.props.openModal('post')} className="joinin-post-button">Start a post</button>
            </div>
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
          <div className="extra-resources">
            <div className="joinin-news-container">
              <label className="joinin-news-container-label">JoinIn News</label>
              <ul>
                <div className="news-link-container">
                  <a href="https://www.linkedin.com/news/story/anti-wfh-bias-is-alive-and-well-5514786/"
                    className="joinin-link-title" target="_blank" rel="noopener noreferrer">Anti-WFH bias is alive and well</a>
                </div>
                <div className="news-link-container">
                  <a href="https://www.linkedin.com/news/story/more-employers-offering-hybrid-work-5519602/"
                    className="joinin-link-title" target="_blank" rel="noopener noreferrer">More employers offering hybrid work</a>
                </div>
                <div className="news-link-container">
                  <a href="https://www.linkedin.com/news/story/millennials-play-financial-catch-up-5116532/"
                    className="joinin-link-title" target="_blank" rel="noopener noreferrer">Millennials play financial catch-up</a>
                </div>
                <div className="news-link-container">
                  <a href="https://www.linkedin.com/news/story/should-remote-work-mean-a-pay-cut-5111572/"
                    className="joinin-link-title" target="_blank" rel="noopener noreferrer">Should remote work mean a pay cut?</a>
                </div>
                <div className="news-link-container">
                  <a href="https://www.linkedin.com/news/story/behind-the-glamour-unlivable-pay-4489521/"
                    className="joinin-link-title" target="_blank" rel="noopener noreferrer">Behind the glamour, 'unlivable' pay</a>
                </div>
                <div className="news-link-container">
                  <a href="https://www.linkedin.com/news/story/managers-wonder-is-fall-canceled-5507746/"
                    className="joinin-link-title" target="_blank" rel="noopener noreferrer">Managers wonder: Is fall canceled?</a>
                </div>
                <div className="news-link-container">
                  <a href="https://www.linkedin.com/news/story/mandates-gain-steam-in-virus-fight-4489513/"
                    className="joinin-link-title" target="_blank" rel="noopener noreferrer">Mandates gain stream in virus fight</a>
                </div>
                <div className="news-link-container">
                  <a href="https://www.linkedin.com/news/story/so-you-quit-your-job-what-next-5112228/"
                    className="joinin-link-title" target="_blank" rel="noopener noreferrer">So you quit your job... what next?</a>
                </div>
                <div className="news-link-container">
                  <a href="https://www.linkedin.com/news/story/prices-just-keep-climbing-5115052/"
                    className="joinin-link-title" target="_blank" rel="noopener noreferrer">Prices just keep climbing</a>
                </div>
                <div className="news-link-container">
                  <a href="https://www.linkedin.com/news/story/banned-from-work-to-avoid-burnout-5112268/"
                    className="joinin-link-title" target="_blank" rel="noopener noreferrer">'Banned' from work to avoid burnout</a>
                </div>
              </ul>
            </div>
            <div className="todays-top-courses-container">
              <label className="todays-top-courses-label">Today's top courses</label>
              <ol>
                <li className="learning-list-numbered">
                  <a href="https://www.linkedin.com/learning/what-is-graphic-design/what-is-graphic-design"
                    className="joinin-learning-title" target="_blank" rel="noopener noreferrer">What is Graphic Design?
                    <p className="joinin-learning-author">Sean Adams</p>
                  </a>
                </li>
                <li className="learning-list-numbered">
                  <a href="https://www.linkedin.com/learning/how-to-be-both-assertive-and-likable/introducing-hamilton-chan-esq-8632073"
                    className="joinin-learning-title" target="_blank" rel="noopener noreferrer">How to be both Assertive and Likeable
                    <p className="joinin-learning-author">America Negotiation Institute and Kwame Christian</p>
                  </a>
                </li>
                <li className="learning-list-numbered">
                  <a href="https://www.linkedin.com/learning/diversity-inclusion-and-belonging-2019/dibs-an-introduction"
                    className="joinin-learning-title" target="_blank" rel="noopener noreferrer">How to be both Assertive and Likeable
                    <p className="joinin-learning-author">Pat Wadors</p>
                  </a>
                </li>
              </ol>
            </div>
          </div>
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