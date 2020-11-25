import React, {useEffect ,useState } from 'react';
import {Link} from 'react-router-dom';
import homelogo from '../Img/logo_3.png';
import './Header.scss';
import { useStateValue } from '../Context/StateProvider';


const Header = () => {
    const[{carts }] = useStateValue();
    console.log(carts); 
 
//click function
const[click, setClick] = useState(false);

const closeMenu = () => setClick(false);

useEffect(() => {
    const handleClick = async () => {
        setClick(!click);      
     }

  handleClick();
}, [])


   
   return(
<nav className='navs'>
 <div className = 'firstnav'>
<Link to='/'>
<img src= {homelogo} className='logo-img' alt='logo'/>
</Link>
<ul className="ml-auto">
<form className="second-li">
    <input type='search' className='searchList'></input>
    <button className='navSearch' placeholder='Search an item'>Search</button>
    </form>
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
     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
        

     </ul>
      {/*menu icon div*/}

 {/*<div className= 'menu-icon' onClick={handleClick}>
     <i className= {click ? 'fas fa-bars': 'fas fa-times'}/>
   </div>*/}
   </div>

   </nav>
    )
}

export default Header;