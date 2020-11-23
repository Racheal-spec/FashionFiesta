
import React from 'react';
import Title from '../title';
import './Home.scss';
import womanShopping from '../Img/woman-shopping.jpg';
import Product from '../Product/Product';
import { useStateValue } from '../Context/StateProvider';
import { allData } from '../Data';


const Home = () => {
    const[homeData, setHomeData] = useStateValue(allData); 
    return(
        <div>
   <section className="hero-section">
   <div className="hero-wrapper">
       <div className="row home-bg">
       <div className='col-lg-6 col-12'>
    <img src={womanShopping} className="home-img-bg" alt="white-girl" />
    </div>
    <div className='col-lg-6 col-12 hero-text'>
        <h2>Your One Stop Shop!</h2>
        <p>Sed voluptatem accusantium doloremque eaque ipsa Sed voluptatem accusantium doloremque eaque ipsa
        Sed voluptatem accusantium doloremque eaque ipsa
        </p>
        <button className="main-button">Shop here</button>
    </div>
       </div>
   </div>
</section>
<section>
<div className="product-section">
<Title name= 'Featured' title='Products' />
    <div className="container product-cards my-5">   
    {allData.Home.map(item => ( 
     <div className="home-card">
         <Product
          id = {item.id}
         title= {item.title}
         image= {item.image}
         rating= {item.rating}
         price= {item.price}
         />
     </div> 
  
    ))}
    
</div>
</div>
</section>

<section className="fixed-section">
<div className="fixed-bg">
<div className="row">
<div className='col img-bg'>
<div className='overlay'>
  <h2>Just at the comfort of your home, you can shop with Fashion Fiesta</h2>
  <button className="main-button">Explore</button>
  </div>
  </div>
      </div>
    
</div>
</section>
    </div>

    )
}

export default Home;