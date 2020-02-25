import React, { useState } from 'react';
import styles from './Login.css';
import { signup } from '../../data/actions/auth-actions';
import { useDispatch } from 'react-redux';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(signup(username, email, password));
  };

  return (
    <main className={styles.Login}>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>Username<input type="text" name="username" value={username} onChange={({ target }) => setUsername(target.value)} /></label>
        <label>Email<input type="email" name="email" value={email} onChange={({ target }) => setEmail(target.value)} /></label>
        <label>Password<input type="password" name="password" value={password} onChange={({ target }) => setPassword(target.value)} /></label>
        <button>Signup</button>
      </form>
    </main>
  );
};

export default Signup;
