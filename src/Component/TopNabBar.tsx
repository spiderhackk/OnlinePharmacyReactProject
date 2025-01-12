import React from 'react'
import { useState } from 'react'
import { ExampleThree } from './ExampleThree'
import "./TopNavbar.css"
export const TopNabBar = () => {
    const [isFeedback, setisFeedback] = useState(false)
    
    return (
        <div className="top-nav">
            <button >
                Feedback
            </button>
            <button>
                View feedback
            </button>
            
            
        </div>
    )
}
