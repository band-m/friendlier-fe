import React from 'react';
import MenuList from './commons/Header/Header';

const menu = [
  { label: 'Home', url: '#' },
  { label: 'Contact List', url: '#' },
  { label: 'Add Contact', url: '#' },
  { label: 'About', url: '#' },
  { label: 'Settings', url: '#' },
  { label: 'Logout', url: '#' },
];
export default function App() {
  return <MenuList menuItems={menu} />;
}
