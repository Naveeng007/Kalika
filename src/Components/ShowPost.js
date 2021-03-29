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
      
        
    }
    onSubmit=(Post)=>{
        this.props.FCreatePost(Post)
    }

 

   render() {
       return (
           <div className="page">
               <CreatePost
                onSubmit={this.onSubmit}/>

            {console.log("from post PostListitem showpost",this.props.Post)}

                {this.props.Post.map((post)=>{
                   
                    // console.log('incrment',this.state.i)
                    return  <PostListitem key={post.PostId+`${post.Likes.length}`}  {...post} />//key updated because it will update that
                })}
              
           </div>
       )
   }
}

const MapDispatchToProps=(dispatch)=>{
    console.log('dispatch checkpoint')
return{
    FCreatePost: (Post)=>dispatch(FCreatePost(Post))//in js any function we treat as an object and hence passing as props
}  
};

const mapStateToProps=(state)=>{
    console.log('States',state)
    console.log('ShowPost state',state.Post)
    return{
        Post:filter(state.Post)//adding expenses props to ExpenseList
    }
}
export default connect(mapStateToProps,MapDispatchToProps)(Post) 
// export default Post