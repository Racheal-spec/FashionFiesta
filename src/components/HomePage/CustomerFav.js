import React from 'react';
import Product from '../Product/Product';
import { useStateValue } from '../Context/StateProvider';
import {Link} from 'react-router-dom';

const CustomerFav = () => {
    const[{homes3}] = useStateValue(); 

    return(
        <div>
        <section className="product-section">
      <div className="fav-product">
        <div className="product-text">
        <h3>Popular <b>Products</b></h3>
        <p>Shop pure ingredients—the highest quality we could find on Earth,
             sourced where they grow best.
             </p>
             <Link to='/wears' className="magic-link">
             Shop product now
             </Link>
        </div>
        <div className="container product-cards">   
        {homes3.map((item) => ( 
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

export default CustomerFav;