import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../Action/auth'
export const Login=({startLogin})=>(
    <div className="box-layout">
        <div className="box-layout-login">
            <h1>Login</h1>
            <p>Welcome to Prakriti</p>
            <button className="login-button" onClick={startLogin}>Login </button>
        </div>
       
    </div>
)

const MapDispatchToProps=(dispatch)=>({
    startLogin:()=>dispatch(startLogin())
});

export default connect(undefined,MapDispatchToProps)(Login)