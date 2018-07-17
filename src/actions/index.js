import * as type from './actionType'
import axios from 'axios';
import Config from 'Config'
// -------------sign in------------------
export const setSignup = data => {
    return dispatch => {
        return axios.post(Config.serverUrl+'/signup/',{
            user: data.user,
            emailPerson: data.emailPerson,
            password: data.password,
            panel: data.panel,
            cell: data.cell
        })
        .then(function (response) {
            // console.log(response);
            if (response.data.success) {
                dispatch({
                    type: type.ERASING_DATA
                })
                console.log('Registró!!')
            }
            dispatch({
                type: type.SET_SIGNUP,
                success: response.data.success,
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
        return axios.post(Config.serverUrl+'/login/',{
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
        return axios.get(Config.serverUrl+'/user/business',{
            // headers: {'x-access-token': 'eyJhbGciOiJIUzI1NiJ9.Z2x1bXN1cw.FTJ7lS9QyrUT7alfi-tREMgsz6_X4NakgLWinMxNaD4'}
            headers: {'x-access-token': token}
        })
        .then(function (response) {
            // console.log(response.data);
            if (response.data.success) {
                dispatch({
                    type: type.LOAD_BUSINESS_DATA,
                    user: response.data.business.user,
                    panel: response.data.business.panel,
                    cell: response.data.business.cell,
                    name: response.data.business.name,
                    busId: response.data.business._id,
                    menuCategories: response.data.business.menuCategories
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
        return axios.get(Config.serverUrl+'/user/person',{
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

//-------------------menu-----------------
export const setDataMenu = (name, value)=>{
    return {type: type.TYPING_MENU,
     name,
     value}
 }

 export const setMenu = (data, token) =>{
    return dispatch => {
        return axios.post(Config.serverUrl+'/menu/'+data.category,{
            name: data.name,
            description: data.description,
            price: data.price
        })
        .then(function (response) {
            // console.log(response);
            if (response.data.success) {
                dispatch(loadBusinessData(token))
                
                console.log('guardado el menu!!')
                dispatch({
                    type: type.ERASING_MENU_DATA
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