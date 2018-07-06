import * as type from './actionType'
import Axios from '../../node_modules/axios';

export const setSignup = data => {
    return dispatch => {
        return Axios.post('http://localhost:3000/signup/',{
            user: data.user,
            emailPerson: data.emailPerson,
            password: data.password,
            panel: data.panel
        })
        .then(function (response) {
            // console.log(response);
            if (response.data.succes) {
                console.log('Registró!!')
            }
            dispatch({
                type: type.SET_SIGNUP,
                succes: response.data.succes,
                message: response.data.message,
                status: response.status,
                statusText: response.statusText
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
