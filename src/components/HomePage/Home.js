import React from 'react';
import './Home.scss';
import HomeHero from './HomeHero';
import HomeProduct from './HomeProduct';
import HomeFixed from './HomeFixed';
import HomeProduct2 from './HomeProduct2';
import HomeMagic from './HomeMagic';
import HomeCard from './HomeCard';
import Newsletter from './Newsletter';


const Home = () => {
  
    return(
    <div className="home-page">
   <HomeHero  />
   
   <HomeProduct/>
   <HomeCard />
   <HomeMagic />
   <HomeFixed />
   <HomeProduct2 />
   <Newsletter />
        </div> 

    )
}

export default Home;