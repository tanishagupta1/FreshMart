import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { auth } from "./firebase";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()
    }
    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
            })
            .catch(error => alert(error.message))

    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className="login__logo" src="logo_fresh.png" alt="" />

            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className='login__signInButton' onClick={signIn}>Sign In</button>
                    <p className='login__para'>
                        By signing-in you agree to the Freshmart Conditions of Use & Sale. Please
                        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                    <button className='login__registerButton' onClick={register}>Create an Account</button>
                </form>
            </div>


        </div>
    )
}

export default Login