import React, {Component} from 'react';
import { connect } from 'react-redux';
import BusinessLayout from './../components/containers-layout/business/business-layout.jsx';
import { loadBusinessData, loadPersonData, setNavigationFilter } from '../actions';
import Menu from '../components/menu/menu.jsx'
import Content from './content';


class Business extends Component{
  constructor(props){
    super(props)
    this.handleClickMenu = this.handleClickMenu.bind(this)
    
}

handleClickMenu(event){
    this.props.dispatch(setNavigationFilter(event))
}
render(){
    if (this.props.llave) {
        if (!this.props.loginBusiness) {
            this.props.dispatch(loadBusinessData(this.props.llave))
            console.log('pidiendo datos negocio')
        }else
            if (!this.props.loginPerson) {
                this.props.dispatch(loadPersonData(this.props.llave))
                console.log('pidiendo datos persona')
            }
        
        return(
            <BusinessLayout>
                <Menu
                    handleClick={this.handleClickMenu}
                />
                <Content />
            </BusinessLayout>
        )
    }else{
        return(
            <div>Cargando...</div>
        )
    }

  }
    
}

function mapStateToProps(state){
    return{
     llave: state.userData.token,
     loginBusiness: state.userData.loginBusiness,
     loginPerson: state.userData.loginPerson,
        
    }
}

export default connect(mapStateToProps) (Business)