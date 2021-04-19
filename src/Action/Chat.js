
import database from '../firebase/firebase'
import moment from 'moment'

const CreateUser =(User={})=>({
    type: 'CreateUser',
    User,
    
})

export const F_CreateUser =(User={})=>{
    return (dispatch,getState)=>{
        console.log('New User',User)
        
        database.ref(`Users`).push(User).then((ref)=>{
            dispatch(CreateUser(
                // Id=ref.key,
                ...User,
            ))
        })
    }
}
const SetChat =(Messages) =>({
    type: 'SetChat',
    Messages
})

export const F_SetChat =(RoomId={})=>{
    return (dispatch,getState)=>{
    
        console.log('.....d.....d.d.d.dd.d',RoomId)
        
        database.ref(`Messages/${RoomId}`).once('value').then((snapshot)=>{
            const Chat=[]
            snapshot.forEach((snapshotChild)=>{
                Chat.push({
                    Id: snapshotChild.key,
                   ...snapshotChild.val()
                })
            })

            const Messages ={
                RoomId,
                Chat
            }
            console.log('SetChat',Messages)
            dispatch(SetChat(Messages))
        })
    }
}
const SendMessage =(Message)=>({
    type: 'SendMessage',
    Message,
})

export const F_SendMessage =(RoomId='',SenderId='', ReceiverId='',Message='')=>{
    return (dispatch,getState)=>{
        const Messages ={
            SenderId,
            ReceiverId,
            Message,
            CreatedAt:moment().valueOf()
        }
        database.ref(`Messages/${RoomId}`).push(Messages).then((ref)=>{
            dispatch(SendMessage(
                Messages,
            ))
        })
    }
}


const SetUser =(User={})=>({
    type: 'SetUser',
    User
})

export const F_SetUser =()=>{
    return (dispatch,getState)=>{
        
        const User=[]
     return   database.ref(`Users`).once('value').then((snapshot)=>{
            snapshot.forEach((snapshotChild)=>{
                User.push({
                    Id: snapshotChild.key,
                   ...snapshotChild.val()
                })
            })
            console.log('setUser',User)
            dispatch(SetUser(User))
        })
        
       
    }
}


const CreateRoom=(Chats={}) => {
    type:'CreateRoom',
    Chats
}