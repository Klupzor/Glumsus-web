import React from 'react'

function HomeContent(props){
            return(
                <div className="content">
                    <div className="title" >{props.name}</div>
                    <img src="https://s3.amazonaws.com/glumsus-public/covers/restaurantes.jpg" alt="cover" 
                    width={400}
                    height={260}
                    />
                </div>
            )
}

export default HomeContent