import * as type from '../actions/actionType'

const userData = (state=[], action)=>{
    switch (action.type) {
        case type.SET_LOGIN:
            return {
            ...state,
            succes: action.succes,
            message: action.message,
            status: action.status,
            statusText: action.statusText
            }
        default:
            return state
    }
}

export default userData