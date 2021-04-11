import React, { useState } from 'react';
import logo from '../Img/logo_3.png';
import './Login.scss';
import {Link, useHistory} from 'react-router-dom';
import { auth } from '../Firebase';

const Login = () => {

const[email, setEmail] = useState('');
const[password, setPassword] = useState('');    

let history = useHistory();

const loginHandler = (e) => {
    e.preventDefault();
   auth.signInWithEmailAndPassword(email, password)
   .then(auth => {
       history.push('/')
   })
   .catch(error => {
       alert(error.message)
   })
}

const createHandler = () => {
    history.push('/register');
}


    return(
    <section className="login">
    <div className="login-page">
    <h4> Login</h4>
    <div className= "login-card">
     <img src={logo} alt={logo} />
     <label>Email</label>
     <input type="email" className="login-input" placeholder="test@example.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
     <label>Password</label>
     <input type="email" className="login-input" value={password} onChange={(e) => setPassword(e.target.value)}></input>
     <Link to='/' className="forgot-password" >I've Forgotten my Password</Link>
     <button type="submit" onClick={loginHandler} className="login-btn">Login</button>
     <p>or</p>
     <button type="submit" onClick={createHandler} className="create-btn">Create a New Account</button>
    </div>
    </div>  
    </section> 
    )
}

export default Login;
