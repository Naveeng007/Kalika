import React from 'react'
import {connect} from 'react-redux'
import Userslistitem from './userslistitem'
class Message extends React.Component{
    constructor(props){
        super(props)
        // console.log('Messagekkkkkkkkkkkkk ',props)
    }
    OpenUserChat=(User)=>{
        // console.log('sent user id',User)
        let RoomId=''
        if(User.UserId<this.props.CurrentUserId){
            RoomId=User.UserId+'_'+this.props.CurrentUserId;
        }
        else{
            RoomId=this.props.CurrentUserId+'_'+User.UserId;
        }
        this.props.SendUser({User,RoomId});
    }
    render() {
        return (
            <div className="Messages">
                     <h2 className="title">Messages</h2>
                     {/* {console.log('UsersList.........',this.props.Users)} */}
                     {this.props.Users&&this.props.Users.map((user)=>{
                        //  console.log('------------------')
                         if(user.UserId!=this.props.CurrentUserId)
                        return <Userslistitem key={user.UserId}  User={user} OnUserClick={this.OpenUserChat}/>
                     })}
                    

                    
            </div>
        )
    }
}

const mapStateToProps=(state,getState) =>{
    // console.log('ddddddddddddddddddd',state)
    return{
        Users:state.Chat,
        CurrentUserId:state.auth.uid,
        Messages:state.Message
    }   
}


export default connect(mapStateToProps)(Message) 


// export default Message