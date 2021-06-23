import React from 'react';
import {useHistory} from 'react-router-dom';
//import surpriseGirl from '../Img/surprise-girl.png';

const HomeHero = () => {
let history = useHistory();

const handleWears = () =>  {
  history.push("/wears");
}

    return(
<div>
<section className="hero-section">

<div className="hero">
<div className="col-sm-12 col-md-6 col-lg-6 hero-left">
  <h1>PROMO SALE!!!</h1>
 </div>
 <div className='col-sm-12 col-md-6 col-lg-6 hero-right'>
    <h3>50% deal on all sale this summer!</h3>
    <p>Sed voluptatem accusantium ncncd gigoood cobbn teegh eaque ipsa
       Sed voluptatem accusantium doloremque
    </p>
    <button type='button' className="hero-button" onClick={handleWears}>Shop Now</button>
    </div>     
  </div>

</section>
</div>
    )
}

export default HomeHero;