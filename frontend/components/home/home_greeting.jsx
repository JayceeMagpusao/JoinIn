import React from 'react';
import LogoURL from '../../../app/assets/images/linkedin.png';
import TestimonialsImage from '../../../app/assets/images/2r8kd5zqpi905lkzsshdlvvn5.png';
import WelcomePageImage from '../../../app/assets/images/iquvjzblisul7nnero4y.png';
import GetStartedBackground from '../../../app/assets/images/maxresdefault.jpg';

class HomeGreetingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.signIn = this.signIn.bind(this);
    this.joinNow = this.joinNow.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  signIn() {
    let signIn = "/landing"
    this.props.history.push(signIn)
  }

  joinNow() {
    let joinNow = "/start-signup"
    this.props.history.push(joinNow)
  }

  render() {
    return (
      <div className="home-sign-in-form-container">
        <div className="home-sign-in-joinin-logo-title">
          <label className="home-sign-in-joinin-logo">Join
            <img src={LogoURL} className="home-sign-in-joinin-logo-image" />
          </label>
          <div className="home-sign-in-container">
            <div className="home-sign-in-button-container">
              <button className="home-login-button" onClick={this.signIn}>Sign in</button>
            </div>
            <div className="home-join-now-button-container">
              <button className="home-join-now-button" onClick={this.joinNow}>Join Now</button>
            </div>
          </div>
        </div>
        <div className="home-page-info">
          <div className="home-welcome-page">
            <h1 className="home-welcome-page-title">Welcome to your professional community</h1>
              <img src={WelcomePageImage} className="home-welcome-page-image" />
          </div>
        </div>
        <div className="section-testimonials-container">
          <div className="section-testimonials-media">
            <h1 className="section-testimonials-title">Conversations today could lead to opportunity tomorrow
              <p className="section-testimonials-content">Sending messages to people you know is a great way to strengthen relationships 
                as you take the next step in your career
              </p>
            </h1>
          </div>
          <img src={TestimonialsImage} className="section-testimonials-image" />
        </div>
        <div className="youtube-media-container">
          <div className="youtube-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/EEikRQ58NwM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="youtube-media-content">
            <h1 className="youtube-media-title">Let's step forward
              <p className="youtube-media-content">With our communities by our side, there's no telling where our next
                small steps could lead
              </p>
            </h1>
          </div>
        </div>
        <div className="get-started-container">
          <div className="get-started-media">
            <h1 className="get-started-title">Join your colleagues, classmates, and friends on JoinIn.</h1>
              <div className="get-started-now-button-container">
              <button className="get-started-now-button" onClick={this.joinNow}>Get started</button>
              </div>
          </div>
          <img src={GetStartedBackground} className="section-testimonials-image" />
        </div>
      </div>
    )
  }
}

export default HomeGreetingForm;