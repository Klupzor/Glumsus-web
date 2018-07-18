import * as type from '../actions/actionType'

const userData = (state=[], action)=>{
    switch (action.type) {
        case type.SET_LOGIN:
            return {
            ...state,
            token: action.token
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

        case type.LOAD_BUSINESS_DATA:
            return {
            ...state,
            user: action.user,
            panel: action.panel,
            aboutUs: action.aboutUs,
            cell: action.cell,
            businessName: action.name,
            busId: action.busId,
            menuCategories: action.menuCategories,
            loginBusiness: true
            }

        case type.LOAD_PERSON_DATA:
            return {
            ...state,
            emailPerson: action.emailPerson,
            loginPerson: true
            }
            
        case type.TYPING_ABOUT_US:
            return {
            ...state,
            aboutUs: action.aboutUs
            }
        default:
            return state
    }
}

export default userData