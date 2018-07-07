import React, {Component} from 'react';
import { connect } from 'react-redux';
import BusinessLayout from './../components/containers-layout/business/business-layout.jsx';


class Business extends Component{
  constructor(props){
    super(props)
    // this.handleSignup = this.handleSignup.bind(this)

  }
  
  render(){

    return(
        <BusinessLayout>
            <div> hola bb </div>
        </BusinessLayout>
    )
  }
    
}

function mapStateToProps(state, ownProps){
    return{
        // filter: state.visibilityFilter,
        
    }
}

export default connect(mapStateToProps) (Business)