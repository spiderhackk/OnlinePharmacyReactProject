import React from 'react'
import { Outlet } from 'react-router-dom'

export const Category = () => {
    return (
        <div>
            <h1>Welcome to category page</h1>
            <Outlet></Outlet>
        </div>
    )
}
