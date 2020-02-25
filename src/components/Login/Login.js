import React, { useState } from 'react';
import styles from './Login.css';

const Login = () => {

  const [input, setInput] = useState();
  const [password, setPassword] = useState();

  return (
    <main className={styles.Login}>
      <h1>Login/Signup</h1>
      <label>Email<input type="email" name="email" /></label>
      <label>Password<input type="password" name="password" /></label>
      <button>Login</button>
    </main>
  );
};

export default Login;
