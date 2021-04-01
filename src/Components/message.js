import React from 'react'
import {connect} from 'react-redux'
import Userslistitem from './userslistitem'
class Message extends React.Component{
    constructor(props){
        super(props)
        console.log('Message ',props)
    }
    OpenUserChat=(User)=>{
        console.log('sent user id',User)
        let RoomId=''
        if(User.UserId<this.props.CurrentUserId){
            RoomId=User.UserId+'#'+this.props.CurrentUserId;
        }
        else{
            RoomId=this.props.CurrentUserId+'#'+User.UserId;
        }
        this.props.SendUser({User,RoomId});
    }
    render() {
        return (
            <div className="Messages">
                     <h2 className="title">Messages</h2>
                     {this.props.Users.map((user)=>{
                         if(user.UserId!=this.props.CurrentUserId)
                        return <Userslistitem key={user.UserId} User={user} OnUserClick={this.OpenUserChat}/>
                     })}
                    

                    
            </div>
        )
    }
}

const mapStateToProps=(state,getState) =>{
    // console.log('ddddddddddddddddddd',state)
    return{
        Users:state.Chat,
        CurrentUserId:state.auth.uid
    }   
}


export default connect(mapStateToProps)(Message) 


// export default Message