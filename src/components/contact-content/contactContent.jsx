import React, {Component} from 'react'
import scriptLoader from 'react-async-script-loader'
import {connect} from 'react-redux'
import { setDataContact, modifyContact } from '../../actions';

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
        var geocoder = new google.maps.Geocoder();
        function geocodeAddress(geocoder, resultsMap) {
            var address = 'Calle 7b #25-13, sogamoso'
            geocoder.geocode({'address': address}, function(results, status) {
            if (status === 'OK') {
                console.log('latitud: ', results[0].geometry.location.lat())
                console.log('longitud: ',results[0].geometry.location.lng())
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                  }
                });
        }
      geocodeAddress(geocoder)
    }

    //cargando api google maps
    componentWillReceiveProps({isScriptLoadSucceed}){
        if (isScriptLoadSucceed) {
            var uluru = {lat: 5.718672499999999, lng: -72.94102559999999};
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
        
    }
}

export default connect (mapStateToProps) (ContactContent)