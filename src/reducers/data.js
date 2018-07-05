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
    
        default:
            return state
    }
}

export default data