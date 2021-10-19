import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { deletePost, editPost } from '../../actions/post_actions';
import LogoURL from '../../../app/assets/images/linkedin.png';
import Modal from '../modal/modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faPortrait, faThumbsUp, faPencilAlt, faTrashAlt, faEllipsisH, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { fetchComments } from '../../util/comment_api_util';

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
  
  componentDidMount() {this.props.fetchPosts(), this.props.fetchComments(), this.props.fetchLikes()}

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
    let like = {user_id: userId, post_id: postId}
    // console.log("i am inside createlike", like)
    this.props.createLike(like)
  }

  deleteLike(userId, postId){
    let like = {user_id: userId, post_id: postId}
    // console.log("i am inside deletelike", like)
    this.props.deleteLike(like)
  }

  render() {
    let posts = this.props.posts ? this.props.posts : [];
    let comments = this.props.comments ? this.props.comments : [];
    let commentsArray = Object.values(comments);
    let likeCounter = this.props.likeCounter ? this.props.likeCounter : [];
    let commentCounter = this.props.commentCounter ? this.props.commentCounter : [];
    let likeCount = "likeCount";
    let commentCount = "commentCount";
    let commentPostId = "post_id";
    let commentBody = "commentBody";
    let commentId = "commentId";
    let commentPostAuthorId = "commentPostAuthorId";
    console.log("i am in the render comments", commentsArray)

    
    console.log("i am in the props", posts)
    if (posts.length !== 0 && likeCounter.length !==0 && commentCounter.length !== 0 
      && Array.isArray(posts) && Array.isArray(likeCounter) && Array.isArray(commentCounter) ){
      
      // let postsWithLikes = []
      
      for (let i = 0; i < likeCounter.length; i++) {
        let like = likeCounter[i];
        
        for (let j = 0; j < posts.length; j++) {
          let post = posts[j]

          if (post[likeCount] === undefined ) {
            // console.log("i am post[times]", post[times])
            post[likeCount] = 0
          } 
          if (post.id === like.post_id) {
            // console.log("i am in the render for loop", like.weird)
            // console.log("i am in the render for loop", post)
            post[likeCount] = like.counter
          }
        }
        // console.log("after for loops", posts)
      }
    
      for (let k = 0; k < commentCounter.length; k++) {
        let comment = commentCounter[k];
        
        for (let l = 0; l < posts.length; l++) {
          let post = posts[l];
          
          if (post[commentCount] === undefined) {
            post[commentCount] = 0
          }
          if (post.id === comment.post_id) {
            post[commentCount] = comment.counter
          }
        }
      }
      
      for (let m = 0; m < comments.length; m++) {
        let comments = comments[m];
        // console.log("i am in the comment loop", comments)
        
        for (let n = 0; n < posts.length; n++) {
          let post = posts[n];
          
          if (post.id !== comments.commentPostId) {
            console.log("i am in the if post loop", post)
            post[commentBody] = "bye";
            post[commentId] ="bye";
            post[commentPostAuthorId] = "bye";
            post[commentPostId] = "bye";
          }
          if (post.id === comments.commentPostId) {
            console.log("i am in the comments loop", comments)
            post[commentBody] = comments.body;
            post[commentId] = comments.id;
            post[commentPostAuthorId] = comments.post_author_id;
            post[commentPostId] = comments.post_id;
          }
        }
      }

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
              <div className="post-button-potrait-icon"><FontAwesomeIcon icon={faPortrait} /></div>
              <button onClick={() => this.props.openModal('post')} className="joinin-post-button">Start a post</button>
            </div>
            {
              posts.reverse().map ((post, index) => {
                return (
                  <div key={post.id} className="feed-box">
                    <div className="post-potrait-icon">
                      <FontAwesomeIcon icon={faPortrait} />
                    </div>
                    <div className="post-body-container">
                      {post.body}
                    </div>
                    <div className="post-button-container">
                      <div className="post-like-container">
                        <div onClick={() => this.createLike(this.state.author_id, post.id)} className="post-like-button">
                          <FontAwesomeIcon icon={faThumbsUp} />
                        </div>
                        <div className="post-like-counter">
                          {post.likeCount}
                        </div>
                        <div className="post-comment-counter">
                          {post.commentCount}
                        </div>                        
                      </div>
                      <div className="edit-delete-container">
                        <div className="edit-button-container">
                          {this.props.current_user_id === post.author_id ? 
                            <div onClick={() => this.props.openModal('edit', post.id)} className="feed-post-edit">
                              <div>
                                <FontAwesomeIcon icon={faPencilAlt} />Edit</div>
                              </div>
                            : <br />}
                        </div>
                        <div className="delete-button-container">
                          {this.props.current_user_id === post.author_id ? 
                            <div onClick={() => this.props.deletePost(post.id)} className="feed-post-delete">
                              <div>
                                <FontAwesomeIcon icon={faTrashAlt} />Delete</div>
                              </div>
                            : <br />}
                        </div>
                      </div>
                    </div>
                    <div className="comments-container">
                      <div className="comments-body">
                        {post.commentBody}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="extra-resources">
            <div className="joinin-news-container">
              <label className="joinin-news-container-label">JoinIn News</label>
              {/* <ul> */}
                <div className="news-link-container">
                  <div className="bullet-point">
                    <FontAwesomeIcon icon={faCircle} />
                  </div>
                  <a href="https://www.linkedin.com/news/story/anti-wfh-bias-is-alive-and-well-5514786/"
                    className="joinin-link-title" target="_blank" rel="noopener noreferrer">Anti-WFH bias is alive and well</a>
                </div>
                <div className="news-link-container">
                  <div className="bullet-point">
                    <FontAwesomeIcon icon={faCircle} />
                  </div>
                  <a href="https://www.linkedin.com/news/story/more-employers-offering-hybrid-work-5519602/"
                    className="joinin-link-title" target="_blank" rel="noopener noreferrer">More employers offering hybrid work</a>
                </div>
                <div className="news-link-container">
                  <div className="bullet-point">
                    <FontAwesomeIcon icon={faCircle} />
                  </div>
                  <a href="https://www.linkedin.com/news/story/millennials-play-financial-catch-up-5116532/"
                    className="joinin-link-title" target="_blank" rel="noopener noreferrer">Millennials play financial catch-up</a>
                </div>
                <div className="news-link-container">
                  <div className="bullet-point">
                    <FontAwesomeIcon icon={faCircle} />
                  </div>
                  <a href="https://www.linkedin.com/news/story/should-remote-work-mean-a-pay-cut-5111572/"
                    className="joinin-link-title" target="_blank" rel="noopener noreferrer">Should remote work mean a pay cut?</a>
                </div>
                <div className="news-link-container">
                  <div className="bullet-point">
                    <FontAwesomeIcon icon={faCircle} />
                  </div>
                  <a href="https://www.linkedin.com/news/story/behind-the-glamour-unlivable-pay-4489521/"
                    className="joinin-link-title" target="_blank" rel="noopener noreferrer">Behind the glamour, 'unlivable' pay</a>
                </div>
                <div className="news-link-container">
                  <div className="bullet-point">
                    <FontAwesomeIcon icon={faCircle} />
                  </div>
                  <a href="https://www.linkedin.com/news/story/managers-wonder-is-fall-canceled-5507746/"
                    className="joinin-link-title" target="_blank" rel="noopener noreferrer">Managers wonder: Is fall canceled?</a>
                </div>
                <div className="news-link-container">
                  <div className="bullet-point">
                    <FontAwesomeIcon icon={faCircle} />
                  </div>
                  <a href="https://www.linkedin.com/news/story/mandates-gain-steam-in-virus-fight-4489513/"
                    className="joinin-link-title" target="_blank" rel="noopener noreferrer">Mandates gain stream in virus fight</a>
                </div>
                <div className="news-link-container">
                  <div className="bullet-point">
                    <FontAwesomeIcon icon={faCircle} />
                  </div>
                  <a href="https://www.linkedin.com/news/story/so-you-quit-your-job-what-next-5112228/"
                    className="joinin-link-title" target="_blank" rel="noopener noreferrer">So you quit your job... what next?</a>
                </div>
                <div className="news-link-container">
                  <div className="bullet-point">
                    <FontAwesomeIcon icon={faCircle} />
                  </div>
                  <a href="https://www.linkedin.com/news/story/prices-just-keep-climbing-5115052/"
                    className="joinin-link-title" target="_blank" rel="noopener noreferrer">Prices just keep climbing</a>
                </div>
                <div className="news-link-container">
                  <div className="bullet-point">
                    <FontAwesomeIcon icon={faCircle} />
                  </div>
                  <a href="https://www.linkedin.com/news/story/banned-from-work-to-avoid-burnout-5112268/"
                    className="joinin-link-title" target="_blank" rel="noopener noreferrer">'Banned' from work to avoid burnout</a>
                </div>
              {/* </ul> */}
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
                    className="joinin-learning-title" target="_blank" rel="noopener noreferrer">Diversity Inclusion and Belonging
                    <p className="joinin-learning-author">Pat Wadors</p>
                  </a>
                </li>
              </ol>
              <div className="show-more-joinin-learning-container">
                <a href="https://www.linkedin.com/learning/me?trk=neptune_right_rail_top3"
                  className="show-more-joinin-learning-link" target="_blank" rel="noopener noreferrer">Show more JoinIn Learning
                </a>
                <div className="arrow-icon">
                  <FontAwesomeIcon icon={faLongArrowAltRight} />
                </div>
              </div>
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