import * as type from '../actions/actionType'

const data = (state=[], action)=>{
    switch (action.type) {
        case type.TYPING_USER:
            return {
                ...state,
                user: action.user
            }
    
        default:
            return state
    }
}

export default data