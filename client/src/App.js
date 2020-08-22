import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import PrivateRoute from './components/routing/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';

import './App.css';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utilis/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []); // by this it only run once
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact={true} path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact={true} path='/register' component={Register} />
              <Route exact={true} path='/login' component={Login} />
              <PrivateRoute
                exact={true}
                path='/dashboard'
                component={Dashboard}
              />
              <PrivateRoute
                exact={true}
                path='/create-profile'
                component={CreateProfile}
              />
              <PrivateRoute
                exact={true}
                path='/edit-profile'
                component={EditProfile}
              />
              <PrivateRoute
                exact={true}
                path='/add-experience'
                component={AddExperience}
              />
              <PrivateRoute
                exact={true}
                path='/add-education'
                component={AddEducation}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
