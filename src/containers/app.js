import React, {Component} from 'react'
import { connect } from 'react-redux';
import { VisibilityFilters } from './../actions/actionType';
import Home from './home';


class App extends Component{
   render(){
       if (this.props.filter===VisibilityFilters.SHOW_HOME) {
           return(
               <Home/>
           )
       }
   }
}

function mapStateToProps(state){
    return{
        filter: state.visibilityFilter.filter
    }
}



export default connect(mapStateToProps)(App)