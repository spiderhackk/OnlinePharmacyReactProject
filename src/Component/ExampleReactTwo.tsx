import React from 'react'
import { useState } from 'react'

export const ExampleReactTwo = () => {

    const [buttonName, setbuttonName] = useState(false);
    


    // const onClickHandlerShoWDetails =()=>{
    //     setstate(true);
    //     setbuttonName("Hide Details");
    // }

    // const onClickhandlerHideDetails =()=>{
    //     setstate(false);
    //     setbuttonName("Show Details");
    // }

    const clickDetailsHandler=()=>{
        setbuttonName(!buttonName)
    }
   
    return (
        <div>
            <button onClick={clickDetailsHandler}>
                {buttonName ? 'Hide' :'Show' } details
                
            </button>
            {buttonName && <p>Some text displayed</p>}
            
        </div>
    )
}
