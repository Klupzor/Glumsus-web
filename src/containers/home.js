import React, {Component} from 'react';
import { connect } from 'react-redux';
import HomeLayout from './../components/containers-layout/home/home-layout.jsx';
import Signup from './../components/signup/signup.jsx';
import { setSignup, setDataUser, setDataEmail, setDataPanel, setDataPass } from './../actions/index';


class Home extends Component{
  constructor(props){
    super(props)
    
    this.handleSignup = this.handleSignup.bind(this)
    // this.dataUser = this.dataUser.bind(this)

  }

  
  handleSignup(event) {
    event.preventDefault()
    // console.log(this.props)
    this.props.dispatch(setSignup(this.props.data))
    
  }
  render(){

    return(
        <HomeLayout>
            <Signup 
            handleSubmit={this.handleSignup} 
            handleUser={this.props.dataUser}
            handleEmail={this.props.dataEmail}
            handlePanel={this.props.dataPanel}
            handlePass={this.props.dataPass}
            />
        </HomeLayout>
    )
  }

    
}



function mapStateToProps(state, ownProps){
    return{
        filter: state.visibilityFilter,
        data: state.data
        
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
      dataUser: (event)=> {
        dispatch(setDataUser(event.target.value))
      },
      dataEmail: (event)=>{
        dispatch(setDataEmail(event.target.value))
      },
      dataPanel: (event)=>{
        dispatch(setDataPanel(event.target.value))
      },
      dataPass: (event)=>{
        dispatch(setDataPass(event.target.value))
      }
    }
  }

export default connect(mapStateToProps) (Home)