import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export const Logout = () => {
    const [logoutStatus, setLogoutStatus] = useState();
        
    useEffect(() => {
        localStorage.removeItem("authToken");
    }, [])
    return (
        <div>
            
        </div>
    )
}
