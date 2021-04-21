import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import logo from '../Img/logo_3.png';
import '../Login/Login.scss';
import {auth} from '../Firebase';

const Register = () => {
const[displayName, setdisplayName] = useState('');
const[email, setEmail] = useState('');
const[password, setPassword] = useState(''); 

let history = useHistory();

const registerHandler = (e) => {
    e.preventDefault();
    
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
        if(auth) {
           history.push('/');
        }
    })
    .catch(error => alert(error.message))
}

    return(
 <section className="login">
    <div className="login-page">
    <h4>Create a New Account</h4>
    <div className= "login-card">
     <img src={logo} alt={logo} />
     <label>Name</label>
     <input type="name" className="login-input"  value={displayName} onChange={(e) => setdisplayName(e.target.value)}></input>
     <label>Email</label>
     <input type="email" className="login-input" placeholder="test@example.com"  value={email} onChange={(e) => setEmail(e.target.value)}></input>
     <label>Password</label>
     <input type="email" className="login-input"  value={password} onChange={(e) => setPassword(e.target.value)}></input>
     <button type="submit" onClick={registerHandler} className="login-btn">Create Account</button>
    </div>
    </div>  
    </section> 
    )
}

export default Register;
