import * as type from './actionType'
import Axios from '../../node_modules/axios';

export const setSignup = data => {
    console.log(data)
    return dispatch => {
        return Axios.post('http://localhost:3000/signup/',{
            user: data.user,
            emailPerson: data.emailPerson,
            password: data.password
        })
        .then(function (response) {
            console.log(response);
            dispatch({
                type: type.SET_SIGNUP,
                data: response.data,
                loading: false
              })
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    
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

export const setDataPass = password => ({
    type: type.TYPING_PASSWORD,
    password
})
