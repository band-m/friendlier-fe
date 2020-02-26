import React, { useState } from 'react';
import styles from './SettingsPage.css';

const SettingsPage = () => {
  const [password, setPassword] = useState('');
  const [pushesOn, setPushesOn] = useState(false);
  const [pushHour, setPushHour] = useState(6);
  const [pushIsPM, setPushIsPM] = useState(false);
  const hours = Array(12).fill().map((x, i)=>i);

  return (
    <main className={styles.SettingsPage}>
      <h1>Account and Settings</h1>
      <h2>Notification Settings</h2>
      <div>
        Receive daily notifications: 
        <input type="checkbox" 
          value={pushesOn} 
          onChange={({ target }) => setPushesOn(target.value)} />
      </div>
      <div>
        At: <select value={pushHour} onChange={({ target }) => setPushHour(target.value) }>
          {hours.map((hour) => <option key={hour} value={hour}>{hour}</option>)}
        </select>
        <select value={pushIsPM} onChange={({ target }) => setPushIsPM(target.value) }>
          <option value={false}>AM</option>
          <option value={true}>PM</option>
        </select>
      </div>

      <h2>User Info</h2>
      <div><label htmlFor="username">Username</label></div>
      <h2>Change Password</h2>
      <div><label htmlFor="password">Password</label><input type="password" name="password" value={password} onChange={({ target }) => setPassword(target.value)} /></div>
      <button>Save Settings</button>
    </main>
  );
};

export default SettingsPage;
