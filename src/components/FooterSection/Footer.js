import React from 'react';
import footerlogo from '../Img/logo_3.png';
import {Link} from 'react-router-dom';
import './footer.scss';


const Footer = () => {
    return(
<footer>
    <div className="footer-wrapper">
        <div className="row">

    {/*First footer column*/} 
            <div className="col-12 col-lg-3 col-md-6 first-footer">
<img src={footerlogo} alt="footer-logo" className="footer-logo" />
            </div>

    {/*Second footer column*/} 
<div className="col-12 col-lg-3 col-md-6 md-footer">
<ul>
<Link to='/Register'>
    <li>Register</li>
</Link>
<Link to='/login'>
    <li>Login</li>
</Link>
<Link to='/Cart'>
    <li>Check Cart</li>
</Link>
</ul>
</div> 

  {/*Third footer column*/}                      
 <div className="col-12 col-lg-3 col-md-6 third-footer">
<ul>
<Link to='/'>
    <li>Home</li>
</Link>
<Link to='/Wears'>
    <li>Wears</li>
</Link>
<Link to='/Watches'>
    <li>Watches</li>
</Link>
<Link to='/Bags'>
    <li>Bags</li>
</Link>
</ul>
</div>  

 {/*fourth footer column*/}  
<div className="col-12 col-lg-3 col-md-6 footer-form">
    <p>
    <strong>Get 20% discount </strong>
    of all goods you buy by subscribing to our mailing list. We promise to be all fun...
    </p>
 <form>
 <input type='email' className='footer-input'></input>
    <button className='footer-btn' placeholder='Enter your email'>Subscribe</button>
</form>   
</div>

        </div> {/*end of row div*/}         
    </div> {/*end of container div*/} 
<div className="copyright-div">
  <p>© 2020 FashionFiesta. All Rights Reserved.</p>
  </div>  
</footer>
    )
}

export default Footer;