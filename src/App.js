import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/NavSection/Nav';
import Login from './components/LoginPage/Login';
import Register from './components/RegisterPage/Register';
import Home from './components/HomePage/Home';
import Wears from './components/WearsPage/Wears';
import Wearslist from './components/WearsPage/Wearslist';
import FiestaMakeup from './components/FiestMakeupPage/FiestaMakeup';
import Skincare from './components/SkincarePage/Skincare';
import Cart from './components/CartPage/Cart';
import Footer from './components/FooterSection/Footer';


const App = () => {
  return(
    <Router>
   <div className = 'App'>
     <Nav />
     <Switch>
  <Route path= '/' exact component = {Home} />
  <Route path= '/Login' component = {Login} />
  <Route path= '/Register' component = {Register} />
  <Route path= '/Wears' component = {Wears} />
  <Route path= '/Wearslist' component = {Wearslist} />
  <Route path= '/FiestaMakeup' component = {FiestaMakeup} />
  <Route path= '/Skincare' component = {Skincare} />
  <Route path= '/Cart' component = {Cart} />
  </Switch>
    <Footer />
   </div>
   </Router>
  )
}
export default App;
