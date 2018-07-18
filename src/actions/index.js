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
            headers: {'x-access-token': token}
        })
        .then(function (response) {
            // console.log(response.data);
            if (response.data.success) {
                dispatch({
                    type: type.LOAD_BUSINESS_DATA,
                    user: response.data.business.user,
                    aboutUs: response.data.business.aboutUs,
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

export const setDataCategory = (name)=>{
    return {
        type: type.TYPING_CATEGORY,
        name
    }
 }

 export const setCategory = (data, busId, token) =>{
    return dispatch => {
        return axios.post(Config.serverUrl+'/menu/categ/'+busId,{
            name: data
        })
        .then(function (response) {
            // console.log(response);
            if (response.data.success) {
                dispatch(loadBusinessData(token))
                
                console.log('Creada la categoria!!')
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

export const deleteMenuData = (idMenu, token) =>{
    return dispatch => {
        return axios.delete(Config.serverUrl+'/menu/'+idMenu,{})
        .then(function (response) {
            // console.log(response);
            if (response.data.success) {
                dispatch(loadBusinessData(token))
                
                console.log('borrado el menu!!')
                // dispatch({
                //     type: type.ERASING_MENU_DATA
                // })
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

export const deleteCategoryData = (idCateg, token) =>{
    return dispatch => {
        return axios.delete(Config.serverUrl+'/menu/categ/'+idCateg,{})
        .then(function (response) {
            // console.log(response);
            if (response.data.success) {
                dispatch(loadBusinessData(token))
                
                console.log('borrada la categoria!')
                // dispatch({
                //     type: type.ERASING_MENU_DATA
                // })
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

// ----------------------about us ----------------------

export const setAboutData = aboutUs => ({
    type: type.TYPING_ABOUT_US,
    aboutUs
})

export const modifyAboutUs = (aboutUs, token) =>{
    return dispatch => {
        return axios({
            method: 'put',
            url: Config.serverUrl+'/user/business/about',
            headers: {'x-access-token': token},
            data: {
                aboutUs
            }
        })
        .then(function (response) {
            // console.log(response);
            if (response.data.success) {
                dispatch(loadBusinessData(token))
                
                console.log('modificado About us!')
                // dispatch({
                //     type: type.ERASING_MENU_DATA
                // })
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