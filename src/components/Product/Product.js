import React from 'react';
import './product.scss';
import {Link} from 'react-router-dom';
//import ATM from '../Img/Atm-card.jpg';
import { useStateValue } from '../Context/StateProvider';

 
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

/*
const addDefault = (e) => {
   e.target.src = {ATM};
}
*/
return(
  <React.Fragment>
<div className="card mx-2">
    <Link to={`Details/${id}`} className="product-link">
    <img src={image} alt="product" className="product-img"/>
  
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
  <p className="font-weight-bold"><small>$</small>{price}</p>
  </div>
  <button onClick={addToCart}>Add to Cart</button>
</div>
</React.Fragment>
)
 }

export default Product;