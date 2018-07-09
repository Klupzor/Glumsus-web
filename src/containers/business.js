import React, {Component} from 'react';
import { connect } from 'react-redux';
import BusinessLayout from './../components/containers-layout/business/business-layout.jsx';
import { loadBusinessData, loadPersonData } from '../actions';


class Business extends Component{
  constructor(props){
    super(props)
    // this.handleSignup = this.handleSignup.bind(this)
    
}

render(){
    if (this.props.llave) {
        this.props.dispatch(loadBusinessData(this.props.llave))
        this.props.dispatch(loadPersonData(this.props.llave))

    }

    return(
        <BusinessLayout>
            <div> hola bb </div>
        </BusinessLayout>
    )
  }
    
}

function mapStateToProps(state, ownProps){
    return{
     llave: state.userData.token,
        
    }
}

export default connect(mapStateToProps) (Business)