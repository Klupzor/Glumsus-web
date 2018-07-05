import * as type from './actionType'

export const setSignup = data => {
    type: type.SET_SIGNUP
    // console.log(data)
}

export const setDataUser = user => ({
    type: type.TYPING_USER,
    user
})

export const setDataEmail = emailPerson => ({
    type: type.TYPING_EMAIL,
    emailPerson
})

export const setDataPanel = panel => ({
    type: type.SELECTING_PANEL,
    panel
})
