import React, { useState } from 'react';
import styles from './SettingsPage.css';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../data/actions/auth-actions';
import registerPush from '../../workers/register-push';

const SettingsPage = () => {
  const [password, setPassword] = useState('');
  const [wantsPush, setWantsPush] = useState(false);
  const [pushHour, setPushHour] = useState(6);
  const [pushIsPM, setPushIsPM] = useState(false);
  const dispatch = useDispatch();
  const hours = Array(12).fill().map((x, i)=>i);
  const saveSettings = () => {
    dispatch(updateUser({
      pushHour: pushHour + 12 * Number(pushIsPM),
      wantsPush
    }));
    if(wantsPush) {
      registerPush();
    }
    else {
      // would be nice to be able to unregister
    }
  };

  return (
    <main className={styles.SettingsPage}>
      <h1>Account and Settings</h1>
      <h2>Notification Settings</h2>
      <div>
        Receive daily notifications: 
        <input type="checkbox" 
          value={wantsPush} 
          onChange={({ target }) => setWantsPush(target.value)} />
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
      <button onClick={saveSettings}>Save Settings</button>
    </main>
  );
};

export default SettingsPage;
