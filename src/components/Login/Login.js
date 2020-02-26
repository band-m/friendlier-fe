import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Login.css';
import { login } from '../../data/actions/auth-actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectError, selectLoading } from '../../data/selectors/auth-selector';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  if(user) {
    history.push('/');
  }

  return (
    <main className={styles.Login}>
      {loading && <img src='../../../public/assets/loading_spinner.gif' alt='loading-spinner' className={styles.LoadingImage} />}
      <h1>Login</h1>

      {error && <p>{error.message}</p>}

      <form onSubmit={handleSubmit}>
        <div><label htmlFor="email">Email</label><input type="email" name="email" value={email} onChange={({ target }) => setEmail(target.value)} /></div>
        <div><label htmlFor="password">Password</label><input type="password" name="password" value={password} onChange={({ target }) => setPassword(target.value)} /></div>
        <button>Login</button>
      </form>
      <p className={styles.center}><Link to="/signup">Sign up</Link></p>

    </main>
  );
};

export default Login;
