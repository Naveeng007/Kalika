import React from 'react' 

class Userslistitem extends React.Component {
    constructor(props){
        super(props)
        console.log('usersssss',props)

    }
    Cliked=()=>{
        console.log('clicked on User ',this.props.User.Username)
        this.props.OnUserClick(this.props.User);
    }
    render() {
        return (
            <div className="Online-users">
                        <div>
                            <img className="post-top-photo" src={this.props.User.imgUrl}/>
                        </div>
                       
                        <div className="user-message-info" onClick={this.Cliked}>
                            <p className='user'>{this.props.User.Username}</p>
                            <p className='last-message'>hi there!!</p>
                        </div>
                        
                    </div>
        )
    }
}



export default Userslistitem