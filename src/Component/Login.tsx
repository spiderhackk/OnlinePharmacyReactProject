import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import '../Style/Login.css'
import '../Component/Error'
import { Error } from '../Component/Error';
import {LOGIN_ERROR} from '../Context/LoginMessageContext'
import {SIGNIN_SUCCESS} from '../Context/SignInSuccessContext'
import logo from '../Assets/Healthcare.jpg'

import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import App from '../App';
import { NavBar } from './NavBar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Store/authSlice';
export const Login = () => {

    const [email, setemail] = useState("");
    const [psw, setpsw] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const API = "http://0.0.0.0:5001/login"

    const authToken =  useSelector((state:any) => state.auth.token);
    const loginStatus = useSelector((state:any) => state.auth.status)
    const dispatch = useDispatch();


    useEffect(() => {
    }, [loginStatus]);

    
    const onSubmitForm=(e:any)=>{
        e.preventDefault();
        try{
            axios.post(API,{
                email,
                psw,
            }).then((response)=>{
                 
                if(response.data[2]==201){
                    dispatch(login(response.data[1]))
                    navigate('/ordermedicine');
                   
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
                {error!=""&&
                <LOGIN_ERROR.Provider value={error}>
                    <Error></Error>
                </LOGIN_ERROR.Provider>    
            }
                <div className="card-container">
                    <div className="container-details">
                        <img className="app-logo" src={logo}/>
                        <form className="container-details" onSubmit={onSubmitForm}>
                            <label>Username</label>
                            <input value = {email}className="email-field" type="text" onChange={(e)=>setemail(e.target.value)}/>
                            <label>Password</label>
                            <input value ={psw} className="password-field" type="password" onChange={(e)=>setpsw(e.target.value)}/>
                            <button type ="submit" className="sign-btn">Sign in to account</button>
                        </form>

                        <p>
                            <NavLink to="/password/reset" >
                                <p>
                                Forgot password?</p>
                            </NavLink>
                            
                        </p>
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
