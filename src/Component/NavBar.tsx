  import { faBox, faCartShopping, faHeart, faRightFromBracket, faUser, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SIGNIN_SUCCESS } from "../Context/SignInSuccessContext";
import { logout } from "../Store/authSlice";
import { profileData } from "../Store/profileSlice";
import "../Style/NavBar.css";
import logo from '../Assets/Healthcare.jpg'
export const NavBar = () => {
  const [profileDataList,setProfileDataList] = useState({
    username:"",
    email:"",
    gender:"",
    num:""
    
  });
  const loginStatus = useSelector((state:any) => state.auth.status)
  const token = useSelector((state:any) => state.auth.token)
  const dispatch = useDispatch();
  const totalCartQuantity = useSelector((state:any) => state.cartItem.totalQuantity)
  const [totalCartCount, settotalCartCount] = useState(0)
  const BASE_API = "http://0.0.0.0:5001/profile";
  
  const config={
    headers:{
      "authorization":token
    }
  }
  useEffect(() => {
    axios.get(BASE_API,config).then((data)=>{
      console.log(data);
      data.data.map((item:{username:string,email:string,num:string,gender:string})=>{
        const usernameCapital = item.username.charAt(0).toUpperCase()+item.username.slice(1)
        setProfileDataList({
          
          username: usernameCapital,
          email:item.email,
          num:item.num,
          gender:item.gender
        
        })
      })
      
      
    }).catch((error)=>{
      
    })
    
    
  }, [loginStatus]);
  const handleLogoutClick=()=>{
    dispatch(logout())
  }


  useEffect(()=>{
    settotalCartCount(totalCartQuantity);
  },[totalCartQuantity])


  return (
    <div>
      <header>
        <div className="header">
            <img className="app-icon" src={logo}/>
          <ul className="hdr-container">
            <NavLink to="/ordermedicine">
              <li>Order Medicine</li>
            </NavLink>
            <NavLink to="/healthservices">
              <li>Lab Tests</li>
            </NavLink>
            <NavLink to="/category">
              <li>
                
                Consult Doctors</li>
            </NavLink>
            {loginStatus?
                <div className="profile-container">
                  <div className="username-Container">
                  <FontAwesomeIcon icon={faUser} />
                  <NavLink to="#">
                  <span>
                  {profileDataList.username}
                  </span>
                  </NavLink>
                  </div>
                  <ul className="profile-items-list">
                    
                    <li>
                    <FontAwesomeIcon icon={faUser} />
                      
                      My Profile</li>
                    <li>
                    <FontAwesomeIcon icon={faBox} />
                      Orders</li>
                    <li>
                    <FontAwesomeIcon icon={faHeart} />
                      Wishlist</li>
                    <NavLink to="/login"
                    onClick={handleLogoutClick}>
                    <li>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                      Logout</li>
                    </NavLink>
                  </ul>
                </div>
            :  
              <NavLink to="/login">
              <li>Login/Signup</li>
            </NavLink>
              

            }
            <NavLink to="/viewcart">
            <div className="cart-container">
                <li style={{fontSize:"20px"}}>
                <FontAwesomeIcon icon={faCartShopping} />
                </li>
                <div className="cart-count">{totalCartQuantity}</div>
            </div>

            </NavLink>
            
            
          </ul>
        </div>
      </header>
    </div>
  );
};
