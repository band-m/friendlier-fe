import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Login.css';
import { signup } from '../../data/actions/auth-actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectError, selectLoading } from '../../data/selectors/auth-selector';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(signup(username, email, password));
  };

  if(user){
    history.push('/');
  }

  return (
    <main className={styles.Login}>
      <h1>Signup</h1>
      {error && <p>{error.message}</p>}
      <form onSubmit={handleSubmit}>
        <div><label htmlFor="username">Username</label><input type="text" name="username" value={username} onChange={({ target }) => setUsername(target.value)} /></div>
        <div><label htmlFor="email">Email</label><input type="email" name="email" value={email} onChange={({ target }) => setEmail(target.value)} /></div>
        <div><label htmlFor="password">Password</label><input type="password" name="password" value={password} onChange={({ target }) => setPassword(target.value)} /></div>
        <button>Signup</button>
      </form>
      <p className={styles.center}><Link to="/">Login</Link></p>
      {loading && <img src='../../../public/assets/loading_spinner.gif' alt='loading-spinner' />}
    </main>
  );
};

export default Signup;
