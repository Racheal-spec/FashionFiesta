import React, { useEffect } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/HeaderSection/Header';
import {auth} from './components/Firebase';
import { useStateValue } from './components/Context/StateProvider';
import BackToTop from './components/BackToTop';
import Footer from './components/FooterSection/Footer';
import placeholder from './components/Img/placeholder.png';
import Home from './components/HomePage/Home';
import Wears from './components/WearsPage/Wears';
import Watches from './components/WatchesPage/Watches';
import Bags from './components/BagsPage/Bags';
import Preloader from './Preloader';
const Cart = React.lazy(()=> import('./components/CartPage/Cart'))
const Details = React.lazy(()=> import('./components/DetailsPage/Details'))
const Login = React.lazy(()=> import('./components/Login/Login'))
const Register = React.lazy(()=> import('./components/Register/Register'))
const Checkout = React.lazy(()=> import('./components/Checkout/Checkout'))

const App = () => {

const [{loading}, dispatch] = useStateValue(); 
//const[isLoading, setIsloading] = useState(true);

useEffect(()=> {
  if(loading === true) {
    <Preloader />
  } else {
    dispatch({
      type: 'LOAD_USERS',
      loading: false
    })
  }
},  [loading, dispatch]) 

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
<>

 <Router>
  <div className ='App'>
   <Header />
   <Switch>
<Route path= '/' exact component = {Home} />
<Route path= '/Wears' component = {Wears} />
<Route path= '/Watches' component = {Watches} />
<Route path= '/Bags' component = {Bags} />
<React.Suspense fallback={<img src={placeholder} alt="loading"/>}>
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
   </>
  )

 
}
export default App;


