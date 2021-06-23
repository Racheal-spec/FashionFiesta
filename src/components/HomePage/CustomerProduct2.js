import React from 'react';
import Product from '../Product/Product';
import { useStateValue } from '../Context/StateProvider';

const HomeProduct2 = () => {
    const[{homes2}] = useStateValue(); 

    return(
        <div>
        <section className="product-section">
       <h3>Customer <b>Favourite</b></h3>
        <div className="container product-cards">   
        {homes2.map((item) => ( 
                <div className="home-card" key= {item.id}>
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

export default HomeProduct2;