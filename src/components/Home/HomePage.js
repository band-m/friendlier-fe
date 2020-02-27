import React, { useEffect } from 'react';
import Login from '../Login/Login.js';
import { useSelector } from 'react-redux';
import { selectUser, selectLoading } from '../../data/selectors/auth-selector.js';
import { useHistory } from 'react-router-dom';


const HomePage = () => {
  const user = useSelector(selectUser);
  const history = useHistory();

  useEffect(() => {
    if(!user){
      history.push('/login');
    }
  }, [user]);

  return (
    <h1>Welcome to the home screen</h1>
  );
};

export default HomePage;
