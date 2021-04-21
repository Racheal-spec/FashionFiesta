import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/HeaderSection/Header';
import {auth} from './components/Firebase';
import { useStateValue } from './components/Context/StateProvider';
import BackToTop from './components/BackToTop';
import Banner from './components/Banner/Banner';
import Footer from './components/FooterSection/Footer';
import placeholder from './components/Img/placeholder.png';
const Home = React.lazy(()=> import('./components/HomePage/Home'))
const Wears = React.lazy(()=> import('./components/WearsPage/Wears'))
const Watches = React.lazy(()=> import('./components/WatchesPage/Watches'))
const Bags = React.lazy(()=> import('./components/BagsPage/Bags'))
const Cart = React.lazy(()=> import('./components/CartPage/Cart'))
const Details = React.lazy(()=> import('./components/DetailsPage/Details'))
const Login = React.lazy(()=> import('./components/Login/Login'))
const Register = React.lazy(()=> import('./components/Register/Register'))
const Checkout = React.lazy(()=> import('./components/Checkout/Checkout'))

const App = () => {

const [, dispatch] = useStateValue(); 
//const[isLoading, setIsloading] = useState(true);

useEffect(() => {

auth.onAuthStateChanged(authUser => {

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
  <React.Suspense fallback={<img src={placeholder} alt="loading"/>}>
  <Route path= '/' exact component = {Home} />
  <Route path= '/Wears' component = {Wears} />
  <Route path= '/Watches' component = {Watches} />
  <Route path= '/Bags' component = {Bags} />
  <Route path= '/Cart' component = {Cart} />
  <Route path= '/Details' exact component = {Details} />
  <Route path= '/Details/:id' component = {Details} />
  <Route path='/Login' component= {Login} />
  <Route path= '/register' component = {Register} />
  <Route path='/Checkout' component= {Checkout} />
  </React.Suspense>
  </Switch>
  <BackToTop />
    <Footer />
   </div>
   </Router>
  )

 
}
export default App;
