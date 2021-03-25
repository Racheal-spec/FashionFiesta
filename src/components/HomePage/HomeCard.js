import React from 'react';
import clothes from '../Img/fit-girl.jpg';
import watches from '../Img/watches.jpg';
import {Link} from 'react-router-dom';


const HomeCard = () => {


    return(
<div className = "home-card">
    <div className="wrapper">
        <Link to="/Wears" className="links" >
    <div className= "collection-card">
       <div className="card-header">
           <img src={clothes} alt='clothes' />
       </div>
       <div className="card-body">
           <h4>Best for Summer</h4>
           <p>Bling yourself with Flash classics that have been seen in the 
               pages of Vogue and Marie Claire.</p>
       </div>
    </div>
    </Link>
<Link to='/Watches' className="links">
    <div className= "collection-card">
       <div className="card-header">
           <img src={watches} alt='clothes' />
       </div>
       <div className="card-body">
           <h4>Fashion nistas</h4>
           <p>Bling yourself with Flash classics that have been seen in the 
               pages of Vogue and Marie Claire.</p>
       </div>
    </div>
</Link>

    </div>
</div>
    )
}

export default HomeCard;