import React from 'react'

function Signup(props){
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <label >User
                    <input type="text" value={props.datos.user}  onChange={props.handleUser}/>
                </label>
                <label >Email
                    <input type="email" value={props.datos.emailPerson} name="email" onChange={props.handleEmail} />
                </label>
                <label >
                    Seleccione un panel
                    <select onChange={props.handlePanel} name="panel" value={props.datos.panel} >
                        <option value="">.....</option>
                        <option value="Sogamoso">Sogamoso</option>

                    </select>
                </label>
                <label >Contraseña
                    <input type="password" value={props.datos.password} name="password" onChange={props.handlePass} />
                </label>
                <input type="submit" value="Registrar"/>
            </form>
        </div>
    )
}

export default Signup