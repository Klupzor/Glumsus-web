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

        case type.TYPING_LOGIN:
            if (action.name === 'user') {
                return {
                    ...state,
                    user: action.value
                    }
            }
            if (action.name === 'password') {
                return {
                    ...state,
                    password: action.value
                    }
            }

        case type.ERASING_USER_DATA:
            return {
            ...state,
            user: "",
            password: ""
            }
            
        default:
            return state
    }
}

export default userData