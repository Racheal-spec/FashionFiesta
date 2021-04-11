import React, { useEffect } from 'react';
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
import Register from './components/Register/Register';
import {auth} from './components/Firebase';
import { useStateValue } from './components/Context/StateProvider';
import Checkout from './components/Checkout/Checkout';


const App = () => {

 const [, dispatch] = useStateValue(); 

useEffect(() => {

auth.onAuthStateChanged(authUser => {
  console.log('The user is',  authUser)

  if(authUser) {
    //if user is logged in
    dispatch({
      type: 'SET_USER',
      user: authUser
    })
   }else {
      //if user is logged out
    dispatch({
      type: 'SET_USER',
      user: null
    })
    }

})

}, [dispatch])

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
  <Route path= '/register' component = {Register} />
  <Route path='/Checkout' component= {Checkout} />
  </Switch>
  <BackToTop />
    <Footer />
   </div>
   </Router>
  )

 
}
export default App;
