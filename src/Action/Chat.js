import Post from '../filter/Post';
import database from '../firebase/firebase'
import moment from 'moment'

const CreateUser =(User={})=>({
    type: 'CreateUser',
    User
})

export const F_CreateUser =(User={})=>{
    return (dispatch,getState)=>{
        // const {
        //     Id,
        //     Username='',
        //     Email='',
        //     ImgURL='',
        //     UserId
        // }=UserInfo;
        // const User={ 
        //     Id,
        //     Username,
        //     Email,
        //     ImgURL,
        //     UserId};

        database.ref(`Users`).push(User).then((ref)=>{
            dispatch(CreateUser(
                // Id=ref.key,
                User,
            ))
        })
    }
}
const SetChat =(Users) =>({
    Type: 'SetChat',
    Users
})

const F_SetChat =(Username='', Email='',ImgURL='')=>{
    return (dispatch,getState)=>{
        const User ={
            // Id,
            Username,
            Email,
            ImgURL,
            UserId
        }
        database.ref(`Users`).push(User).then((ref)=>{
            dispatch(CreateUser(
                ...User,
            ))
        })
    }
}
const SendMessage =()=>({
    Type: 'SendMessage',
    SenderId,
    ReceiverId,
    Message,
})

export const F_SendMessage =(RoomId='',SenderId='', ReceiverId='',Message='')=>{
    return (dispatch,getState)=>{
        const Messages ={
            SenderId,
            ReceiverId,
            Message
        }
        database.ref(`Messages/${RoomId}`).push(Messages).then((ref)=>{
            dispatch(SendMessage(
                ...CreateUser,
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