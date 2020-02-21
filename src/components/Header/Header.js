import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';
const Header = () => (
  <header className={styles.Header}>
    <Link to="/">
      <div className={styles.Logo} alt="re:connect logo" title="Back to Home"></div>
    </Link>
    <nav className={styles.Nav}>
      <Link to="/contacts"><span>Contact List</span></Link>
      <Link to="/about"><span>About</span></Link>
      <Link to="/settings"><span>Settings</span></Link>
      {/* <Link to="#"><span>Logout</span></Link> */}
    </nav>
  </header>
);

export default Header;
