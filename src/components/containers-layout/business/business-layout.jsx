import React from 'react';
import './business.scss'

function BusinessLayout(props) {
        
        return (
            <div className="business">
                {props.children}
            </div>
        )
    
}

export default BusinessLayout