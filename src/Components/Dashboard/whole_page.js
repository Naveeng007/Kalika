import React from 'react'
import Activity from '../Activity/ShowActivity'
import Post from '../Post/ShowPost'
import Message from '../Message/message'
import Chat from '../Message/chat'

class WholePage extends React.Component {
    constructor(props){
        super(props);
        // console.log('Props from whole page',props);
        this.state={
            ischat: false,
            User:{},
            RoomId:''
        }
    }

    
    
    SetUserChatId=({User,RoomId})=>{
        this.setState({ischat: true});
        this.setState({User})
        this.setState({RoomId})
    }

    BackClick=()=>{
        this.setState({ischat:false});
    }


   render() {
       return (
           <div className="Whole_page">

               {/* Activity */}
               <Activity/>

            {/* Post */}
               <Post/>

            {/* Messages */}
               {!this.state.ischat &&
               <Message
               SendUser={this.SetUserChatId}
               />
               }
               {this.state.ischat && 
                    
               <Chat
            
                User={this.state.User}
                ReceiverId={this.state.User.UserId}
                
                RoomId={this.state.RoomId}
                BackClick={this.BackClick}
               />}
           </div>
       )
   }
}

export default WholePage