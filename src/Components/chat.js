import React from 'react'
class Chat extends React.Component{
    constructor(props){
        super(props)
        console.log('from chat-------',props)
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

                    <div className="chat-box">
                        <div className="user1-message">
                        <p className="Chat-message">RoomId {this.props.RoomId}</p>



                        <p > I’m currently Student </p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user2-message">
                        <p > I’m currently Student</p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user1-message">
                        <p > I’m currently Student </p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user2-message">
                        <p > I’m currently Student</p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user1-message">
                        <p > I’m currently Student </p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user2-message">
                        <p > I’m currently Student</p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user1-message">
                        <p > I’m currently Student </p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user2-message">
                        <p > I’m currently Student</p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user1-message">
                        <p > I’m currently Student </p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user2-message">
                        <p > I’m currently Student</p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user1-message">
                        <p > I’m currently Student </p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        <div className="user2-message">
                        <p > I’m currently Student</p>
                        <h5>Satruday 22 july 10 am</h5>
                        </div>
                        
                        
                       
                        
                    </div>

                    <div className="chat-type-box-div">
                        <textarea className="chat-type-box"  placeholder="hi">
                        </textarea>
                        <div className="post-top-delete">
							<input type="image"  className="username-text" width="20px" height="20px" src="./images/send.png" />
						</div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Chat