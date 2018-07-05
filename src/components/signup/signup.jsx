import React from 'react'

function Signup(props){
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <label >User
                    <input type="text" onChange={props.handleUser}/>
                </label>
                <label >Email
                    <input type="email"/>
                </label>
                <label >
                    Seleccione panel
                    <select>
                        <option value="Sogamoso">Sogamoso</option>
                    </select>
                </label>
                <label >Contraseña
                    <input type="password"/>
                </label>
                <input type="submit" value="Registrar"/>
            </form>
        </div>
    )
}

export default Signup