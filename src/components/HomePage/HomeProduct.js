import React from 'react';
import Product from '../Product/Product';
import { useStateValue } from '../Context/StateProvider';
import Title from '../title';

const HomeProduct = () => {
    const[{homes}] = useStateValue(); 

    return(
        <div>
        <section className="product-section">
        <Title name= 'Featured' title='Products' />
        <div className="container product-cards">   
        {homes.map((item) => ( 
                <div className="home-card" key= {item.id}>
                     <span>New</span>
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
        </section>
      </div>   
    )
}

export default HomeProduct;