import React from 'react';
import { connect } from 'react-redux';
import HomeLayout from './../components/containers-layout/home/home-layout.jsx';
import Signup from './../components/signup/signup.jsx';
import { setSignup, setDataUser } from './../actions/index';


function Home (props){

        return(
            <HomeLayout>
                <Signup handleSubmit={props.handleSignup} handleUser={props.dataUser}/>
            </HomeLayout>
        )
    
}



function mapStateToProps(state, props){
    return{
        filter: state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    //     handleSignup: (event) => {
    //         event.preventDefault()
    //         // dispatch(setSignup(event))
    //         console.log(event.target)
    //   },
      dataUser: (event)=> {
        console.log(event.target.value)
        dispatch(setDataUser(event.target.value))

      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (Home)