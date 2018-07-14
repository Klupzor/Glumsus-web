import React, {Component} from 'react'
import { connect } from 'react-redux';

import { NavigationFilters } from '../actions/actionType';
import HomeContent from '../components/home-content/homeContent.jsx';

class Content extends Component {
// //-------------home----------------
//     function homeContent(){
//         return(
//             <div className="content">
//                 <div className="title" >{props.name}</div>
//                 <img src="https://s3.amazonaws.com/glumsus-public/covers/restaurantes.jpg" alt="cover" 
//                 width={400}
//                 height={260}
//                 />
//             </div>
//         )
//     }
// //---------------------------------------la carta----------
//     function cartaContent(){
//         return(
//             <div className="content">
//                 <div className="carta" >
                
//                 </div>
//             </div>
//         )
//     }
// //-----------------------------------------------quienes somos---------
//     function aboutUsContent(){
//         return(
//             <div className="content">
//                 <div className="about-us" >Quienes somos</div>
//             </div>
//         )
//     }
// //------------------------------------------------contactenos---------
//     function contactUsContent(){
//         return(
//             <div className="content">
//                 <div className="contact-us" >Cotactenos</div>
//             </div>
//         )
//     }
// //--------------------------------------------------perfil--------------------
//     function profileContent(){
//         return(
//             <div className="content">
//                 <div className="profile" >Perfil</div>
//             </div>
//         )
//     }
//----------------------------------------------------

render(){
    switch (this.props.filter) {
        case NavigationFilters.SHOW_HOME_CONTENT:
            return <HomeContent name={this.props.businessName}/>
        
        case NavigationFilters.SHOW_CARTA:
            return cartaContent()

        case NavigationFilters.SHOW_ABOUT_US:
            return aboutUsContent()

        case NavigationFilters.SHOW_CONTACT_US:
            return contactUsContent()

        case NavigationFilters.SHOW_PROFILE:
            return profileContent()
    
        default:
            return <HomeContent name={this.props.businessName}/>
    }

}
    
}



function mapStateToProps(state){
    return{
     businessName: state.userData.businessName,
     filter: state.navigationFilter,
     menuCategories: state.userData.menuCategories
        
    }
}

export default connect(mapStateToProps)(Content)