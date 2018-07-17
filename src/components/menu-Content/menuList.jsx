import React from 'react'

function MenuList(props){
const listItems = props.menus.map((item) =>
  <div key={item._id}>
    <span>{item.name}</span>
    <span>Descripcion: {item.description}</span>
    <span>Precio: {item.price}</span>
    <button onClick={()=> props.deleteMenu(item._id)} >
        <i>borrar</i>
    </button>
  </div>
);
    return(
        <div className="content">
            <div className="carta" >
                <div>{listItems}</div>
            </div>
        </div>
        )
}

export default MenuList