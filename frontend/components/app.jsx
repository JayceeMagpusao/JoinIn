import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NewGreetingContainer from './greeting/new_greeting_container';
import HomeContainer from './home/home_greeting_container';
import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingLoginContainer from './landing/landing_login_container';
import StartSignupContainer from './session/email_signup_container';
import FinalSignupContainer from './session/name_signup_container';
import NavBarContainer from './navigation/nav_bar_container';

const App = () => (
  <div>
    <header>
      
    </header>
    {/* <div>
      <NavBarContainer/>
    </div> */}
    <Switch>
      <ProtectedRoute exact path="/feed" component={NewGreetingContainer} />
      <AuthRoute exact path="/" component={HomeContainer} />
      <AuthRoute exact path="/landing" component={LandingLoginContainer} />
      <AuthRoute exact path="/start-signup" component={StartSignupContainer} />
      <AuthRoute exact path="/final-signup" component={FinalSignupContainer} />
    </Switch>
  </div>
);

export default App;