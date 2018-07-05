import React from 'react'

function Signup(props){
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <label >User
                    <input type="text" onChange={props.handleUser}/>
                </label>
                <label >Email
                    <input type="email" onChange={props.handleEmail} />
                </label>
                <label >
                    Seleccione un panel
                    <select onChange={props.handlePanel} >
                        <option value="">.....</option>
                        <option value="Sogamoso">Sogamoso</option>

                    </select>
                </label>
                <label >Contraseña
                    <input type="password" onChange={props.handlePass} />
                </label>
                <input type="submit" value="Registrar"/>
            </form>
        </div>
    )
}

export default Signup