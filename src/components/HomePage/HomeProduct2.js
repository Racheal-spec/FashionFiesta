import React from 'react';
import Product from '../Product/Product';
import { useStateValue } from '../Context/StateProvider';
import Title from '../title';

const HomeProduct2 = () => {
    const[{homes2}] = useStateValue(); 

    return(
        <div>
        <section>
        <div className="product-section">
        <Title name= 'Customer' title='Favourites' />
        <div className="container product-cards my-5">   
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
        </div>
        </section>
      </div>   
    )
}

export default HomeProduct2;