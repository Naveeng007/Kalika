import React from 'react'
import {F_SetChat} from '../Action/Chat'
import {F_SendMessage} from '../Action/Chat'
import Chatlistitem from './Chatlistitem'
import {connect} from 'react-redux'
class Chat extends React.Component{
    constructor(props){
        super(props)
        // console.log('from chat-------',props)
        this.state={
            error:'',
            Text:''
        }
    }

    componentDidMount() {
        this.props.F_SetChat(this.props.RoomId)
      
    }

    onChange=(event) =>{
        const Text=event.target.value
        if(Text.length==0){//if u want words less than 10 ... Title.split(" ").length>10||
            this.setState(()=>({error:'Message can\'t be empty'}))
            this.setState(()=>({Text:''}))
        }
        else
        {
            this.setState(()=>({error:''}))
            this.setState(()=>({Text}))
        }
        
    }

     autoscroll=()=>{
        const $MessageDiv=document.querySelector('#messages_div')
        // console.log('Autoscroll',$MessageDiv)
        const $newMessages=$MessageDiv.lastElementChild
    
        //Height of new Messages
    
        const newMessagesStyles=getComputedStyle($newMessages)
        const newMessagesMargin=parseInt(newMessagesStyles.marginBottom)
        const newMessageHeight=$MessageDiv.offsetHeight + newMessagesMargin
    
        //visible Height
        const visibleHeight=$MessageDiv.offsetHeight
        // console.log('Autoscroll',$newMessages)
        //Height of message Container
        const containerHeight=$MessageDiv.scrollHeight
    
        //How far i have scrolled?
        const scrollOffset=$MessageDiv.scrollTop+visibleHeight
    
        if(containerHeight-newMessageHeight<=scrollOffset){
            $MessageDiv.scrollTop=$MessageDiv.scrollHeight
        }
    }

    SendMessage=()=>{
       
        this.props.F_SendMessage(this.props.RoomId,this.props.SenderId,this.props.ReceiverId,this.state.Text)
        this.setState(()=>({Text:''}))
        this.autoscroll()
       
    }

    render() {
        return(
            <div className="chat">

                <div className="chat-bar">

                    <div className="post-top">
						<div className="post-top-username-div">
                            <img className="post-top-photo" src={this.props.User.imgUrl}/>
							<p className="username-text">{this.props.User.Username}</p>
						</div>

                        <div className="post-top-delete">
							<input  type="image"onClick={this.props.BackClick}  className="username-text" width="20px" height="20px" src="./images/left-arrow.png" />
						</div>

						
					</div>
                    <div className="chat-box" id="messages_div" >
                    {/* {console.log('Messages11111111111',this.props.Messages)} */}
                        {this.props.Messages&&this.props.Messages.map((message)=>{
                            // console.log('..',message.Id)
                            return <Chatlistitem  key={message.Id} {...message} UserId={this.props.SenderId}/>
                        })}
                    </div>
                        
                        
                    

                    <div className="chat-type-box-div">
                        <textarea className="chat-type-box" onChange={this.onChange}  value={this.state.Text}  placeholder="hi">
                        </textarea>
                        {this.state.Text&&<div className="post-top-delete">
							<input type="image" onClick={this.SendMessage}  className="send-message" width="20px" height="20px" src="./images/sent.png" />
						</div>}

                        
                    </div>
                </div>


            </div>
        )
    }
}


const MapDispatchToProps=(dispatch)=>{
    // console.log('dispatch checkpoint')
return{
    F_SetChat: (RoomId)=>dispatch(F_SetChat(RoomId)),
    F_SendMessage:(RoomId,SenderId,ReceiverId,Message)=>dispatch(F_SendMessage(RoomId,SenderId,ReceiverId,Message))
    }  
};

const MapStateToProps=(state)=>{
    console.log('From Chat state---------------------',state)
    
return{
        SenderId:state.auth.uid,
        Messages:(state.Message===undefined) ? '' : state.Message.Chat
    }  
};
export default connect(MapStateToProps,MapDispatchToProps)(Chat)



// export default Chat