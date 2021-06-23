import React from 'react';
import './Home.scss';
import HomeHero from './HomeHero';
import HomeProduct from './HomeProduct';
import HomeOverlay from './HomeOverlay';
import HomeProduct2 from './CustomerProduct2';
import HomeCard from './HomeCard';
import Newsletter from './Newsletter';
import CustomerFav from './CustomerFav';


const Home = () => {
  
    return(
    <div className="home-page">
   <HomeHero  />
   <HomeProduct/>
   <HomeCard />
   <CustomerFav />
   <HomeOverlay />
   <HomeProduct2 />
   <Newsletter />
        </div> 

    )
}

export default Home;