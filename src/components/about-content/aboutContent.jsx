import React, {Component} from 'react'
import {connect} from 'react-redux'
import { setAboutData, modifyAboutUs } from '../../actions';

//-----------------------------------------------quienes somos---------
class AboutContent extends Component{
constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

}
handleChange(event){
    this.props.dispatch(setAboutData(event.target.value))
}

handleSubmit(event){
    event.preventDefault()
    this.props.dispatch(modifyAboutUs(this.props.about, this.props.llave))
}
    render(){
        return(
            <div className="content">
                <div className="about-us" >
                <h2>Acerca de nosotros</h2>
                    <form onSubmit={this.handleSubmit} >
                        <textarea cols="30" rows="10"value={this.props.about} onChange={this.handleChange} ></textarea>
                        <input type="submit" value="Modificar" />
                    </form>            
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
     llave: state.userData.token,
     about: state.userData.aboutUs
        
    }
}

export default connect (mapStateToProps)(AboutContent)