import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import CartProduct from '../CartPage/CartProduct';
import { useStateValue } from '../Context/StateProvider';
import {getTotal} from '../Context/Reducer';
import CurrencyFormat from 'react-currency-format';
import {usePaystackPayment} from 'react-paystack';
import './Checkout.scss';
import {auth} from '../Firebase';

const Checkout = () => {
const[{carts, user}] = useStateValue();

const[email, setEmail] = useState(window.localStorage.getItem('emailForSignIn') || '');
const[emailsent, setEmailSent] = useState(false);

const config = {
  reference: (new Date()).getTime(),
  email: user?.email || email,
  amount: getTotal(carts) * 100,
  publicKey: "pk_test_5a085cab5af1332dc3d285a203b1746417b1b88f"
}

//Message on unsuccessful transaction
const onSuccess = () => {
   alert('Transaction successful----Thank you for purchasing fashionfiesta item');
} 

const initialize = usePaystackPayment(config);

var actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://fashionfiesta-a4172.web.app/Checkout',
    handleCodeInApp: true,
    dynamicLinkDomain: 'emailconfirmation123.page.link'
  };

 const sendEmail = (e) => {
    e.preventDefault();
    auth.sendSignInLinkToEmail(email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem('emailForSignIn', email);
    
      setEmailSent(true);
    })
    .catch((error) => {
      console.log(error.message);
    });
 } 

 useEffect(()=> {
  setEmail("");
  //save item in local storage
  localStorage.setItem('saveData', JSON.stringify(carts));

  if(auth.isSignInWithEmailLink(window.location.href)){
    let email = window.localStorage.getItem('emailForSignIn');
 if(!email) {
     email = window.prompt('please provide the appropriate email for confirmation');
 }
auth.signInWithEmailLink(email, window.location.href)
.then(()=> {
  window.localStorage.removeItem('emailForSignIn');
  const localData = localStorage.getItem(carts);
  return localData ? JSON.parse(localData) : [];
})
.catch((error) => {
  console.log(error)
  }); 
  }

}, [carts])


    return(
   <div className="checkout-page">
    <div className="checkout">
        {/*payment address*/}
        <div className="check-title">
            {carts?.length > 0 ? (
            <h5>Woohoooo!!!! You've checked out ({carts?.length}) items</h5>
            ) : (
                <h5>You haven't checkout any item</h5>
            )}
          
        </div>
        <div className="payment-address">
          <div className="checkout-title">
          <h5>Contact Information </h5>
          </div>
        <div className="address">
            <p>Email: {user || email ? user?.email : "You have not provided your email"}</p>
            <p>Address: 124AD DoubleCross RD, Lagos Nigeria</p>
            <p>Mobile No: 00070546784</p>
        </div>
        </div>

        {/*Order Summary*/}
     <div className="order-summary">
         {carts?.length >  0 ? (   
      <div className="checkout-items">
        <div className="checkout-title">
           <h5>Order Summary</h5>
       </div>  
      {carts.map((item) => (
        <div key={item.id}>
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
         ) : ("")
         }
     </div>
{/*payment method*/}
<div className="checkout-total">
        <div className="checkout-title">
          <h5>Payment Method</h5>
          </div>
       <div className="checkout-details">
         <p>We need your email to process your payment.
            Kindly provide us with your email and then proceed to checkout</p>
        <form>
         <label>Email</label>
         <input 
         type="text" 
         className="card-input" 
         placeholder="Your email address"
         value={email}
         onChange={(e)=> setEmail(e.target.value) }
         >
        </input> 
        <button className="pay-btn" onClick={sendEmail} type="submit" >Submit</button>    
        </form> 
        <div className="confirmlink">
          {emailsent && (
            <h5>A confirmation link has been sent to your email</h5>
          )}
        </div>
        <div className="link-div">
            <p>Already have an account? <Link to='/login' className="login-here">Login here</Link></p>
        </div>
        <CurrencyFormat
          renderText={(value) => (
        <>
         <p className="total">Your subtotal for ({carts.length}) item is  
         <strong> {value}</strong></p>
         
        </>
       )}
        decimalScale={2}
        value={getTotal(carts)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={"$"}
    />
        <button className="pay-btn" type="submit" onClick={() => initialize(onSuccess)}>Pay with Paystack</button>  
        </div>  
        </div>
       
    </div>
   </div>
    )
}

export default Checkout;