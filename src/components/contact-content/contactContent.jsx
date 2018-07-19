import React, {Component} from 'react'
import scriptLoader from 'react-async-script-loader'
import {connect} from 'react-redux'
import { setDataCategory, setDataContact, modifyContact } from '../../actions';

@scriptLoader(['https://maps.googleapis.com/maps/api/js?key=AIzaSyD0nBkgLXCVDDnJ3Ba7sQ62TI5yxS8sfzA'])

class ContactContent extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.props.dispatch(setDataContact(event.target.name, event.target.value))
    }

    handleSubmit(event){
        event.preventDefault()
        this.props.dispatch(modifyContact(this.props, this.props.llave))
    }

    componentWillReceiveProps({isScriptLoadSucceed}){
        if (isScriptLoadSucceed) {
            var markers = [];

            var map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: {lat: 37.7749300, lng: -122.4194200}
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
                        <button>Visualizar</button>
                        <input type="submit" value="Actualizar" />
                    </form>
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