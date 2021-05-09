import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../../Action/auth'
export class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cliked:true
        }
    }
    onClick=() => {
        this.props.startLogin()
        this.setState(()=>({cliked:false}))
    }
    render() {
        return(
    <div className="login-background">
        <div className="login-box">

            <div className="image-box">
                <img className="login-image" src="./images/login_photo.png"/>
            </div>
            
            <div className="box-layout">
                <div className="box-layout-login">
                    <h1>Login</h1>
                    <img className="login-image-logo" src="./images/twitter.png"/>
                    <p>Welcome to Kannect</p>
                    
                    {this.state.cliked&&<button className="login-button" onClick={this.onClick}>Login </button>}
                    {!this.state.cliked&&<img className="loading-button" src="./images/preview.gif"/>}
                </div>
            </div>
        </div>
        
    </div>)
    }
}
    


const MapDispatchToProps=(dispatch)=>({
    startLogin:()=>dispatch(startLogin())
});

export default connect(undefined,MapDispatchToProps)(Login)