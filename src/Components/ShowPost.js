import React from 'react'
import {FCreatePost} from '../Action/Post'
import PostListitem from './postlistitem'
import CreatePost from './CreatePost'
import filter from '../filter/Post'
import {connect} from 'react-redux'
class Post extends React.Component {
    constructor(props) {
        console.log('Props from ShowPost',props)
        super(props)
        this.state={
            imgUrl:'',
            Username:'',
            Email:'',
        }
        props.Users.forEach(user =>{
            console.log(user.UserId,'=======',props.uid,user)
            if(user.UserId===props.uid){
                this.state.imgUrl=user.imgUrl,
                this.state.Username=user.Username
                this.state.Email=user.Email
                
                // this.setState({Username:user.Username})
                // this.setState({Email:user.Email})
            }
        })
        
    }
    onSubmit=(Post)=>{
        this.props.FCreatePost(Post)
    }

 

   render() {
       return (
           <div className="page">
               <CreatePost
                Username={this.state.Username}
                imgUrl={this.state.imgUrl}
                onSubmit={this.onSubmit} />

            {/* {console.log("from post PostListitem showpost",this.props.Post)} */}

                {this.props.Post.map((post)=>{
                   
                    // console.log('incrment',this.state.i)
                    return  <PostListitem key={post.PostId+`${post.Likes.length}`}  {...post}  />//key updated because it will update that
                })}
              
           </div>
       )
   }
}

const MapDispatchToProps=(dispatch)=>{
    // console.log('dispatch checkpoint')
return{
    FCreatePost: (Post)=>dispatch(FCreatePost(Post))//in js any function we treat as an object and hence passing as props
}  
};

const mapStateToProps=(state)=>{
    console.log('States',state)
    // console.log('ShowPost state',state.Post)
    return{
        Post:filter(state.Post),
        uid:state.auth.uid,//adding expenses props to ExpenseList
        Users:state.Chat
    }
}
export default connect(mapStateToProps,MapDispatchToProps)(Post) 
// export default Post