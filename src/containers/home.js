import React, {Component} from 'react';
import { connect } from 'react-redux';
import HomeLayout from './../components/containers-layout/home/home-layout.jsx';
import Signup from './../components/signup/signup.jsx';
import { setSignup, setDataUser, setDataEmail, setDataPanel, setDataPass } from './../actions/index';


class Home extends Component{
  constructor(props){
    super(props)
    
    this.handleSignup = this.handleSignup.bind(this)
    this.dataUser = this.dataUser.bind(this)
    this.dataEmail = this.dataEmail.bind(this)
    this.dataPanel = this.dataPanel.bind(this)
    this.dataPass = this.dataPass.bind(this)


  }
  
  handleSignup(event) {
    event.preventDefault()
    // console.log(this.props)
    this.props.dispatch(setSignup(this.props.data))
    
  }

  dataUser(event) {
    this.props.dispatch(setDataUser(event.target.value))
  }

  dataEmail(event){
    this.props.dispatch(setDataEmail(event.target.value))
  }

  dataPanel(event){
    this.props.dispatch(setDataPanel(event.target.value))
  }

  dataPass(event){
    this.props.dispatch(setDataPass(event.target.value))
  }
  render(){

    return(
        <HomeLayout>
            <Signup 
            handleSubmit={this.handleSignup} 
            handleUser={this.dataUser}
            handleEmail={this.dataEmail}
            handlePanel={this.dataPanel}
            handlePass={this.dataPass}
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

export default connect(mapStateToProps) (Home)