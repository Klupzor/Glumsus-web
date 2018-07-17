import React, {Component} from 'react'
import {connect} from 'react-redux'
import MenuList from './menuList.jsx';
import { setDataMenu } from '../../actions';
import { setMenu } from './../../actions/index';

class MenuContent extends Component{
    constructor(props){
        super(props)
        
        this.createMenu = this.createMenu.bind(this)
        this.typingMenu = this.typingMenu.bind(this)

      }

      typingMenu(event){
        //   console.log('nombre', event.target.name)
        //   console.log('value', event.target.value)
        this.props.dispatch(setDataMenu(event.target.name, event.target.value))
      }

      createMenu(event){
          event.preventDefault()
          this.props.dispatch(setMenu(this.props.menuData, this.props.llave))
      }

    render(){
        const listItems = this.props.menuCategories.map((item) =>
            <div key={item._id}>
                <span >{item.name}</span>
                <MenuList {...item} />
            </div>
        );
        
        //agregando las categorias existentes del menu del negocio
        const listCategories = this.props.menuCategories.map((item) =>
                <option value={item._id} key={item._id}>{item.name}</option>
        );
            return(
                <div className="content">
                    <div className="carta" >
                        <form onSubmit={this.createMenu} onChange={this.typingMenu} >
                            <select name="category" >
                            <option value="">...</option>
                                {listCategories}
                            </select>
                            <input type="text" value={this.props.menuData.name} name="name" placeholder="Nombre del plato" />
                            <input type="text" value={this.props.menuData.description} name="description" placeholder="Descripción" />
                            <input type="number" value={this.props.menuData.price} name="price" placeholder="Precio" step="50"/>
                            <input type="submit" value="Agregar plato" />
        
                        </form>
                        <div>{listItems}</div>
                    </div>
                </div>
                )

    }
}

function mapStateToProps(state){
    return{
     menuCategories: state.userData.menuCategories,
     busId: state.userData.busId,
     menuData: state.menuData,
     llave: state.userData.token
        
    }
}

export default connect (mapStateToProps) (MenuContent)