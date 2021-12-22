import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createLike, deleteLike, fetchLikes } from '../../actions/likes_actions';
import { createComment, fetchComments, deleteComment } from '../../actions/comments_actions';
import NewGreeting from './new_greeting';

const mapStateToProps = (state) => {

    let comments = Object.values(state.entities.comments);
    let likesArray = Object.values(state.entities.likes);

    return ({
        errors: state.errors.session,
        currentUser: state.entities.users[state.session.id].first_name,
        author_id: state.session.id,
        posts: state.entities.posts.posts,
        current_user_id: state.entities.users[state.session.id].id,
        likeCounter: state.entities.posts.likeCounter,
        commentCounter: state.entities.posts.commentCounter,
        comments: comments,
        commentPostId: state.entities.comments.post_id,
        likes: state.entities.likes,
        likesArray: likesArray,
        currentUserLastName: state.entities.users[state.session.id].last_name,
        currentUserEmail: state.entities.users[state.session.id].email,
        currentUserCompanyName: state.entities.users[state.session.id].company_name,
        currentUserIndustryType: state.entities.users[state.session.id].industry_type,
        currentUserJobTitle: state.entities.users[state.session.id].job_title,
        currentUserStartDate: state.entities.users[state.session.id].start_date,
        currentUserEndDate: state.entities.users[state.session.id].end_date,
    })
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (id) => dispatch(deletePost(id)), 
    createLike: (like) => dispatch(createLike(like)),
    fetchLikes: () => dispatch(fetchLikes()),
    deleteLike: (id) => dispatch(deleteLike(id)),
    fetchComments: () => dispatch(fetchComments()),
    deleteComment: (id) => dispatch(deleteComment(id)),
    createComment: (comment) => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewGreeting);