import React from 'react';
import './style.scss';
// import {
//   Facebook,
//   Google,
//   Twitter,
// } from '../../../firebaseConfig/authProviders';

function Auth() {
  // FIREBASE AUTH FUNTIONS
  // const googleAuth = () => {
  //   return Google();
  // };
  // const facebookAuth = () => {
  //   return Facebook();
  // };
  // const twitterAuth = () => {
  //   return Twitter();
  // };

  return (
    <div className="social-btns-container">
      <button className="btn google-btn" onClick={() => location.href = '/auth/google'}>
        Sign in with Google
      </button>
      <button className="btn facebook-btn" onClick={() => location.href = '/auth/facebook'}>
        Sign in with Facebook
      </button>
      <button className="btn twitter-btn" onClick={() => location.href = '/auth/twitter'}>
        Sign in with Twitter
      </button>
    </div>
  );
}

export default Auth;
