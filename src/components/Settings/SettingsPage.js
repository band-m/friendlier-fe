import React, { useState, useEffect } from 'react';
import styles from './SettingsPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../data/actions/auth-actions';
import { selectUser, selectLoggedOut } from '../../data/selectors/auth-selector';
import subscribePush from '../../workers/subscribe-push';
import unsubscribePush from '../../workers/unsubscribe-push';
import { useHistory } from 'react-router-dom';

const SettingsPage = () => {
  const user = useSelector(selectUser);
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  const loggedOut = useSelector(selectLoggedOut);
  const history = useHistory();

  let userPushHour = user?.pushHour;
  if(!Number.isInteger(userPushHour)) {
    userPushHour = 18;
  }
  const [password, setPassword] = useState('');
  const [wantsPush, setWantsPush] = useState(false);
  const [pushHour, setPushHour] = useState(0);
  const [pushIsPM, setPushIsPM] = useState(true);
  const dispatch = useDispatch();
  const hours = Array(12).fill().map((x, i)=>i);
  const offsetHours = Math.floor((new Date).getTimezoneOffset() / 60);
  console.log(offsetHours, 'offset');

  useEffect(() => {
    if(loggedOut) {
      history.push('/');
    }
  }, [loggedOut]);

  useEffect(() => {
    if(user) {
      setWantsPush(user.wantsPush || false);
    }
  }, [user?._id, user?.wantsPush]);

  useEffect(() => {
    if(user) {
      setPushHour((user.pushHour - offsetHours + 24) % 12);
      setPushIsPM(!!Math.floor(((user.pushHour - offsetHours) % 24) / 12));
    }
  }, [user?._id, user?.pushHour]);

  const saveSettings = async() => {
    const offsetHours = Math.floor((new Date).getTimezoneOffset() / 60);
    let subscription;
    if(wantsPush) {
      subscription = await subscribePush();
    }
    else {
      unsubscribePush();
    }
    dispatch(updateUser({
      subscription,
      createDate: new Date(),
      pushHour: (Number(pushHour) + 12 * Number(pushIsPM) + offsetHours) % 24,
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
