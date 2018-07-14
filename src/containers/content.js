import React, {Component} from 'react'
import { connect } from 'react-redux';
import { NavigationFilters } from '../actions/actionType';
import HomeContent from '../components/home-content/homeContent.jsx';
import MenuContent from '../components/menu-Content/menuContent.jsx';
import AboutContent from '../components/about-content/aboutContent.jsx';
import ProfileContent from '../components/profile-content/profileContent.jsx';
import ContactContent from '../components/contact-content/contactContent.jsx';

class Content extends Component {
    render(){
        switch (this.props.filter) {
            case NavigationFilters.SHOW_HOME_CONTENT:
                return <HomeContent name={this.props.businessName}/>
            
            case NavigationFilters.SHOW_CARTA:
                return <MenuContent menuCategories={this.props.menuCategories}/>

            case NavigationFilters.SHOW_ABOUT_US:
                return <AboutContent/>

            case NavigationFilters.SHOW_CONTACT_US:
                return <ContactContent/>

            case NavigationFilters.SHOW_PROFILE:
                return <ProfileContent/>
        
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