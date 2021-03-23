import React from 'react';
import './Home.scss';
import HomeHero from './HomeHero';
import HomeProduct from './HomeProduct';
import HomeFixed from './HomeFixed';
import HomeProduct2 from './HomeProduct2';
import HomeMagic from './HomeMagic';


const Home = () => {
  
    return(
    <div className="home-page">
   <HomeHero  />
   <HomeMagic />
   <HomeProduct/>
   <HomeFixed />
   <HomeProduct2 />
        </div> 

    )
}

export default Home;