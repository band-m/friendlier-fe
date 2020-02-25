import React from 'react';
import Login from '../Login/Login.js';
import { useSelector } from 'react-redux';
import { selectUser } from '../../data/selectors/auth-selector.js';
import { useHistory } from 'react-router-dom';


const HomePage = () => {
  const user = useSelector(selectUser);
  const history = useHistory();
  
  if(!user){
    history.push('/login');
  }

  return (
    <h1>Welcome to the home screen</h1>
  );
};

export default HomePage;
