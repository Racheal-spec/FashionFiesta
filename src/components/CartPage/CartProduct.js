import React from 'react';
import { useStateValue } from '../Context/StateProvider';
import './Cart.scss';
import {Link} from 'react-router-dom';


const CartProduct = ({id, title, image, price, rating}) => {
 const [carts, dispatch] = useStateValue();
  console.log(carts);

const removeFromCart = () => {
dispatch({
    type: "REMOVE_FROM_CART",
    id: id
});
  }
  
  return(
<div className="cart-product">
   <div className="cart-img">
   <img src={image} alt="" />
   </div>

<div className="cart-info">
    <p className="cartproduct-title">{title}</p>
    <p className="cartproduct-price">
        <small>$</small>
    <strong>{price}</strong>
    </p>  
<div className="product-rating">
{Array(rating).fill().map((_, i) => (
  <div key={i}>
  <i className="fas fa-star"></i>
</div>
  ))}
  </div>
  <Link to={`Details/${id}`}>
  <p className="check-details">Check Product details here</p>
  </Link>
  <div className="button-div">
<button onClick={removeFromCart}>Remove from Cart</button>
</div>
</div>{/*end of cart info div*/}
</div>
    )
}

export default CartProduct;