import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "../Style/Cart.css";
export const Cart = () => {
  const products_data = useSelector((state: any) => state.cartItem);

  useEffect(() => {
    console.log(products_data);
  }, []);
  return (
    <div>
        {products_data.items.length==0?
        <div className="empty-card">
            <div className="cart-icon">

            <FontAwesomeIcon icon={faCartShopping} />
            </div>
            <p style={{fontSize:"30px"}}>Your cart is empty!</p>
            <p style={{color:"grey"}}>Explore our wide selection and find something you like</p>
            <a href=""></a>
        </div>
      
      
      
      :
      <><h1 className="your-cart-header">
                  <div>
                      <FontAwesomeIcon icon={faCartShopping} />
                  </div>
                  My Cart
              </h1>


                  <div className="card">
                      <div className="items-container">
                          {products_data.items?.map((cartItems: any) => {
                              return (
                                  <>
                                      <div className="items-details">
                                          <ul className="list-items-details">
                                              <li>{cartItems.name}</li>
                                              <li>
                                                  <b>Rs: - {cartItems.price}</b>
                                              </li>
                                              <li>Mfg By: {cartItems.mfg_company}</li>
                                              <li>Best Before: {cartItems.exp_date}</li>
                                          </ul>
                                          <div className="items-counter">
                                              <button className="counter">+</button>
                                              <span className="counter-display">
                                                  {cartItems.cartQuantity}
                                              </span>
                                              <button className="counter">-</button>
                                              <div
                                                  style={{
                                                      display: "flex",
                                                      marginLeft: "150px",
                                                      cursor: "pointer",
                                                      fontSize: "20px",
                                                  }}
                                              >
                                                  <FontAwesomeIcon icon={faTrash} />
                                              </div>
                                          </div>
                                      </div>

                                      <hr></hr>
                                  </>
                              );
                          })}
                      </div>
                  </div></>
    
      }
      </div>
  );
};
