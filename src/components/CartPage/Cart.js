import React from 'react';
import './Cart.scss';
import {useHistory} from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import CartProduct from './CartProduct';
import cart from '../Img/empty-cart.svg';
import CurrencyFormat from 'react-currency-format';
import {getTotal} from '../Context/Reducer';

const Cart = () => {
const[{carts}] = useStateValue();

let history = useHistory();
const shopHandler = () => {
   history.push('/');
}

const checkoutHandler = () => {
    history.push('/checkout');
}
   return(
<div className="checkout">
 <div className="cart-top">
<div className='cart-h2'>
    {carts === 0 ? (
        <h2>Your Shopping Cart is Empty</h2>
    ) : (
        <h2>Your Shopping Cart</h2>
    )}
</div>
<div className="subtotal">
    <CurrencyFormat
    renderText={(value) => (
        <>
          <p>Your cart contains <span>({carts.length}) items</span></p>
          <p>Your subtotal is <strong>{value}</strong></p>
         
        </>
    )}
        decimalScale={2}
        value={getTotal(carts)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={"$"}
    />
      <button className="checkout-btn" onClick={checkoutHandler}>Proceed to Checkout</button>
      <button className="shopmore-btn" onClick={shopHandler}>Continue Shopping</button>     
          
        </div>
        </div>         
<div className="cart-items">    
{carts?.length === 0 ? (
<div>
    <img src={cart} alt="shopping cart" />
</div>
) : (
   
    <div>
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
</div>    
    );
}

export default Cart;