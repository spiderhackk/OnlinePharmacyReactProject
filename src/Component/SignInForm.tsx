import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import '../Style/Login.css'
import '../Component/Error'
import { Error } from '../Component/Error';
import {LOGIN_ERROR} from '../Context/LoginMessageContext'
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export const SignInForm = () => {

    const [email, setemail] = useState("");
    const [psw, setpsw] = useState("");
    const [num, setNumber] = useState("");
    const [username, setName] = useState("");
    const [gender, setGender] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const API = "http://0.0.0.0:5001/signup"

    const onSubmitForm=(e:any)=>{
        e.preventDefault();
        try{
            axios.post(API,{
                email,
                psw,
                num,
                username,
                gender
            }).then((response)=>{
                console.log(response.data);  
                if(response.data===200){
                    navigate('/login');
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
                            <label className="label">Email</label>
                            <input value = {email}className="email-field" type="text" onChange={(e)=>setemail(e.target.value)} required/>
                            <label>Password</label>
                            <input value ={psw} className="password-field" type="password" onChange={(e)=>setpsw(e.target.value)} required/>
                            <label>Number</label>
                            <input min="1" max="10" value = {num}className="email-field" type="number" onChange={(e)=>setNumber(e.target.value)} required/>
                            <label>Name</label>
                            <input value = {username}className="email-field" type="text" onChange={(e)=>setName(e.target.value)} required/>
                            <label>Male</label>
                            <input value = {gender}className="email-field" type="radio" onChange={(e)=>setGender(e.target.value)}/>
                            <label>Female</label>
                            <input value = {gender}className="email-field" type="radio" onChange={(e)=>setGender(e.target.value)}/>
                            <button type ="submit" className="sign-btn">Create Account</button>
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

