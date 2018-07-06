import React from 'react';

function Login(props){
return(
    <div>
        LOGIN
        <form onSubmit={props.handleSubmit}>
                <label >Usuario
                    <input type="text"   onChange={props.handleUser}/>
                </label>
                <label >Contraseña
                    <input type="password"  name="password" onChange={props.handlePass} />
                </label>
                <input type="submit" value="Entrar"/>
            </form>
    </div>
)
}

export default Login
