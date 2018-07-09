import React, {Component} from 'react'
import { connect } from 'react-redux';
import { VisibilityFilters } from './../actions/actionType';
import Home from './home';
import Business from './business';


class App extends Component{
   render(){
    //    if (this.props.filter===VisibilityFilters.SHOW_HOME) {
    //        return(
    //            <Home/>
    //        )
    //    }
    switch (this.props.filter) {
        case VisibilityFilters.SHOW_HOME:
            return <Home/>

        case VisibilityFilters.SHOW_BUSSINESS_PAGE:
            return <Business/>
    
        default:
            return <Home/>;
    }
   }
}

function mapStateToProps(state){
    return{
        filter: state.visibilityFilter
    }
}



export default connect(mapStateToProps)(App)