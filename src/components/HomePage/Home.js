
import React from 'react';
import Title from '../title';
import './CSS/Home.scss';
import womanShopping from '../Img/woman-shopping.jpg';
import Product from '../Product/Product';


const Home = () => {
   

    return(
        <div>
   <section className="hero-section">
   <div className="hero-wrapper">
       <div className="row">
       <div className='col home-bg'>
    <img src={womanShopping} className="home-img-bg" alt="white-girl" />
    </div>
       </div>
   </div>
</section>
<section>
        <div className="py-5">
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
    id="123412"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={15}
    rating={5}
    image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/contemporaryv2._V519740116_.jpg"
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
    id="123414"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={16}
    rating={5}
    image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2B65DBD428E3A11C._V531821795_.jpg"
    />
        </div>
   </div>
   <div className="row my-5">
<div className="col-12 col-lg-6 card">
   <Product
    id="123415"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={11.96}
    rating={5}
    image="https://m.media-amazon.com/images/I/811ATBGES0L._AC_UL480_FMwebp_QL65_.jpg"
    />
    </div>
    <div className="col-12 col-lg-6 card">
    <Product
    id="123416"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={11.96}
    rating={5}
    image="https://m.media-amazon.com/images/I/81zc8i+8qfL._AC_UL480_FMwebp_QL65_.jpg"
    />
        </div>   
</div>     
        <div className="row my-5">
        <div className="col-12 col-lg-3 card">
    <Product
    id="123417"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={200}
    rating={5}
    image="https://m.media-amazon.com/images/I/81zc8i+8qfL._AC_UL480_FMwebp_QL65_.https://m.media-amazon.com/images/I/812mwzWdLsL._AC_UL480_FMwebp_QL65_.jpg"
    />
        </div>   
        <div className="col-12 col-lg-3 card">
    <Product
    id="123418"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={182}
    rating={5}
    image="https://m.media-amazon.com/images/I/71c53JL3YkL._AC_UL480_FMwebp_QL65_.jpg"
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
    </div>

    )
}

export default Home;