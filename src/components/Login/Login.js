import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.css';
import { login } from '../../data/actions/auth-actions';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <main className={styles.Login}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email<input type="email" name="email" value={email} onChange={({ target }) => setEmail(target.value)} /></label>
        <label>Password<input type="password" name="password" value={password} onChange={({ target }) => setPassword(target.value)} /></label>
        <button>Login</button>
      </form>
      <p className={styles.center}><Link to="/signup">Sign up</Link></p>
    </main>
  );
};

export default Login;
