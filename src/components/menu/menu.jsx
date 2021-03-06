import React from 'react'
import { NavigationFilters } from '../../actions/actionType';
import './menu.scss'

function Menu (props){

    return(
        <div className="menu" >
            <div className="business-pallet" >
                <span className="title-pallet" >NEGOCIOS</span>
                <div className="item-pallet" >
                    <span onClick={() => props.handleClick(NavigationFilters.SHOW_HOME_CONTENT)} >Inicio</span>
                    <span onClick={() => props.handleClick(NavigationFilters.SHOW_CARTA)} >La carta</span>
                    <span onClick={() => props.handleClick(NavigationFilters.SHOW_ABOUT_US)}>Quienes Somos</span>
                    <span onClick={() => props.handleClick(NavigationFilters.SHOW_CONTACT_US)}>Contacto</span>
                    <span onClick={() => props.handleClick(NavigationFilters.SHOW_PROFILE)}>Perfil</span>

                </div>
                
            </div>
        </div>
    )
}

export default Menu