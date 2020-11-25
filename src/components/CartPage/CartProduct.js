import React from 'react';
import { useStateValue } from '../Context/StateProvider';
import './Cart.scss';


const CartProduct = ({id, title, image, price, rating}) => {
 const [dispatch] = useStateValue();
    
const removeFromCart = () => {
dispatch({
    type: "REMOVE_FROM_BASKET",
    id: id,
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
 {Array(rating).fill().map(() => (
   <i class="fas fa-star"></i>
 ))}
  </div>
  <div className="button-div">
<button onClick={removeFromCart}>Remove from Cart</button>
</div>
</div>{/*end of cart info div*/}
</div>
    )
}

export default CartProduct;