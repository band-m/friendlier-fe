import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/HomePage';
import About from './About/AboutPage';
// import Contacts from './Contacts/ContactDetail/ContactDetail';
import Settings from './Settings/SettingsPage';
import Signup from './Login/Signup';
import Login from './Login/Login';
import { signedIn } from '../data/actions/auth-actions';
import AddContact from './Contacts/AddContact';
import ContactList from './Contacts/ContactList';
import DetailView from './Contacts/ContactDetail/DetailView';



export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(signedIn());
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/contacts" component={ContactList} />
        <Route path="/add" component={AddContact} />
        <Route path="/about" component={About} />
        <Route path="/settings" component={Settings} />
      </Switch>
      <Route path='/contacts/:id' component={DetailView} />
      {/* <Route path='/contacts/add' component={AddContact} /> */}
    </Router>
  );
}
