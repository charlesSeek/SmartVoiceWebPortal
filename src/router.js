import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './components/Home';
import Main from './components/main/Main';
import RegisterInerest from './components/registerInterest/RegisterInterest';
import ApprovedIntegrators from './components/approvedIntegrators/ApprovedIntegrators';
import ContactUs from './components/contactUs/ContactUs';
import Login from './components/login/Login';
import IntegratorHome from './components/integrator/IntegratorHome';
import CustomerHome from './components/customer/CustomerHome';
import DownloadResource from './components/downloadResource/Resource';
import DeviceHome from './components/device/DeviceHome';

const Routes = () => {
  return (
    <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)} >
      <Route path="/" component={Home}>
        <IndexRoute component={Main}/>
        <Route path="/registerInterest" component={RegisterInerest}/>
        <Route path="/approvedIntegrators" component={ApprovedIntegrators}/>
        <Route path='/contact' component={ContactUs}/>
        <Route path='/login' component={Login}/>
        <Route path='/integrator' component={IntegratorHome}/>
        <Route path='/integrator/customer' component={CustomerHome}/>
        <Route path='/integrator/resource' component={DownloadResource}/>
        <Route path='/integrator/customer/device' component={DeviceHome}/>
      </Route>
    </Router>
  );
};

export default Routes;