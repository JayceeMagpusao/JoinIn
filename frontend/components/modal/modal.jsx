import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreatePostFormContainer from '../post_form/create_post_form_container';
import EditPostFormContainer from '../post_form/edit_post_form_container';
import CreateCommentFormContainer from '../post_form/create_comment_form_container';
import EditCommentFormContainer from '../post_form/edit_comment_form_container';
import EditUserFormContainer from '../user/user_container';
import { withRouter } from 'react-router-dom';

function Modal({ modal, closeModal, allPosts, allComments, currentUser }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case 'editUser':
      let editUser = currentUser
      console.log("i am in the modal", editUser)
      component = <EditUserFormContainer user={editUser}/>;
      break;
    case 'post':
      component = <CreatePostFormContainer />;
      break;
    case 'editPost':
      let editPost = allPosts[modal.id]
      allPosts.posts.forEach(post => {
        if (post.id === modal.id){
          editPost = post
        }
      })
      component = <EditPostFormContainer post={editPost} />;
      break;
    case 'comment':
      let commentPost = allPosts[modal.id]
      allPosts.posts.forEach(post => {
        if (post.id === modal.id){
          commentPost = post
        }
      })
      component = <CreateCommentFormContainer post={commentPost} />;
      break;
    case 'editComment':
      let editedComment = allComments[modal.id]
      // this.fetchComment(modal.id)

      console.log("i am in the edit comment modal props", editedComment)
      // console.log("i am in the edit comment modal state", state)
      // debugger
      // allPosts.posts.forEach(post => {
      //   // console.log("all posts", allPosts.posts)
      //   if (post.id === modal.id){
      //     editComment = post
      //   }
      // })
      // console.log("i am in the comments", comments)
      // component = <EditCommentFormContainer post={editedComment} />;
      component = <EditCommentFormContainer comment={editedComment}/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
    allPosts: state.entities.posts,
    allComments: state.entities.comments,
    currentUser: state.entities.users
  }
};

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  fetchComment: (id) => dispatch(fetchComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);