import React from 'react'
import Home from './Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.bundle';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import { Switch, Route, Redirect } from 'react-router';
import Footer from './Footer';

const App=()=>{
    return(
        <>
        <Navbar />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/service' component={Service} />
        <Route exact path='/contact' component={Contact} />
        <Redirect to="/"/>
        </Switch>
        <Footer />
        </>
    )
};
export default App;