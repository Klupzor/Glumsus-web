import * as type from '../actions/actionType'

const data = (state=[], action)=>{
    switch (action.type) {
        case type.TYPING_USER:
            return {
                ...state,
                user: action.user
            }
        
        case type.TYPING_EMAIL:
            return {
                ...state,
                emailPerson: action.emailPerson
            }
        
        case type.SELECTING_PANEL:
            return {
                ...state,
                panel: action.panel
            }

        case type.SELECTING_CELL:
            return {
                ...state,
                cell: action.cell
            }
        
        case type.TYPING_PASSWORD:
            return {
                ...state,
                password: action.password
            }

        case type.SET_SIGNUP:
            return {
                ...state,
                succes: action.succes,
                message: action.message,
                status: action.status,
                statusText: action.statusText
            }

        case type.ERASING_DATA:
            return {
                ...state,
                user: "",
                emailPerson: "",
                panel: "",
                cell: "",
                password: ""
            }

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
        default:
            return state
    }
}

export default data