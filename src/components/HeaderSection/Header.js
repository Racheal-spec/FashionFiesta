import React from 'react';
import {Link} from 'react-router-dom';
import homelogo from '../Img/logo_3.png';
import './Header.scss';
import { useStateValue } from '../Context/StateProvider';


const Header = () => {
    const[{carts }] = useStateValue();
    console.log(carts); 


   return(
<nav className='navs'>
 <div className = 'firstnav'>
<Link to='/'>
<img src= {homelogo} className='logo-img' alt='logo'/>
</Link>
<ul className="ml-auto">
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
   <div className="cart-icon">
   <Link to='/Cart'>
   <li><i className='fas fa-shopping-cart'></i>
    <span className="cart-number">{carts?.length}</span>
   </li>
   </Link>
   </div>
</ul>
</div>

   </nav>
    )
}

export default Header;