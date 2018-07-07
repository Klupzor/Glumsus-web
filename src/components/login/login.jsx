import React from 'react';

function Login(props){
return(
    <div>
        LOGIN
        <form onSubmit={props.handleSubmit} onChange={props.handleLogin}>
                <label >Usuario
                    <input type="text"  name="user" value={props.datos.user} />
                </label>
                <label >Contraseña
                    <input type="password"  name="password" value={props.datos.password} />
                </label>
                <input type="submit" value="Entrar"/>
            </form>
    </div>
)
}

export default Login
