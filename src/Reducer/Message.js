const User=[]

const  MessageReducer =(state={}, action)=>{

    switch(action.type){
        case "SetChat":
            console.log('MessageReducer',action.Messages)
            return action.Messages;
        case "SendMessage":
            console.log('from sendMessageReducer',state)
            return {RoomId:state.RoomId,
                    Chat:[...state.Chat,action.Message]
                    };
                
                
            
         default :
            return state
    }
}

export default MessageReducer