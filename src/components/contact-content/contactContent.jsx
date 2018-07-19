import React, {Component} from 'react'
import scriptLoader from 'react-async-script-loader'
import {connect} from 'react-redux'
import { setDataContact, modifyContact, seeLocation } from '../../actions';

@scriptLoader(['https://maps.googleapis.com/maps/api/js?key=AIzaSyD0nBkgLXCVDDnJ3Ba7sQ62TI5yxS8sfzA'])

class ContactContent extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
    }

    handleChange(event){
        this.props.dispatch(setDataContact(event.target.name, event.target.value))
    }

    handleSubmit(event){
        event.preventDefault()
        this.props.dispatch(modifyContact(this.props, this.props.llave))
    }

    handleAddress(){
        console.log('pidiendo direccion')
        var address = this.props.address
        var geocoder = new google.maps.Geocoder();
        var dispatch = this.props.dispatch
              
             
            geocoder.geocode({'address': address},(results, status) => {
            if (status === 'OK') {
                const lat = results[0].geometry.location.lat()
                const lng = results[0].geometry.location.lng()
                console.log('latitud: ', lat)
                console.log('longitud: ',lng)
                dispatch(seeLocation(lat, lng))
                var uluru = {lat: lat, lng: lng};
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 17,
                    center: uluru
                });
                var marker = new google.maps.Marker({
                    position: uluru,
                    map: map
                });
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                  }
                });
                
    }

    //cargando api google maps
    componentWillReceiveProps({isScriptLoadSucceed}){
        if (isScriptLoadSucceed) {
            var uluru = {lat: this.props.lat, lng: this.props.lng};
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 17,
                center: uluru
            });
            var marker = new google.maps.Marker({
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
            
            <div className="content">
                <div className="contact-us" >
                    <form  onSubmit={this.handleSubmit} >
                        <label >Teléfono 
                            <input type="text" name="phone" value={this.props.phone} onChange={this.handleChange} />
                        </label>
                        <label >Correo electrónico 
                            <input type="text" name="email" value={this.props.email} onChange={this.handleChange} />
                        </label>
                        <label >Horario
                            <input type="text" name="businessHours" value={this.props.businessHours} onChange={this.handleChange} />
                        </label>
                        <label >Dirección del negocio 
                            <input type="text" name="address" value={this.props.address} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Actualizar" />
                    </form>
                    <button onClick={this.handleAddress} >Visualizar</button>
                </div>
                <div id="map" style={{height: "600px"}}></div>
                

            </div>
        )

    }
}

function mapStateToProps(state){
    return{
     llave: state.userData.token,
     email: state.userData.email,
     phone: state.userData.phone,
     address: state.userData.address,
     businessHours: state.userData.businessHours,
     lat: state.userData.lat,
     lng: state.userData.lng
        
    }
}

export default connect (mapStateToProps) (ContactContent)