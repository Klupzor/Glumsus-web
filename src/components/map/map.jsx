import React, {Component} from 'react'
import scriptLoader from 'react-async-script-loader'
import {connect} from 'react-redux'

@scriptLoader(['https://maps.googleapis.com/maps/api/js?key=AIzaSyD0nBkgLXCVDDnJ3Ba7sQ62TI5yxS8sfzA'])

class Map extends Component{
    constructor(props){
        super(props)
    }
    //cargando api google maps
    componentWillReceiveProps({isScriptLoadSucceed}){
        if (isScriptLoadSucceed) {
            var uluru = {lat: this.props.lat, lng: this.props.lng};
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 18,
                center: uluru
            });
            new google.maps.Marker({
                position: uluru,
                map: map
            });
        }
        else{
            alert("script not loaded")
        }
    }
    render(){
        return(
            <div id="map" style={{height: "600px"}}></div>
        )
    }
}

function mapStateToProps(state){
    return{
     lat: state.userData.lat,
     lng: state.userData.lng
    }
}

export default connect (mapStateToProps) (Map)