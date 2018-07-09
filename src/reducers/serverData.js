import * as type from '../actions/actionType'

const serverData = (state=[], action)=>{
    switch (action.type) {
        case type.GET_DATA_SERVER:
            return {
            // ...state,
            success: action.success,
            message: action.message,
            status: action.status,
            statusText: action.statusText,
            }

        default:
            return state
    }
}

export default serverData