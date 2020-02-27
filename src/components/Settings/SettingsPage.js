import React, { useState } from 'react';
import styles from './SettingsPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../data/actions/auth-actions';
import { selectUser } from '../../data/selectors/auth-selector';
import subscribePush from '../../workers/subscribe-push';
import unsubscribePush from '../../workers/unsubscribe-push';

const SettingsPage = () => {
  const user = useSelector(selectUser);
  let userPushHour = user?.pushHour;
  if(!Number.isInteger(userPushHour)) {
    userPushHour = 18;
  }
  const [password, setPassword] = useState('');
  const [wantsPush, setWantsPush] = useState(user?.wantsPush || false);
  const [pushHour, setPushHour] = useState(userPushHour % 12);
  const [pushIsPM, setPushIsPM] = useState(!!Math.floor(userPushHour / 12));
  const dispatch = useDispatch();
  const hours = Array(12).fill().map((x, i)=>i);

  const saveSettings = async() => {
    let subscription;
    if(wantsPush) {
      subscription = await subscribePush();
      console.log(subscription, 'subscription');
    }
    else {
      unsubscribePush();
    }
    dispatch(updateUser({
      subscription,
      createDate: new Date(),
      pushHour: pushHour + 12 * Number(pushIsPM),
      wantsPush
    }));
  };

  return (
    <main className={styles.SettingsPage}>
      <h1>Account and Settings</h1>
      <h2>Notification Settings</h2>
      <div>
        Receive daily notifications: 
        <input type="checkbox" 
          value={wantsPush} 
          onChange={({ target }) => setWantsPush(target.checked) } />
      </div>
      <div>
        At: <select value={pushHour} onChange={({ target }) => setPushHour(target.value) }>
          {hours.map((hour) => <option key={hour} value={hour}>{hour}</option>)}
        </select>
        <select value={pushIsPM} onChange={({ target }) => setPushIsPM(Boolean(target.value)) }>
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
