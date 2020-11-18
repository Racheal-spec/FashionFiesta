import React from 'react';
import './product.scss';
import {Link} from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
 
const Product = ({id, title, image, rating, price}) => {
  const[{carts}, dispatch] = useStateValue();

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
  };
return(
<div className="card shadow-lg mx-2">
<Link to='/Details'>
  <img src={image} alt="product" className="product-img"/>
  <p className="product-title font-weight-bold">{title}</p>
  </Link>
 <div className="product-rating">
 {Array(rating).fill().map(() => (
   <i class="fas fa-star"></i>
 ))}
 </div>
  <div className="product-price">
  <p className="font-weight-bold"><small>$</small>{price}</p>
  </div>
  <button onClick={addToCart}>Add to Cart</button>
</div>

)

}

export default Product;