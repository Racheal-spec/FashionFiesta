import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/HeaderSection/Header';
import Home from './components/HomePage/Home';
import Wears from './components/WearsPage/Wears';
import Watches from './components/WatchesPage/Watches';
import Bags from './components/BagsPage/Bags';
import Cart from './components/CartPage/Cart';
import Footer from './components/FooterSection/Footer';
import Details from './components/DetailsPage/Details';
import BackToTop from './components/BackToTop';
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login';


const App = () => {


  return(

    <Router>
   <div className ='App'>
     <Banner />
     <Header />
     <Switch>
  <Route path= '/' exact component = {Home} />
  <Route path= '/Wears' component = {Wears} />
  <Route path= '/Watches' component = {Watches} />
  <Route path= '/Bags' component = {Bags} />
  <Route path='/Login' component= {Login} />
  <Route path= '/Cart' component = {Cart} />
  <Route path= '/Details' exact component = {Details} />
  <Route path= '/Details/:id' component = {Details} />
  </Switch>
  <BackToTop />
    <Footer />
   </div>
   </Router>
  )

 
}
export default App;
