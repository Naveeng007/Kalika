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
import { F_SetUser,F_CreateUser } from './Action/Chat'



const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

const loading=(
    <div className="loading">
         <img className="loading-photo"src="./images/filling.gif"/>
    </div>
   
)

ReactDOM.render(loading,document.getElementById('app'))

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
    firebase.auth().onAuthStateChanged(async (user)=>{
 
        if(user){
            // console.log("........................loged in",user)
          await  store.dispatch(login(user.uid,user.photoURL,user.email,user.displayName))
            // RenderApp();
            // history.push('/dashboard')
           

            // store.dispatch(F_SetPost()).then(() =>{
            //    store.dispatch(F_SetActivity()).then(() =>{
            //     RenderApp();
            //     history.push('/dashboard')
            //    })
            // })
            console.log('111111')
            

           await  store.dispatch(F_SetUser()).then(async () =>{

                const User={
                    Email:user.email,
                    Username:user.displayName,
                    UserId:user.uid,
                    imgUrl:user.photoURL
                }

                const Chat=store.getState().Chat;
                let flag=0;
                Chat.forEach(chat => {
                    // console.log(chat.UserId,'------',user.uid)
                    if(chat.UserId===user.uid) {
                        flag=1;
    
                    }
                })
                if(flag===0){
                   await  store.dispatch(F_CreateUser(User))
                }
            })

           await     store.dispatch(F_SetPost())//await because when new user is created,then it must run not before
                    store.dispatch(F_SetActivity())
           
            // console.log('22222',store.getState())
                RenderApp();
                history.push('/dashboard')
               
        }
        else
        {
            store.dispatch(logout())
            console.log('Logged out')
            RenderApp();
            history.push('/')
            
        }
    })
    