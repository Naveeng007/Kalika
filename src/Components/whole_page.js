import React from 'react'
import Activity from './ShowActivity'
import Post from './ShowPost'
import Message from './message'
import Chat from './chat'

class WholePage extends React.Component {
    constructor(props){
        super(props);
        console.log('Props from whole page',props);
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
               <Activity/>
               <Post/>
               {!this.state.ischat &&
               <Message
               SendUser={this.SetUserChatId}
               />
               }
               {this.state.ischat && 

               <Chat
            
                User={this.state.User}
                RoomId={this.state.RoomId}
                BackClick={this.BackClick}
               />}
           </div>
       )
   }
}

export default WholePage