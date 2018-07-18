import React, {Component} from 'react'
import {connect} from 'react-redux'
import MenuList from './menuList.jsx';
import { setDataMenu, setDataCategory, setMenu, setCategory, deleteMenuData, deleteCategoryData } from '../../actions';


class MenuContent extends Component{
    constructor(props){
        super(props)
        
        this.createMenu = this.createMenu.bind(this)
        this.typingMenu = this.typingMenu.bind(this)
        this.typingCategory = this.typingCategory.bind(this)
        this.createCategory = this.createCategory.bind(this)
        this.deleteMenu = this.deleteMenu.bind(this)

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

      typingCategory(event){
        this.props.dispatch(setDataCategory(event.target.value))
      }

      createCategory(event){
        event.preventDefault()
        this.props.dispatch(setCategory(this.props.menuData.newCategory, this.props.busId, this.props.llave))
    }

    deleteMenu(id){
        this.props.dispatch(deleteMenuData(id, this.props.llave))
    }

    deleteCategory(id){
        this.props.dispatch(deleteCategoryData(id, this.props.llave))
    }

    render(){
        const listItems = this.props.menuCategories.map((item) =>
            <div key={item._id}>
                <span >{item.name}</span>
                <button onClick={()=> this.deleteCategory(item._id)} >
                    <i>borrar</i>
                </button>
                <MenuList {...item} deleteMenu={this.deleteMenu}/>
            </div>
        );
        
        //agregando las categorias existentes del menu del negocio
        const listCategories = this.props.menuCategories.map((item) =>
                <option value={item._id} key={item._id}>{item.name}</option>
        );
            return(
                <div className="content">
                    <div className="carta" >
                        <form onSubmit={this.createCategory} >
                            <input type="text" value={this.props.menuData.newCategory} onChange={this.typingCategory} placeholder="Agregar nueva Categoria" />
                            <input type="submit" value="Crear" />
                        </form>
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