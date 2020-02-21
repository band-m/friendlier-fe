import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/HomePage';
import About from './About/AboutPage';
import Contacts from './Contacts/ContactsPage';
import Settings from './Settings/SettingsPage';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/about" component={About} />
        <Route path="/settings" component={Settings} />
      </Switch>
        <Route path='/contacts/:id' component={ContactDetail} />
    </Router>
  );
}
