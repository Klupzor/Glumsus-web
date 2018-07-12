import React from 'react'
import './content.scss'
import { NavigationFilters } from '../../actions/actionType';

function Content (props){

    function homeContent(){
        return(
            <div className="content">
                <div className="title" >{props.name}</div>
            </div>
        )
    }


    switch (props.filter) {
        case NavigationFilters.SHOW_HOME_CONTENT:
            return homeContent()
    
        default:
            return(
                <div>hola bb</div>
            )
    }
    
}

export default Content