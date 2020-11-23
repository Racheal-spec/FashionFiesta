import React from 'react';
import Title from '../title';
import Product from '../Product/Product';
import './Wears.scss';
import { useStateValue } from '../Context/StateProvider';


const Wears = () => {
    const[{wears}, dispatch] = useStateValue();
    return(
        <div>
<section className="wears-herosection">
<div className="wears-wrapper">
<div className="row">
    <div className='col wears-bg'></div>
      </div>
</div>
</section>

<section>
        <div className="wears-section">
        <Title name= 'Fiesta' title='Wears'/>
            <div className="container wears-card my-5">
    {wears.map((item, index )=> {
        let { id, title, price, rating, image} = item;

     return (
        <div key={index} className="wearspage-card" >
        <Product
        id = {id}
        title= {title}
        image= {image}
        rating= {rating}
        price= {price}
        //info= {info}
          />
           </div>
     )

     })}
   
</div>

        </div>             
        </section>
        </div>
    )
}

export default Wears;