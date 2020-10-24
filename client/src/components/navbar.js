import axios from 'axios';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LOADING, UNSET_USER } from '../store/actions';
import { useStoreContext } from '../store/store';
import '../stylesheets/style.css';
import safetrip from '../images/safetrip.png';

const Navbar = () => {
  const [state, dispatch] = useStoreContext();
  const history = useHistory();

  const logout = (event) => {
    event.preventDefault();

    dispatch({ type: LOADING });

    axios
      .post('/api/users/logout')
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: UNSET_USER });
          history.replace('/login');
        }
      })
      .catch((error) => {
        console.log('Logout error');
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <a className="navbar-brand" href="/">
    <img src={safetrip} alt="Safetrip logo" /></a> */}
  
      <Link to="/" className="btn btn-link text-secondary">
        <span className="text-secondary glyphicon glyphicon-home">home</span>
      </Link>
      <Link to="/about" className="btn btn-link text-secondary">
        <span className="text-secondary">about</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse w-100 order-1 order-lg-0" id="navbarNav">
        <ul className="navbar-nav">
          {state.user ? (

            <li className="nav-item active">
                <Link to="/wishlist" className="btn btn-link">
                <span className="text-secondary">wish list</span>
                </Link>
                <Link to="#" className="btn btn-link text-secondary" onClick={logout}>
               <span className="text-secondary">logout</span>
               </Link>
            </li>
          ) : (
            <>
              <li className="nav-item active">
                <Link to="/login" className="btn btn-link text-secondary">
                  <span className="text-secondary">login</span>
              </Link>
              </li>
              <li className="nav-item active">
                <Link to="/signup" className="btn btn-link">
                  <span className="text-secondary">sign up</span>
              </Link>
              </li>
            </>
          )}
        </ul>
        <a className="brand" href="/">
         <span class="w-100"></span> 
    <img src={safetrip} alt="Safetrip logo" /></a>
        </div>
    <div class="d-flex w-100 order-0">
        <div class="w-100">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        
        {/* <a className="brand" href="/">
         <span class="w-100"></span> 
    <img src={safetrip} alt="Safetrip logo" /></a> */}
      </div>
      
    </nav>
  );
};

export default Navbar;
