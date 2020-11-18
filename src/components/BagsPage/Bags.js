import React from 'react';
import Title from '../title';
import Product from '../Product/Product';

const Bags = () => {
    return(
        <section>
        <div className="py-5">
            <div className="container">
                <Title name= 'Fiesta' title='Bags'/>
                 {/*first product row*/} 
        <div className="row my-5">  
    <div className="col-12 col-lg-3 card">
    <Product
    id="123414"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={220}
    rating={5}
    image= "https://m.media-amazon.com/images/I/711dnz9Z24L._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123415"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={250}
    rating={5}
    image= "https://m.media-amazon.com/images/I/81zLvLeQoTL._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123416"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={360}
    rating={5}
    image= "https://m.media-amazon.com/images/I/61pR+lFnNJL._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123417"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={105}
    rating={4}
    image= "https://m.media-amazon.com/images/I/810IHVVYfKL._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
        </div>
        {/*second product row*/} 
<div className="row my-5"> 
    <div className="col-12 col-lg-3 card">
    <Product
    id="123418"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={240}
    rating={5}
    image= "https://m.media-amazon.com/images/I/8168PskB1xL._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123419"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={400}
    rating={5}
    image= "https://m.media-amazon.com/images/I/61g9z2pYf4L._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123420"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={229}
    rating={5}
    image= "https://m.media-amazon.com/images/I/61TSqB-+QhL._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123421"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={199}
    rating={4}
    image= "https://m.media-amazon.com/images/I/91COS16n8SL._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
        </div>      
    {/*third product row*/} 
<div className="row my-5"> 
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
    id="123423"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={250}
    rating={5}
    image= "https://m.media-amazon.com/images/I/91vU5jgpvZL._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123424"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={129}
    rating={4}
    image= "https://m.media-amazon.com/images/I/81m6hQfCm6L._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123425"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={99}
    rating={5}
    image= "https://m.media-amazon.com/images/I/81X9oF-ydCL._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
        </div>             
        </div>
        </div>
        </section>
    )
}

export default Bags;