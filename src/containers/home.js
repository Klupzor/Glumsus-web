import React, {Component} from 'react';
import { connect } from 'react-redux';
import HomeLayout from './../components/containers-layout/home/home-layout.jsx';
import Signup from './../components/signup/signup.jsx';
import { setSignup, setDataUser, setDataEmail, setDataPanel, setDataPass, setDataLogin, setLogin, setDataCell } from './../actions/index';
import Login from '../components/login/login.jsx';


class Home extends Component{
  constructor(props){
    super(props)
    
    this.handleSignup = this.handleSignup.bind(this)
    this.dataUser = this.dataUser.bind(this)
    this.dataEmail = this.dataEmail.bind(this)
    this.dataPanel = this.dataPanel.bind(this)
    this.dataCell = this.dataCell.bind(this)
    this.dataPass = this.dataPass.bind(this)
    this.login = this.login.bind(this)
    this.handleSetLogin = this.handleSetLogin.bind(this)

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

  dataCell(event){
    this.props.dispatch(setDataCell(event.target.value))
  }

  dataPass(event){
    this.props.dispatch(setDataPass(event.target.value))
  }

  //  ..................login .......................

  login(event){
    this.props.dispatch(setDataLogin(event.target.name, event.target.value))
  }

  handleSetLogin(event){
    event.preventDefault()
    this.props.dispatch(setLogin(this.props.userData))

  }

  render(){

    return(
        <HomeLayout>
            <Signup 
            datos={this.props.data}
            handleSubmit={this.handleSignup} 
            handleUser={this.dataUser}
            handleEmail={this.dataEmail}
            handlePanel={this.dataPanel}
            handleCell={this.dataCell}
            handlePass={this.dataPass}
            />
            <Login
            handleLogin={this.login}
            handleSubmit={this.handleSetLogin}
            datos={this.props.userData} 
            />
        </HomeLayout>
    )
  }
    
}

function mapStateToProps(state, ownProps){
    return{
        filter: state.visibilityFilter,
        data: state.data,
        userData: state.userData
        
    }
}

export default connect(mapStateToProps) (Home)