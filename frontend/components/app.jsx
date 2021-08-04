import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session/signup_form_container';
import LogInFormContainer from './session/login_form_container';
// import SearchContainer from './search/search_container';
// import BenchShowContainer from './bench_show/bench_show_container';
// import BenchFormContainer from './bench_form/bench_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingLoginContainer from './landing/landing_login_container';
// import EmailSignupContainer from './session/email_signup_container';
import StartSignupContainer from './session/email_signup_container';
import FinalSignupContainer from './session/name_signup_container';

const App = () => (
  <div>
    <header>
      {/* <Link to="/" className="header-link"> */}
      <div className="Joinin_Logo">JoinIn</div>
      {/* </Link> */}
      {/* <GreetingContainer /> */}
    </header>
    <Switch>
      <Route exact path="/" component={GreetingContainer} />
      <AuthRoute exact path="/landing" component={LandingLoginContainer} />
      {/* <AuthRoute exact path="/login" component={LogInFormContainer} /> */}
      <AuthRoute exact path="/start-signup" component={StartSignupContainer} />
      <AuthRoute exact path="/final-signup" component={FinalSignupContainer} />
      {/* <AuthRoute exact path="/signup" component={EmailSignupContainer} /> */}
      {/* <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
      {/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} /> */}
      {/* <Route path="/benches/:benchId" component={BenchShowContainer} /> */}
      {/* <Route exact path="/" component={SearchContainer} /> */}
    </Switch>
  </div>
);

export default App;