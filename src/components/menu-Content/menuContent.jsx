import React from 'react'
import MenuList from './menuList.jsx';

function MenuContent(props){
const listItems = props.menuCategories.map((item) =>
    <div key={item._id}>
        <span >{item.name}</span>
        <MenuList {...item} />
    </div>
);

const listCategories = props.menuCategories.map((item) =>
        <option value={item.name} key={item._id}>{item.name}</option>
);
    return(
        <div className="content">
            <div className="carta" >
                <form onSubmit={hanldeSubmit} onChange={props.handleChange} >
                    <select name="category" >
                        {listCategories}
                    </select>
                    <input type="text" name="name" placeholder="Nombre del plato" />
                    <input type="text" name="description" placeholder="Descripción" />
                    <input type="number" name="price" placeholder="Precio" step="50"/>
                    <input type="submit" value="Agregar plato" />

                </form>
                <div>{listItems}</div>
            </div>
        </div>
        )
}

export default MenuContent