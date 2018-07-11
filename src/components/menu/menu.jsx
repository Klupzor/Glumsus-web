import React from 'react'
import { NavigationFilters } from '../../actions/actionType';

function Menu (props){

    return(
        <div className="menu" >
            <div className="business-pallet" >
                <span className="title-pallet" >NEGOCIOS</span>
                <div className="item-pallet" >
                    <span onClick={() => props.handleClick(NavigationFilters.SHOW_CARTA)} >La carta</span>
                    <span onClick={() => props.handleClick(NavigationFilters.SHOW_ABOUT_US)}>Quines Somos</span>
                    <span onClick={() => props.handleClick(NavigationFilters.SHOW_CONTACT_US)}>Contacto</span>
                    <span onClick={() => props.handleClick(NavigationFilters.SHOW_PROFILE)}>Perfil</span>

                </div>
                
            </div>
        </div>
    )
}

export default Menu