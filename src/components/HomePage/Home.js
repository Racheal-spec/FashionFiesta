
import React from 'react';
import Title from '../title';
import './Home.scss';
import womanShopping from '../Img/woman-shopping.jpg';
import Product from '../Product/Product';


const Home = () => {
   
    return(
        <div>
   <section className="hero-section">
   <div className="hero-wrapper">
       <div className="row home-bg">
       <div className='col-lg-6'>
    <img src={womanShopping} className="home-img-bg" alt="white-girl" />
    </div>
    <div className='col-lg-6 hero-text'>
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
<div className="">
            <div className="container">
                <Title name= 'Featured' title='Products' />
        <div className="row my-5">  
    <div className="col-12 col-lg-3 card">
    <Product
    id="123411"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={11.96}
    rating={5}
    image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/clothingv2._V519740116_.jpg"
    />
   </div>
    <div className="col-12 col-lg-3 card">
    <Product
    id="123422"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={140}
    rating={4}
    image= "https://m.media-amazon.com/images/I/71qBg08NjiL._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
    <div className="col-12 col-lg-3 card">
    <Product
    id="123413"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={12.5}
    rating={5}
    image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2B6359B8D6DD842B._V531821792_.jpg"
    />
        </div>
    <div className="col-12 col-lg-3 card">
    <Product
    id="123409"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={199}
    rating={5}
    image= "https://m.media-amazon.com/images/I/71o-aw5MwfL._AC_UL480_FMwebp_QL65_.jpg"
    />
        </div>
   </div>
   <div className="row my-5">
   <div className="col-12 col-lg-6 card">
    <Product
    id="123402"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={33}
    rating={5}
    image= "https://m.media-amazon.com/images/I/81xCpb+RC1L._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
<div className="col-12 col-lg-6 card">
<Product
    id="123419"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={350}
    rating={4}
    image="https://m.media-amazon.com/images/I/81zLvLeQoTL._AC_UL480_FMwebp_QL65_.jpg"
    />
        </div> 
</div>     
        <div className="row my-5">
        <div className="col-12 col-lg-3 card">
        <Product
    id="123306"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={229}
    rating={5}
    image= "https://cdn11.bigcommerce.com/s-3y69bgeked/images/stencil/550x705/products/21632/133515/D254E32F-E36E-479E-86D3-185E48A78288__82279.1605370560.jpg?c=2"
    />
        </div>   
        <div className="col-12 col-lg-3 card">
    <Product
    id="123419"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={350}
    rating={4}
    image="https://m.media-amazon.com/images/I/81zLvLeQoTL._AC_UL480_FMwebp_QL65_.jpg"
    />
        </div> 
        <div className="col-12 col-lg-3 card">
        <Product
    id="123309"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={450}
    rating={5}
    image= "https://cdn11.bigcommerce.com/s-3y69bgeked/images/stencil/550x705/products/21649/133584/A211A6B0-A018-477D-A6F5-C7FAF8647AF2__58902.1605548418.jpg?c=2"
    />
        </div>       
    <div className="col-12 col-lg-3 card">
    <Product
    id="123420"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={50}
    rating={5}
    image="https://m.media-amazon.com/images/I/81QJ1TiYhGL._AC_UL480_FMwebp_QL65_.jpg"
    />
        </div> 
        </div>
        <div className="row">
        <div className="col-12 col-lg-6 card">
    <Product
    id="123421"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={580}
    rating={5}
    image="https://m.media-amazon.com/images/I/61dwYndNEbL._AC_UL480_FMwebp_QL65_.jpg"
    />
        </div>                    
        <div className="col-12 col-lg-6 card">
    <Product
    id="123422"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={450}
    rating={5}
    image="https://m.media-amazon.com/images/I/61g9z2pYf4L._AC_UL480_FMwebp_QL65_.jpg"
    />
        </div> 
            </div>
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