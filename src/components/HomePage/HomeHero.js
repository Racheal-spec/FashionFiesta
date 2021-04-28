import React from 'react';
import {useHistory} from 'react-router-dom';
import surpriseGirl from '../Img/surprise-girl.png';

const HomeHero = () => {
let history = useHistory();

const handleWears = () =>  {
  history.push("/wears");
}

    return(
<div>
<section className="hero-section">

<div className="hero-slider">
<div className="col-sm-12 col-md-6 col-lg-6 hero-img">
 <img className = 'd-block' src={surpriseGirl} alt="FF" />
 </div>
 <div className='col-sm-12 col-md-6 col-lg-6 hero-text'>
    <h2>50% deal on all sale this summer!</h2>
    <p>Sed voluptatem accusantium ncncd gigoood cobbn teegh eaque ipsa Sed voluptatem accusantium doloremque eaque ipsa
        Sed voluptatem accusantium doloremque eaque ipsa
    </p>
    <button type='button' className="hero-button" onClick={handleWears}>Shop Now</button>
    </div>     
  </div>

</section>
</div>
    )
}

export default HomeHero;