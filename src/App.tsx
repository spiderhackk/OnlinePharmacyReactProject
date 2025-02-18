import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Category } from './Component/Category';
import {  Login } from './Component/Login';
import { Home } from './Component/Home';
import { Listing } from './Component/Listing';
import { NavBar } from './Component/NavBar';
import { NotFound } from './Component/NotFound';
import { OrderMedicine } from './Component/OrderMedicine';
import {  SignInForm } from './Component/SignInForm';
import { ForgotPassword } from './Component/ForgotPassword';
import { Logout } from './Component/Logout';
import { Cart } from './Component/Cart';



function App() {

  return (
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route path="" element={<Home></Home>}></Route>
          <Route path='ordermedicine' element={<OrderMedicine></OrderMedicine>}></Route>
          <Route path='healthservices' ></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="signin" element={<SignInForm></SignInForm>}></Route>
          <Route path="logout" element={<Logout></Logout>}></Route>
          <Route path="password/reset" element={<ForgotPassword></ForgotPassword>}></Route>

          <Route path='category' element={<Category/>}>
            <Route path="listing" element={<Listing></Listing>}></Route>
          </Route>
          <Route path="*" element={<NotFound/>}/>
          <Route path="viewcart" element={<Cart></Cart>}></Route>
        </Routes>
      </div>
    
  );
}

export default App;
