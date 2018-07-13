import React from 'react'
import './content.scss'
import { NavigationFilters } from '../../actions/actionType';

function Content (props){
//-------------home----------------
    function homeContent(){
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
//---------------------------------------la carta----------
    function cartaContent(){
        return(
            <div className="content">
                <div className="carta" >Aqui va el Menu</div>
            </div>
        )
    }
//-----------------------------------------------quienes somos---------
    function aboutUsContent(){
        return(
            <div className="content">
                <div className="about-us" >Quienes somos</div>
            </div>
        )
    }
//------------------------------------------------contactenos---------
    function contactUsContent(){
        return(
            <div className="content">
                <div className="contact-us" >Cotactenos</div>
            </div>
        )
    }
//--------------------------------------------------perfil--------------------
    function profileContent(){
        return(
            <div className="content">
                <div className="profile" >Perfil</div>
            </div>
        )
    }
//----------------------------------------------------
    switch (props.filter) {
        case NavigationFilters.SHOW_HOME_CONTENT:
            return homeContent()
        
        case NavigationFilters.SHOW_CARTA:
            return cartaContent()

        case NavigationFilters.SHOW_ABOUT_US:
            return aboutUsContent()

        case NavigationFilters.SHOW_CONTACT_US:
            return contactUsContent()

        case NavigationFilters.SHOW_PROFILE:
            return profileContent()
    
        default:
            return homeContent()
    }
    
}

export default Content