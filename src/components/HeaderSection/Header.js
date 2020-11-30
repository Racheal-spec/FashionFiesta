import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import homelogo from '../Img/logo_3.png';
import './Header.scss';
import { useStateValue } from '../Context/StateProvider';


const Header = () => {
    const[{carts }] = useStateValue();
    console.log(carts); 


    const[click, setClick] = useState(false);

    const closeMenu = () => {
      setClick(!click);
    }
    const handleClick = () => {
      setClick(!click);
     }
   useEffect(() =>{
     handleClick();
   }, [])// eslint-disable-line react-hooks/exhaustive-deps
   return(
<nav className='navs'>
 <div className = 'firstnav'>
 <div className= 'menu-icon-mobile' onClick={handleClick}>
     <i className= {click ? 'fas fa-bars': 'fas fa-times'}/>
 </div>
 <Link to='/'>
<img src= {homelogo} className='logo-img' alt='logo'/>
</Link>
<ul className="ml-auto" id={click? 'nav-menu active' : 'nav-menu'}>
<Link to='/' className='nav-links' onClick={closeMenu}>
        <li>Home</li>
        </Link>
        <Link to='/Wears' className='nav-links' onClick={closeMenu}>
        <li>FiestaWears</li>
        </Link>
        <Link to='/Watches' className='nav-links' onClick={closeMenu}>
        <li>FiestaWatches</li>
        </Link>
        <Link to='/Bags' className='nav-links' onClick={closeMenu}>
        <li>FiestaBags</li>
        </Link>
   <Link to='/Cart' className="cart-icon">
   <li><i className='fas fa-shopping-cart'></i>
    <span className="cart-number">{carts?.length}</span>
   </li>
   </Link>
</ul>

   <Link to='/Cart' className="cart-icon-mobile">
   <i className='fas fa-shopping-cart'></i>
    <span className="cart-number">{carts?.length}</span>
   </Link>

</div>

   </nav>
    )
}

export default Header;