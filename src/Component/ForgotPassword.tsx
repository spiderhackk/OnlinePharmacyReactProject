import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import '../Style/Login.css'
import '../Component/Error'
import { Error } from '../Component/Error';
import {LOGIN_ERROR} from '../Context/LoginMessageContext'
import {SIGNIN_SUCCESS} from '../Context/SignInSuccessContext'

import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import App from '../App';
import { NavBar } from './NavBar';
import { useEffect } from 'react';
export const ForgotPassword = () => {

    const [email, setemail] = useState("");
    const [psw, setpsw] = useState("");
    const [error, setError] = useState("");
    const [loginSuccess, setLoginSuccess] = useState("false");
    const navigate = useNavigate();
    const API = "http://0.0.0.0:5001/forgot/password"


    useEffect(() => {
        localStorage.setItem("loginStatus",loginSuccess);
    }, [loginSuccess]);

    
    const onSubmitForm=(e:any)=>{
        e.preventDefault();
        try{
            axios.post(API,{
                email,
                psw,
            }).then((response)=>{
                 
                if(response.data[2]===200||201){
                    console.log(response.data[2]); 
                    navigate('/login')
                }
            }).catch(
                (error)=>{
                    setError(error.response.data)
                    console.log(error.response.data);
                }
            )
            
                
            
            
        }
        catch(error){
            
        }
            
        
        
    }
    return (
        <div>
            <div>
                {error!=""&&<LOGIN_ERROR.Provider value={error}>
                    <Error></Error>
                </LOGIN_ERROR.Provider> 
            }
            
                <div className="card-container">
                    <div className="container-details">
                        <img className="app-logo" src="https://img.freepik.com/premium-vector/medical-shop-store-trolley-capsule-logo-vector-icon-illustration_7688-3160.jpg"/>
                        <form className="container-details" onSubmit={onSubmitForm}>
                            <label>Email</label>
                            <input value = {email}className="email-field" type="text" onChange={(e)=>setemail(e.target.value)}/>
                            <label>Set new Password</label>
                            <input value ={psw} className="password-field" type="password" onChange={(e)=>setpsw(e.target.value)}/>
                            <button type ="submit" className="sign-btn">Reset password</button>
                        </form>
                        <div className="Sign-in-link">
                        <p>
                            <NavLink to="/signin" >
                                <p>
                                Don't have account? Sign in</p>
                            </NavLink>
                            
                        </p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
