
import React from 'react';
import {Link} from 'react-router-dom';
import './CSS/Nav.css';
import homelogo from '../Img/logo_3.png';
import { useStateValue } from '../Context/StateProvider';


const Nav = () => {
const[{ carts }] = useStateValue();
console.log(carts);
    return(
<nav className='navs navbar-expand-sm'>
 <div className = 'firstnav'>
<Link to='/'>
<img src= {homelogo} className='logo-img' alt='logo'/>
</Link>
<ul className="ml-auto">
<form>
    <input type='search' className='searchList'></input>
    <button className='navSearch' placeholder='Search an item'>Search</button>
</form>
<Link to='/Register'>
    <li>Register</li>
</Link>
<Link to='/login'>
    <li>Login</li>
</Link>

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
        <Link to='/'>
        <li>Home</li>
        </Link>
        <Link to='/Wears'>
        <li>FiestaWears</li>
        </Link>
        <Link to='/Watches'>
        <li>FiestaWatches</li>
        </Link>
        <Link to='/Bags'>
        <li>FiestaBags</li>
        </Link>
     </ul>
 </div>
   </nav>
    )
}


export default Nav;