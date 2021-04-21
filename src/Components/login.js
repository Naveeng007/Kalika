import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../Action/auth'
export const Login=({startLogin})=>(
    <div className="login-background">
        <div className="login-box">

            <div className="image-box">
                <img className="login-image" src="./images/login_photo.png"/>
            </div>
            
            <div className="box-layout">
                <div className="box-layout-login">
                    <h1>Login</h1>
                    <img className="login-image-logo" src="./images/twitter.png"/>
                    <p>Welcome to Prakriti</p>
                    <button className="login-button" onClick={startLogin}>Login </button>
                </div>
            </div>
        </div>
        
    </div>
    
)

const MapDispatchToProps=(dispatch)=>({
    startLogin:()=>dispatch(startLogin())
});

export default connect(undefined,MapDispatchToProps)(Login)