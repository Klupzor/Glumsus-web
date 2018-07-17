import * as type from '../actions/actionType'

const menuData = (state=[], action)=>{
    switch (action.type) {
        case type.TYPING_MENU:
                switch (action.name) {
                    case "category":
                        return {
                            ...state,
                            category: action.value
                        }
                        
                    case "name":
                        return {
                            ...state,
                            name: action.value
                        }

                    case "description":
                        return {
                            ...state,
                            description: action.value
                        }

                    case "price":
                        return {
                            ...state,
                            price: action.value
                        }
                
                    default:
                        return state
                }
        case type.ERASING_MENU_DATA:
            return{
                ...state,
                name: "",
                description: "",
                price: "",
                newCategory: ""
            }
        case type.TYPING_CATEGORY:
            return{
                ...state,
                newCategory: action.name
            }
        default:
            return state
    }
}

export default menuData