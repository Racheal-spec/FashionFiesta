import React from 'react';
import Product from '../Product/Product';
import { useStateValue } from '../Context/StateProvider';

const WatchProduct = () => {
const [{watches}] = useStateValue();
    return(
<div>

<section>
        <div className="watches-section">
        <h3>Fiesta <b>Watches</b></h3>
            <div className="container watches-card my-5">
   {watches.map((item) => (
        <div className="watch-card" key={item.id}>
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

export default WatchProduct;