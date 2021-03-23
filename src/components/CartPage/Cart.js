import React from 'react';
import './Cart.scss';
import { useStateValue } from '../Context/StateProvider';
import CartProduct from './CartProduct';
import cart from '../Img/empty-cart.svg';

const Cart = () => {
const[{ carts }] = useStateValue();
   
   return(
<div className="checkout">
{carts?.length === 0 ? (
<div>
    <h2>Your Shopping Cart is Empty</h2>
    <img src={cart} alt="shopping cart" />
</div>
) : (
    <div>
        <h2>Your Shopping Cart</h2>
    
        {carts.map((item) => (
            <div className="cart-div" key={item.id}>
          <CartProduct 
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          
          />  
          </div> 
      ))}
        </div>
)}
</div>
    );
}

export default Cart;