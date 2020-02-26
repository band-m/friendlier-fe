import React, { useState } from 'react';
import styles from './SettingsPage.css';

const SettingsPage = () => {
  const [password, setPassword] = useState('');
  return (
    <main className={styles.SettingsPage}>
      <h1>Account and Settings</h1>
      <h2>Notification Settings</h2>
      <h2>User Info</h2>
      <div><label htmlFor="username">Username</label></div>
      <h2>Change Password</h2>
      <div><label htmlFor="password">Password</label><input type="password" name="password" value={password} onChange={({ target }) => setPassword(target.value)} /></div>
    </main>
  );
};

export default SettingsPage;
