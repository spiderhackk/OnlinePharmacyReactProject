import React, { useContext } from 'react'
import { LOGIN_ERROR } from '../Context/LoginMessageContext'

export const Error = () => {
    const errorMsg = useContext(LOGIN_ERROR)
    return (
        <div>
            <p className="errorMsg">{errorMsg}</p>
        </div>
    )
}
