import * as type from './actionType'
import axios from 'axios';
// -------------sign in------------------
export const setSignup = data => {
    return dispatch => {
        return axios.post('http://localhost:3000/signup/',{
            user: data.user,
            emailPerson: data.emailPerson,
            password: data.password,
            panel: data.panel,
            cell: data.cell
        })
        .then(function (response) {
            // console.log(response);
            if (response.data.succes) {
                dispatch({
                    type: type.ERASING_DATA
                })
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

export const setDataCell = cell => ({
    type: type.SELECTING_CELL,
    cell
})

export const setDataPass = password => ({
    type: type.TYPING_PASSWORD,
    password
})

// ------------LOGIN -----------

export const setLogin = data =>{
    return dispatch => {
        return axios.post('http://localhost:3000/login/',{
            user: data.user,
            password: data.password
        })
        .then(function (response) {
            // console.log(response);
            if (response.data.success) {
                dispatch({
                    type: type.ERASING_USER_DATA
                })
                dispatch({
                    type: type.SET_VISIBILITY_FILTER,
                    filter: type.VisibilityFilters.SHOW_BUSSINESS_PAGE
                  })
                console.log('Bienvenido!!')
            }
            dispatch({
                type: type.SET_LOGIN,
                token: response.data.token
              })
              dispatch({
                type: type.GET_DATA_SERVER,
                success: response.data.success,
                message: response.data.message,
                status: response.status,
                statusText: response.statusText,
              })

          })
          .catch(function (error) {
            console.log(error);
          });
    }
}

export const setDataLogin = (name, value)=>{
   return {type: type.TYPING_LOGIN,
    name,
    value}
}

//-----------------LOAD DATA--------
export const loadBusinessData = token =>{
    return dispatch =>{
        return axios.get('http://localhost:3000/user/business',{
            // headers: {'x-access-token': 'eyJhbGciOiJIUzI1NiJ9.Z2x1bXN1cw.FTJ7lS9QyrUT7alfi-tREMgsz6_X4NakgLWinMxNaD4'}
            headers: {'x-access-token': token}
        })
        .then(function (response) {
            // console.log(response.data);
            if (response.data.success) {
                dispatch({
                    type: type.LOAD_BUSINESS_DATA,
                    user: response.data.business.user,
    cell: response.data.business.panel
                })
                
            }
            dispatch({
                type: type.GET_DATA_SERVER,
                success: response.data.success,
                message: response.data.message,
                status: response.status,
                statusText: response.statusText,
                    })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}


export const loadPersonData = token =>{
    return dispatch =>{
        return axios.get('http://localhost:3000/user/person',{
            headers: {'x-access-token': token}
        })
        .then(function (response) {
            if (response.data.success) {
                dispatch({
                    type: type.LOAD_PERSON_DATA,
                    emailPerson: response.data.person.emailPerson,
                })
                
            }
            dispatch({
                type: type.GET_DATA_SERVER,
                success: response.data.success,
                message: response.data.message,
                status: response.status,
                statusText: response.statusText,
                    })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

//---------------------------Filtro de navegacion----------------------
export const setNavigationFilter = (filter)=>({
    type: type.SET_NAVIGATION_FILTER,
    filter
})