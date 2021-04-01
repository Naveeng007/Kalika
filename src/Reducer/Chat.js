const User=[]

const  ChatReducer =(state=User, action)=>{

    switch(action.type){
        case "CreateUser":
            console.log('new user created',action.User)
            return [
                ...state,
                action.User
            ]
        case "SetUser":
            return action.User
         default :
            return state
    }
}

export default ChatReducer