import React from 'react';
import styles from './About.css';

const AboutPage = () => {
  return (
    <main className={styles.About}>
      <h1>About KIT</h1>
      <p>KIT is a tool for improving your communication with the people that matter to you. If you&apos;ve got personal or professional connections that you want to nourish with regular contact, KIT can help.</p>
      <h2>Features include:</h2>
      <ul>
        <li>Fast and flexible communication scheduling</li>
        <li>Push notifications with multiple levels of urgency</li>
        <li>Communication history logs</li>
        <li>A user interface designed for efficiency</li>
      </ul>
      <p>Track birthdays, family check-ins, professional contacts, and friends with ease, and never again worry about neglecting the connections that you care about.</p>
    </main>
  );
};

export default AboutPage;
