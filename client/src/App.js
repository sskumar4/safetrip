import axios from 'axios';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
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

  useEffect(() => {
    dispatch({ type: LOADING });

    axios.get('/api/users').then((response) => {
      if (response.data.user) {
        dispatch({ type: SET_USER, user: response.data.user });
        history.push('/');
      } else {
        dispatch({ type: UNSET_USER });
        history.push('/safetrip');
      }
    });
  }, [dispatch, history]);

  return (

    <div>
      <Navbar />

      {

      state.user ? (
        <Switch>
          <Route exact path="/" component={Safetrip} />
          <Route exact path="/about" component={About} />
          <Route exact path="/safetrip" component={Safetrip} />
          <Route exact path="/wishlist" component={Wishlist} />
          
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/safetrip" component={Safetrip} />
          <Route exact path="/wishlist" component={Wishlist} />
          <Redirect to="/safetrip" />
        </Switch>
      )}
      <Footer />
    </div>
  );
};

export default App;
