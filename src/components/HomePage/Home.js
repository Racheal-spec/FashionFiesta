import React from 'react';
import './Home.scss';
import HomeHero from './HomeHero';
import HomeProduct from './HomeProduct';
import HomeFixed from './HomeFixed';
import HomeProduct2 from './HomeProduct2';
import HomeMagic from './HomeMagic';
import HomeCard from './HomeCard';


const Home = () => {
  
    return(
    <div className="home-page">
   <HomeHero  />
   <HomeMagic />
   <HomeCard />
   <HomeProduct/>
   <HomeFixed />
   <HomeProduct2 />
        </div> 

    )
}

export default Home;