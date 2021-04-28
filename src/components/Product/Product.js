import React, {useRef, useState, useEffect } from 'react';
import './product.scss';
import {Link} from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import lozad from 'lozad';

const Product = ({id, title, image, rating, price}) => {
  const[, dispatch] = useStateValue();
  const[added, setAdded] = useState(false);
  let disabled = useRef();
 
  const addToCart = () => {
    if(disabled.current){
      disabled.current.setAttribute('disabled', 'disabled');
  }
    dispatch({
      type:'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    setAdded(true);
} 

useEffect(()=> {
  const timer = setTimeout(()=> {
    setAdded(false)
  }, 1000)  
  return () => clearTimeout(timer)    
})

const observer = lozad(); 
observer.observe();

return(
  <>
<div className="card mx-2">
    <Link to={`Details/${id}`} className="product-link">
   <img
   data-src={image} 
   alt="product" 
   className="lozad"
   data-placeholder-background="grey"
   />
  <p className="product-title font-weight-bold">{title}</p>
  </Link>

  <div className="product-rating">
{Array(rating).fill().map((_, i) => (
  <div key={i}>
   <i className="fas fa-star"></i>
   </div>
 ))}
 </div>

 <div className="product-price">
  <p className="font-weight-bold"><small>NGN</small>{price}</p>
  </div>
  <button onClick={addToCart} ref={disabled}>Add to Cart</button>
</div>
{added && (
    <div className= "added">
    <h6>Item added to cart</h6>
    <div>
    </div>
  </div>
 )}
</>

)
 }

export default Product;