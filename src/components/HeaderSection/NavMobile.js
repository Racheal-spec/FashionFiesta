
import React from 'react';
import {Link} from 'react-router-dom';
import homelogo from '../Img/logo_3.png';
import { useStateValue } from '../Context/StateProvider';


const Nav = () => {
    const[{carts }] = useStateValue();
    console.log(carts); 

   
   return(
<nav className='navs '>
 <div className = 'firstnav'>
<Link to='/'>
<img src= {homelogo} className='logo-img' alt='logo'/>
</Link>
<ul className="ml-auto">

   <div className="cart-icon">
   <Link to='/Cart'>
   <li><i className='fas fa-shopping-cart'></i>
    <span className="cart-number">{carts?.length}</span>
   </li>
   </Link>
   </div>
</ul>
 
</div>

<div className = 'secondnav'>
     <ul>
     <form className="second-li">
    <input type='search' className='searchList'></input>
    <button className='navSearch' placeholder='Search an item'>Search</button>
    </form>
        <Link to='/' className='nav-links'>
        <li>Home</li>
        </Link>
        <Link to='/Wears' className='nav-links'>
        <li>FiestaWears</li>
        </Link>
        <Link to='/Watches' className='nav-links'>
        <li>FiestaWatches</li>
        </Link>
        <Link to='/Bags' className='nav-links'>
        <li>FiestaBags</li>
        </Link>
        <Link to='/Register'className="second-li">
        <li>Register</li>
        </Link>
       <Link to='/login' className="second-li">
       <li>Login</li>
       </Link>
           

     </ul>
 
 </div>

   </nav>
    )
}


export default Nav;