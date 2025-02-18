import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Style/NotFound.css'
export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="not-found-container">
            <img src="https://c8.alamy.com/comp/MNNJEE/sad-emoticon-face-MNNJEE.jpg"></img>
            <h1>404 | page not found</h1>
            <button className="go-to-btn"onClick={()=>navigate('/')}>
                Go Back to Home Page
            </button>
        </div>
    )
}
