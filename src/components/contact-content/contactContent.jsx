import React, {Component} from 'react'
import {connect} from 'react-redux'
import { setDataCategory, setDataContact, modifyContact } from '../../actions';

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
                </div>
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