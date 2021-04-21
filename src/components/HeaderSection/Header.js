import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import homelogo from '../Img/logo_3.png';
import navwears from '../Img/wears.jpg';
import navbags from '../Img/bags.jpg';
import navwatches from '../Img/watches.jpg';
import './Header.scss';
import { useStateValue } from '../Context/StateProvider';
import { auth } from '../Firebase';


const Header = () => {
    const[{carts, user }] = useStateValue();
    const[click, setClick] = useState(false);

    const closeMenu = () => {
      setClick(!click);
    }
    const handleClick = () => {
      setClick(!click);
     }

    const handleAuth = () => {
      if(user){
        auth.signOut();
      }
      setClick(!click);
    }

   useEffect(() => {
     handleClick();
   }, [])// eslint-disable-line react-hooks/exhaustive-deps
   
   return(
   <div>
<nav className='navs'>
 <div className = 'wrapper'>
<div className="logo-div">
<Link to='/'>
<img src= {homelogo} className='logo-img' alt='logo'/>
</Link>
</div>
{user? (<h6 className="name-h6">Hello, {user?.email}</h6>) : ('')}
<ul className={click ? "nav-ul" : "nav-ul active"}>
{user? (<h6>Hello, {user?.email}</h6>) : ('')}
<Link to='/' className='nav-links' onClick={closeMenu}>
        <li>HOME</li>
</Link>
    
  <div className="nav-links">
          <li>PRODUCTS
    <div className="mega-menu">
        <div className="content">
      <div className="row">
        <div className="text">
            <h5>WEARS</h5>
        <p>For a limited time, save on some of our best-selling
            oils. Our culinary pioneers have collected
             a wide spectrum of flavors.
        </p>
          </div>
      <ul className="mega-links">
        <Link to='/Wears' className='nav-links' onClick={closeMenu}>
        <li>
          <img src={navwears} alt='wears' />
        </li>
        </Link>
      </ul>
  </div>
     <div className="row">
          <div className="text">
            <h5>WATCHES</h5>
         <p>For a limited time, save on some of our best-selling
            oils. Our culinary pioneers have collected
             a wide spectrum of flavors.
         </p>
            </div>
     <ul className="mega-links">
        <Link to='/Watches' className='nav-links' onClick={closeMenu}>
        <li>
        <img src={navwatches} alt='watches' />
        </li>
        </Link>
    </ul>
 </div>
     <div className="row">
          <div className="text">
            <h5>BAGS</h5>
         <p>For a limited time, save on some of our best-selling
            oils. Our culinary pioneers have collected
             a wide spectrum of flavors.
         </p>
            </div>
      <ul className="mega-links">
        <Link to='/Bags' className='nav-links' onClick={closeMenu}>
        <li>
        <img src={navbags} alt='bags' />
        </li>
        </Link>

      </ul>
  </div>    
      </div>
    </div>
  </li>
</div> 

<Link to= {() =>!user && '/Login'}  className='nav-links' onClick={handleAuth}>
        <li>
          {user ? 'LOGOUT' : 'LOGIN'}
        </li>
</Link>  
  <Link to='/register' className='nav-links' onClick={closeMenu}>
        <li>REGISTER</li>
  </Link>
   <Link to='/Cart' className="nav-links" onClick={closeMenu}>
   <li><i className='fas fa-shopping-cart'></i>
    <span className="cart-number">{carts?.length}</span>
   </li>
   </Link>
</ul>
   
{/*wrapper div */}

   <Link to='/Cart' className="nav-icon">
   <i className='fas fa-shopping-cart'>
    <span className="cart-number">{carts?.length}</span>
    </i>
   </Link>

<div className= 'nav-icon' onClick={handleClick}>
     <i className= {click ? 'fas fa-bars' : 'fas fa-times'}/>
 </div>  
</div>
   </nav>
   </div>
    )
}

export default Header;