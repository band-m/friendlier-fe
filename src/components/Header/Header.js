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
      <button className={`${styles.hamburger} ${styles.hamburgersqueeze}`} type="button">
        <span className={styles.hamburger_box}>
          <span className={styles.hamburgerinner}></span>
        </span>
      </button>
      <Link to="/">
        <div className={styles.Logo} alt="KIT logo" title="Back to Home"></div>
      </Link>
      <nav className={styles.Nav}>
        {!user && <Link to="/" className={styles.HomeLink}><span>Home</span></Link>}
        {user && <Link to="/contacts"><span>Contact List</span></Link>}
        <Link to="/about"><span>About</span></Link>
        {user && <Link to="/settings"><span>Settings</span></Link>}
        {user && <span onClick={handleLogoutClick} className={styles.LogoutButton}>Logout</span>}
      </nav>
    </header>
  );
};



export default Header;
