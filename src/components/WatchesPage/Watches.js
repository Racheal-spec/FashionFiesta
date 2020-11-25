import React from 'react';
import Title from '../title';
import Product from '../Product/Product';
import './watches.scss';
import { watches } from '../../Data/watches';

const Watches = () => {
    return(
<div>
<section className="watches-herosection">
<div className="watches-wrapper">
<div className="row">
    <div className='col watches-bg'>

    </div>
      </div>
</div>
</section>

<section>
        <div className="watches-section">
        <Title name= 'Fiesta' title='Watches'/>
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

export default Watches;