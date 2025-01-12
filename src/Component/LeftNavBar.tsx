import React from 'react'
import AppLogo from '../Assets/AppLogo.png'
import './LeftNavBar.css'
export const LeftNavBar = () => {

    return (
        <div className="main-nav-content">
            <div className="logo-img-conainer-flex">

                <div className="img-content">
                    <img className = "image-logo" src={AppLogo} alt="instagramLogo"></img>
                </div>

            </div>
            <div className="nav-bar-details-flex">
                <div className="nav-part">
                    Home
                </div>
                <div className="nav-part">
                    Search
                </div>
                
                <div className="nav-part">
                    Explore
                </div>
                <div className="nav-part">
                    Reels
                </div>
                <div className="nav-part">
                    Messages
                </div>
                <div className="nav-part">
                    Notifications
                </div>
                <div className="nav-part">
                    Create
                </div>
                <div className="nav-part">
                    Dashboard
                </div>

                <div className="nav-part">
                    Profile
                </div>
            </div>
            
        </div>
    )
}
