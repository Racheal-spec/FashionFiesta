
import React from 'react';
import {Link} from 'react-router-dom';
import './CSS/Nav.css';
import homelogo from '../Img/logo_3.png';

const Nav = () => {
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
<Link to='/Cart'>
    <li><i className='fas fa-shopping-cart'></i></li>
</Link>
</ul>
</div>

<div className = 'secondnav'>
     <ul>
        <Link to='/'>
        <li>Home</li>
        </Link>
        <Link to='/Wears'>
        <li>Product</li>
        </Link>
        <Link to='/FiestaMakeup'>
        <li>Fashion-Fiesta Makeup</li>
        </Link>
        <Link to='/Skincare'>
        <li>Skincare</li>
        </Link>
     </ul>
 </div>
   </nav>
    )
}


export default Nav;