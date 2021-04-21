import React from 'react';
import './product.scss';
import {Link} from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import placeholder from '../Img/placeholder.png';
 
const Product = ({id, title, image, rating, price}) => {
  const[, dispatch] = useStateValue();
 
  const addToCart = () => {
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
   
} 

if(!image) {
  return <h1>Loading...</h1>
}

return(
  <>
<div className="card mx-2">
    <Link to={`Details/${id}`} className="product-link">
   <LazyLoadImage 
   src={image} 
   alt="product" 
   className="product-img"
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
  <button onClick={addToCart}>Add to Cart</button>
</div>
</>

)
 }

export default Product;