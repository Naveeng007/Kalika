import ReactDOM from 'react-dom'
import React from 'react'
import {Provider} from 'react-redux'
import {login,logout} from './Action/auth'
import {firebase} from './firebase/firebase'
import {F_SetPost} from './Action/Post'
import configureStore from './store/configureStore'
const store=configureStore()
import './Style/style.scss'
import history from "./history";
import AppRouter from './Router/AppRouter'
import { F_SetActivity } from './Action/Activity'

const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)


let HasRendered=false;

const RenderApp=()=>{
    if(!HasRendered)
    {
        ReactDOM.render(jsx,document.getElementById('app'))
        HasRendered=true;
    }
}



// ReactDOM.render(jsx, document.getElementById('app')
//     )
    firebase.auth().onAuthStateChanged((user)=>{
 
        if(user){
            console.log("........................loged in",user)
            store.dispatch(login(user.uid))
            // RenderApp();
            // history.push('/dashboard')
            const state=store.getState();
            console.log(state)

            store.dispatch(F_SetPost()).then(() =>{
               store.dispatch(F_SetActivity()).then(() =>{
                RenderApp();
                history.push('/dashboard')
               })
            })
        }
        else
        {
            store.dispatch(logout())
            console.log('Logged out')
            RenderApp();
            history.push('/')
            
        }
    })
    