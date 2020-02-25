import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/HomePage';
import About from './About/AboutPage';
import Contacts from './Contacts/ContactList';
import Settings from './Settings/SettingsPage';
import Signup from './Login/Signup';
import Slider from './Slider/Slider';
import Login from './Login/Login';
import { signedIn } from '../data/actions/auth-actions';



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
        <Route path="/contacts" component={Contacts} />
        <Route path="/about" component={About} />
        <Route path="/settings" component={Settings} />
      </Switch>
      {/* <Route path='/contacts/:id' component={ContactDetail} />
        <Route path='/contacts/add' component={AddContact} /> */}
    </Router>
  );
}
