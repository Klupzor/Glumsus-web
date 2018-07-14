import React from 'react'
import MenuList from './menuList.jsx';

function MenuContent(props){
const listItems = props.menuCategories.map((item) =>
    <div key={item._id}>
        <span >{item.name}</span>
        <MenuList {...item} />
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

export default MenuContent