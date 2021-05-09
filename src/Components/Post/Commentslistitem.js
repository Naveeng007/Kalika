import React from 'react'
class CommentList extends React.Component {
    constructor(props){//we are using props which is send from another component
        super(props)
        // console.log('CommentList',props)
    }

    onDeleteComment=()=>{
        // console.log('Deleting comment from CL')
        this.props.onDeleteComment(this.props.PostId,this.props.CommentId)//..............................
    }
    render(){
        return (
                <div className="comment">
                            <img className="comment-top-photo" src={this.props.imgUrl}/>
                            <div className="comment-text">
                                <p ><strong>{this.props.displayName}</strong></p>
                                <p>{this.props.Comment_Text} </p>
                            </div>
                            {this.props.CurrentUserId===this.props.UserId && <div className="post-feature">
                                {/* <button name="delete" className="logout-button">Logout</button> */}
                                
                                {    <input type="image" onClick={this.onDeleteComment}  className="logout-button" width="20px" height="20px" margin-right="5px" src="./images/delete.png" />}
                            </div>}
                            
                </div>
        )
    }
}

export default CommentList

