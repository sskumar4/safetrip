import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Navbar from './components/navbar';
import Login from './pages/login';
import Signup from './pages/signUp';
import About from './pages/about';
import Safetrip from './pages/safetrip';
import Wishlist from './pages/wishlist';
import Footer from './components/Footer';
import { LOADING, SET_USER, UNSET_USER } from './store/actions';
import { useStoreContext } from './store/store';


const App = () => {
  const history = useHistory();
  const [state, dispatch] = useStoreContext();
  const [loggedInAs, setLoggedInAs] = useState({
    msg: 'not logged in',
    loggedOn: false
  });

  useEffect(() => {
    dispatch({ type: LOADING });

    axios.get('/api/users').then((response) => {
      if (response.data.user) {
        dispatch({ type: SET_USER, user: response.data.user });
        setLoggedInAs({
          msg: response.data.user.username,
          loggedOn: true
        });
        history.push('/');
      } else {
        dispatch({ type: UNSET_USER });
        history.push('/safetrip');
      }
    });
  }, [dispatch, history]);
  console.log('app.js:loggedIn ', loggedInAs.loggedOn);
  return (
   
    <div>
      <Navbar />

      {
      
      state.user ? (
        <Switch>
          <Route exact path="/" component={Safetrip} />
          <Route exact path="/about" component={About} />
          <Route exact path="/safetrip" render={props => <Safetrip {...props} loggedIn={loggedInAs.loggedOn} />} />
          <Route exact path="/wishlist" render={props => <Wishlist {...props} loggedIn={loggedInAs.loggedOn} />} />
          
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path="/safetrip" render={props => <Safetrip {...props} loggedIn={loggedInAs.loggedOn} />} />
          <Route exact path="/wishlist" component={Wishlist} /> */}
           <Route exact path="/safetrip" render={props => <Safetrip {...props} loggedIn={loggedInAs.loggedOn} />} />
          <Route exact path="/wishlist" render={props => <Wishlist {...props} loggedIn={loggedInAs.loggedOn} />} />
          <Redirect to="/safetrip" />
        </Switch>
      )}
      <Footer />
    </div>
  );
};

export default App;
