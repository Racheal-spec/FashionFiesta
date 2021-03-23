import React from 'react';
import Product from '../Product/Product';
import { useStateValue } from '../Context/StateProvider';
import Title from '../title';
import {Link} from 'react-router-dom';

const HomeMagic = () => {
    const[{homes3}] = useStateValue(); 

    return(
        <div>
        <section>
        <div className="product-section">
        <div className="product-slide">
        <div className="product-magic">
        <Title name= 'Customer' title='Favourites' />
        <p>Shop pure ingredients—the highest quality we could find on Earth,
             sourced where they grow best.
             </p>
             <Link to='/wears' className="magic-link">
             Shop product now
             </Link>
        </div>
        <div className="container product-cards my-5">   
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
        </div>
        </section>
      </div>   
    )
}

export default HomeMagic;