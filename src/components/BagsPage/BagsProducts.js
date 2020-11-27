import React from 'react';
import Title from '../title';
import Product from '../Product/Product';
import { bags } from '../../Data/bags';

const BagsProducts = () => {

    return(
<div>
<section>
<div className="bags-section">
<Title name= 'Fiesta' title='Bags'/> 
    <div className="container bags-card my-5">       
{bags.map((item) => (
<div className="card" key={item.id}>
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
</div>
    )
}

export default BagsProducts;
