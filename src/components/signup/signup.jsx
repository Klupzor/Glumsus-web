import React from 'react'

function Signup(props){
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <label >User
                    <input type="text" name="user" onChange={props.handleUser}/>
                </label>
                <label >Email
                    <input type="email" name="email" onChange={props.handleEmail} />
                </label>
                <label >
                    Seleccione un panel
                    <select onChange={props.handlePanel} name="panel">
                        <option value="">.....</option>
                        <option value="Sogamoso">Sogamoso</option>

                    </select>
                </label>
                <label >Contraseña
                    <input type="password" name="password" onChange={props.handlePass} />
                </label>
                <input type="submit" value="Registrar"/>
            </form>
        </div>
    )
}

export default Signup