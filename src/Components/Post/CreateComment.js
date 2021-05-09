import React from 'react'
import {connect} from 'react-redux'
import {F_CommentPost} from '../../Action/Post'
class CreateComment extends React.Component {
    constructor(props){//we are using props which is send from another component
        super(props)

        this.state = {
            Text:'',
            error:''
        }
    }

    onCommentChange=(event) =>{
        const Text=event.target.value

        if(Text.length>300){//if u want words less than 10 ... Title.split(" ").length>10||
            this.setState(()=>({error:'Comment must contain less than 300 characters'}))
        }
        else
        {
            this.setState(()=>({error:''}))
            this.setState(()=>({Text}))
        }
        
    }

    onSubmit=async(e)=>{
        e.preventDefault()
        if(!this.state.Text){
            this.setState(()=>({error:'Title and Text  is required'}))
        }
        else{
            this.setState(()=>({error:''}))//this function must retur
         await   this.props.F_CommentPost({
                PostId:this.props.PostId,
                Comment_Text:this.state.Text
               
            })
            this.setState(()=>({Text:''}))
            this.props.onCommentOpen();
        }
    }

    render(){
        return (
            <div className="comment-post">
                <div className="comment-post-textarea">
                    <img className="comment-top-photo" src={this.props.imgUrl}/>
                
                    <textarea 
                    className="submit-post-Title"  
                    placeholder="Enter Text"
                    id="comment-post-Title"
                    value={this.state.Text}
                    onChange={this.onCommentChange}
                    >
                    </textarea>

                    <div className="send-top-photo">
                        <input type="image" onClick={this.onSubmit}   className="username-text" width="20px" height="20px" src="./images/sent.png" />
                    </div>
                    
                </div>
        </div>
        )
    }
}


const MapDispatchToProps=(dispatch)=>{
return{
        F_CommentPost: (PostId,Comment_Text)=>dispatch(F_CommentPost(PostId,Comment_Text))//in js any function we treat as an object and hence passing as props
    }  
};

const mapStateToProps=(state)=>{
    return{
        imgUrl:state.auth.imgUrl,
    }
}
export default connect(mapStateToProps,MapDispatchToProps)(CreateComment) 
