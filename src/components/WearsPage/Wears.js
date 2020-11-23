import React from 'react';
import Title from '../title';
import Product from '../Product/Product';
import './Wears.scss';
import { allData } from '../Data';
import { useStateValue } from '../Context/StateProvider';


const Wears = () => {
    const[Wears, setWears] = useStateValue(allData);
    return(
        <div>
<section className="wears-section">
<div className="wears-wrapper">
<div className="row">
    <div className='col wears-bg'></div>
      </div>
</div>
</section>

<section>
        <div className="Wears-section">
        <Title name= 'Fiesta' title='Wears'/>
            <div className="container">
    {allData.Wears.map(item => (
        <div className="wears-card" >
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

export default Wears;