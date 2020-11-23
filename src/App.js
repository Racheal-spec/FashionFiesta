import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/NavSection/Nav';
import Login from './components/LoginPage/Login';
import Register from './components/RegisterPage/Register';
import Home from './components/HomePage/Home';
import Wears from './components/WearsPage/Wears';
import Watches from './components/WatchesPage/Watches';
import Bags from './components/BagsPage/Bags';
import Cart from './components/CartPage/Cart';
import Footer from './components/FooterSection/Footer';
import Details from './components/DetailsPage/Details';


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
  <Route path= '/Watches' component = {Watches} />
  <Route path= '/Bags' component = {Bags} />
  <Route path= '/Cart' component = {Cart} />
  <Route path= '/Details' exact component = {Details} />
  <Route path= '/Details/:id' component = {Details} />

  </Switch>
    <Footer />
   </div>
   </Router>
  )
}
export default App;
