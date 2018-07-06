import React from 'react';

function Login(props){
return(
    <div>
        LOGIN
        <form onSubmit={props.handleSubmit} onChange={props.handleLogin}>
                <label >Usuario
                    <input type="text"  name="user" />
                </label>
                <label >Contraseña
                    <input type="password"  name="password"  />
                </label>
                <input type="submit" value="Entrar"/>
            </form>
    </div>
)
}

export default Login
