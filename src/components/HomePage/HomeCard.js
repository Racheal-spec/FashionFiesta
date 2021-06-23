import React from 'react';
import clothes from '../Img/fit-girl.jpg';
import watches from '../Img/watches.jpg';
import {Link} from 'react-router-dom';
import bags from '../Img/bags.jpg';


const HomeCard = () => {


    return(
<div className = "home-card">
    <div className="card-wrapper">
    <Link to="/Wears" className="links" >
    <div className= "collection-card">
       <div className="card-header">
           <img src={clothes} alt='clothes' />
       </div>
       <div className="card-body">
           <h4>Best for Summer</h4>
           <p>Bling yourself with Flash classics that have been Claire.</p>
       </div>
    </div>
    </Link>
<Link to='/Watches' className="links">
    <div className= "collection-card">
       <div className="card-header">
           <img src={watches} alt='clothes' />
       </div>
       <div className="card-body">
           <h4>Dope Watches</h4>
           <p>Bling yourself with Flash 
               classics that have been Claire</p>
       </div>
    </div>
</Link>

<Link to='/Bags' className="links">
    <div className= "collection-card">
       <div className="card-header">
           <img src={bags} alt='clothes' />
       </div>
       <div className="card-body">
           <h4>Best Bags</h4>
           <p>Bling yourself with Flash classics
                that have been Claire.</p>
       </div>
    </div>
</Link>

    </div>
</div>
    )
}

export default HomeCard;