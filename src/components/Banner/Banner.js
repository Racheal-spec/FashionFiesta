import React, { useEffect, useState } from 'react';
import './Banner.scss';


const Banner = () => {
const[click, setClick] = useState(false);

const btnClick = () => {
    setClick(!click);
}

useEffect(()=> {
    btnClick();
}, [])//eslint-disable-line react-hooks/exhaustive-deps


    return(
       
        <div className="banner">
             <div className={click? "banner-note" : "cancel"}>
                <h1>Free FashionFiesta wear and watch after  $100 worth of purchase</h1>
                <div className="cancel-btn">
              <h5 onClick={btnClick}>X</h5>
            </div> 
             </div>
           
        </div>
    )
}

export default Banner;

