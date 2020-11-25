import React from 'react';
import './Home.scss';
import HomeHero from './HomeHero';
import HomeProduct from './HomeProduct';
import HomeFixed from './HomeFixed';
import './Home.scss';


const Home = () => {
  
    return(
    <div className="home-page">
   <HomeHero />
   <HomeProduct />
   <HomeFixed />
        </div> 

    )
}

export default Home;