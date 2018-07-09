import React, {Component} from 'react';
import { connect } from 'react-redux';
import BusinessLayout from './../components/containers-layout/business/business-layout.jsx';
import { loadData } from '../actions';


class Business extends Component{
  constructor(props){
    super(props)
    // this.handleSignup = this.handleSignup.bind(this)
    
}

render(){
    if (this.props.llave) {
        loadData(this.props.llave)
        
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