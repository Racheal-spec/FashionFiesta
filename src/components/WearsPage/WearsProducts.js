import React from 'react';
import Title from '../title';
import Product from '../Product/Product';
import { useStateValue } from '../Context/StateProvider';


const WearsProducts = () => {
  
  const [{wears}] = useStateValue();

    return(
      <div>
      <section>
              <div className="wears-section">
              <Title name= 'Fiesta' title='Wears'/>
                  <div className="container wears-card my-5">
          {wears.map((item)=> {
              let { id, title, price, rating, image} = item;
      
           return (
              <div key={id} className="wearspage-card" >
              <Product
              id = {id}
              title= {title}
              image= {image}
              rating= {rating}
              price= {price}
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

export default WearsProducts;