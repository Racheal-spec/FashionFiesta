import React from 'react';
import './Cart.scss';
import { useStateValue } from '../Context/StateProvider';
import CartProduct from './CartProduct';

const Cart = () => {
const[{ carts }] = useStateValue();
   
   return(
<div className="checkout">
{carts?.length === 0 ? (
<div>
    <h2>Your Shopping Cart is Empty</h2>
</div>
) : (
    <div>
        <h2>Your Shopping Cart</h2>
        
        {carts.map((item) => (
          <CartProduct 
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          
          />   
      ))}
        </div>
)}
</div>
    );
}

export default Cart;