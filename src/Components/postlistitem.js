import React from 'react'
import {connect} from 'react-redux'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import {F_DeletePost,F_LikePost,F_DislikePost} from '../Action/Post'

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import 'highlight.js/styles/github.css';

class PostListitem extends React.Component {
    constructor(props){//we are using props which is send from another component
        super(props)
        // console.log('props from Listitem inner',props)
        
        let isLiked=false;
        props.Likes.forEach((like)=>{
            if(props.CurrentUserId===like.UserId)
            {
                isLiked=true;
                
            }
        })
         this.state={
            Likes:props.Likes.length,
            isLiked,
            isbookmarked:false
        }


    }

    DeletePost=(e)=>{
        console.log('Delete Post CLicked',this.props.PostId)
        this.props.F_DeletePost(this.props.PostId)
    }

    onLikePost=()=>{
        console.log('Like Post CLicked',this.state.Likes)
        this.props.F_LikePost(this.props.PostId)
    }
    onDislikePost=()=>{
        console.log('Dislike Post CLicked',this.props.PostId)
        this.props.F_DislikePost(this.props.PostId)
    }
    onBookmark=()=>{
        this.setState(()=>({isbookmarked:!this.state.isbookmarked}))
    }
    render() {
        return (
            <div className={`post`}>
                {/* {console.log('index',this.props.indx+1)} */}
                <div className="post-top">
                    <div className="post-top-username-div">
                        <img className="post-top-photo" src={this.props.imgUrl}/>
                        <div className="post-name-time">
                            <p className="username-text">{this.props.Username}</p>
                            <h5 className="username-text">{format(new Date(this.props.CreatedAt), 'PPPP') }</h5>
                        </div>
                        
                    </div>

                    <div className="post-top-delete">
                   {this.props.CurrentUserId===this.props.UserId && <div className="post-feature">
                        {/* <button name="delete" className="logout-button">Logout</button> */}
                        
                        {    <input type="image" onClick={this.DeletePost}  className="logout-button" width="20px" height="20px" margin-right="5px" src="./images/delete.png" />}
		            </div>}
                    <div className="post-feature">
                        {/* <button name="delete" className="logout-button">Logout</button> */}
                        
                        {!this.state.isbookmarked &&    <input type="image" onClick={this.onBookmark}   className="logout-button"   src="./images/unbookmarked.png" />}
                        {this.state.isbookmarked &&    <input type="image" onClick={this.onBookmark}   className="bookmarked"   src="./images/bookmark.png" />}
		            </div>
                
                    </div>
                </div>
                 {/* <code>{hljs.highlight(this.props.Text, {language: 'javascript'}).value} </code>   */}
                <div className="post-textarea">
               
                     
                    <p> {this.props.Text}  </p>
                </div>

                <div className="post-feedbacks">
                    <div className="like">
                            {/* <button className="like-button">Like</button> */}
                            {!this.state.isLiked&&<input onClick={this.onLikePost} type="image"  className="like-button" width="20px" height="20px" src="./images/like.png" />}
                            {this.state.isLiked&&<input type="image"  className="like-button" width="20px" height="20px" src="./images/liked.png" />}
                            <p className="like-count">{this.state.Likes}</p>
                    </div>
                    <div className="like">

                            <input type="image"  className="like-button" width="20px" height="20px" src="./images/comment.png" />
            
                    </div>
                    {/* <div className="like"> */}
                            {/* <button className="like-button">Like</button>
                            {!this.state.isLiked&&<input onClick={this.onLikePost} type="image"  className="like-button" width="20px" height="20px" src="./images/blank_love.png" />}
                            {this.state.isLiked&&<input type="image"  className="like-button" width="20px" height="20px" src="./images/flower-bouquet.png" />}
                            <p className="like-count">{this.state.Likes}</p> */}
                    {/* </div> */}

                    {/* <div className="dislike"> */}
                            {/* <button className="dislike-button">Dislike</button> */}
                            {/* <input onClick={this.onDislikePost} type="image"  className="dislike-button" width="20px" height="20px" src="./images/dislike.png" />
                            {false&&<input type="image"  className="dislike-button" width="20px" height="20px" src="./images/disliked.png" />}
                            <p className="like-count">{}</p> */}
                    {/* </div> */}
                
            </div>
            <div className="post">
                    <div className="comment-post-textarea">
                        <img className="comment-top-photo" src={this.props.imgUrl}/>
    
                        <textarea 
                        className="submit-post-Title"  
                        placeholder="Enter Text"
                        id="comment-post-Title"
                        >
                            
						</textarea>
                        <div className="send-top-photo">
							<input type="image"   className="username-text" width="20px" height="20px" src="./images/send.png" />
						</div>
                        
					</div>
               </div>
        </div>

        )
    }
}

const mapStateToProps=(state,getState) =>{
    // console.log('ddddddddddddddddddd',state)
    return{
        CurrentUserId:state.auth.uid,
    }   
}
const mapDispatchToProps=(dispatch) =>{
    return{
        F_DeletePost:(PostId)=>dispatch(F_DeletePost(PostId)),
        F_LikePost:(PostId)=>dispatch(F_LikePost(PostId)),
        F_DislikePost:(PostId)=>dispatch(F_DislikePost(PostId)),
    }   
}

export default connect(mapStateToProps,mapDispatchToProps)(PostListitem) 
// export default PostListitem