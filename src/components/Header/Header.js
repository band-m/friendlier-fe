import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../data/selectors/auth-selector';
import { logout } from '../../data/actions/auth-actions';

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogoutClick = () => dispatch(logout());

  return (
    <header className={styles.Header}>
      <Link to="/">
        <div className={styles.Logo} alt="re:connect logo" title="Back to Home"></div>
      </Link>
      <nav className={styles.Nav}>
        {user && <Link to="/contacts"><span>Contact List</span></Link>}
        <Link to="/about"><span>About</span></Link>
        {user && <Link to="/settings"><span>Settings</span></Link>}
        {user && <span onClick={handleLogoutClick}>Logout</span>}
      </nav>
    </header>
  );
};

export default Header;
