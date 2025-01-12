import React from 'react'

export const ExampleReact = () => {


    const handleClick =()=>{
        alert("I am working now")
    }
    return (
        <div>
            <button onClick={handleClick}>I do not do anything</button>
        </div>
    )
}
