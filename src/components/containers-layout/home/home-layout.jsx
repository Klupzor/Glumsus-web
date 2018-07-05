import React from 'react';


function HomeLayout(props) {
        
        return (
            <div className="main">
                {props.children}
            </div>
        )
    
}

export default HomeLayout