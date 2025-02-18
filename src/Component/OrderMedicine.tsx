import React, { useState } from "react";
import "../Style/OrderMedicine.css";
import medicinesData from "../StaticData/Products.json";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Store/counterSlice";
import { addItem } from "../Store/cartSlice";

export const OrderMedicine = () => {
  const medicines = medicinesData.medicines;
  const [searchItem, setsearchItem] = useState("");
  const [filtered, setfiltered] = useState(medicines);
  const [isSearch, setisSearch] = useState(false);
  const [productId, setproductId] = useState("");
  const [item, setitem] = useState(medicines)
  const [counter, setCounter] = useState(1);
  const [productsID, setProductsID] = useState<any>({});
  const [itemName,setItemName] = useState();
  const [ind, setindex] = useState();
  const [displayIndex, setDisplayIndex] = useState(0);
  const dispatch = useDispatch();
  const token = useSelector((state:any) => state.auth.token)
  const counterIncrement = useSelector((state:any) => state.counter.value)
  const BASE_API = "http://0.0.0.0:5001";
  const cartProductsList = useSelector((state:any)=>state.cartItem.items)


  const onSearchHandler = (event: any) => {
    let value: string = event.target.value;
    setsearchItem(event.target.value);

    if (value.length >= 3) {
      setisSearch(true);
    } else {
      setisSearch(false);
    }
    let item = medicinesData.medicines.filter((product) =>
      product.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setfiltered(item);
  };



  const searchDisplayed = () => {};
  

  useEffect(() => {
      //call the api data
    let items = medicines.filter(value=>
        value.id.toString().includes(productId)
    )
    setitem(items);
  }, [productId])


  const onCheckout=(products:any)=>{
        dispatch(addItem(products)); 
}
    
  const onAdd =(id:any)=>{
    
      setProductsID((prevCart:any)=>({
        ...prevCart,
        [id]:prevCart[id]+1
      }))

      // if(id==itemName.id){
      //   counterIncrement<10 && dispatch(increment())
        
      // }
    
    
    
  }

  const onSub =(id:any)=>{
    item.filter((itemName,filterId)=>{
      if(id==itemName.id){
        
        counterIncrement>0 && dispatch(decrement())

        // setCounter();
        console.log();
  
      }
    })
  }

  return (
    <div>
      <div className="header-items">
        <h2>Search & select medicines that you want to order</h2>
      </div>
      <div className="body-items">
        <input
          value={searchItem}
          type="text"
          placeholder="Search for Medicine & Household Products..."
          onChange={onSearchHandler}
        ></input>
        <button onClick={searchDisplayed}>Search</button>
      </div>
      {item.map((value,rowIndex)=>{
                  return(
                    <div className="card">
                      <div className="items-container">
                        <div className="items-details">
                      <ul className="list-items-details">
                          <li >
                              {value.name}
                          </li>
                          <li >
                              <b>Rs:- {value.price}</b>
                          </li>
                          <li>
                            Manufacturer company: {value.mfg_company}
                          </li>
                         
                      </ul>

                  
                  </div>
          
          <div className="checkout">
          <button
              className="checkout-btn" 
              onClick={()=>onCheckout(value)}>
                Add to cart</button>
          
          </div>
        </div>
      </div>
              )})}
            
              
    </div>
  );
};
