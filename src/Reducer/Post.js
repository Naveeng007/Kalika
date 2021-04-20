const Posts=[]


const PostReducer=(state=Posts,action)=>{
    switch(action.type){
        case 'LikePost':
            let change=0;
            //    const newstate= state
            //    console.log('from like Reducer')
            //    newstate[action.PostId] = action.UserId
            // const newstate= []
            return state.map((post)=>{
                if(post.PostId===action.PostId){
                    // console.log(post.PostId,'----',action)
                    post.Likes.push({
                        LikeId: action.LikeId,
                        UserId: action.UserId,
                        PostId: action.PostId
                    })
                }
                return post
            })
            
        case "DislikePost":
             change=0;
            //if liked make make liked=0
            const Dislike=state.Dislikes
            return {
                ...state,
                Dislikes:Dislike.push(action.UserId),
            }
            
        case "CreatePost":
            console.log('createing post',state);
            action.Post.indx=(state.length+1)%5
           return [
               ...state,
               action.Post,
            //    indx=state.length+1
           ]
        case "DeletePost":
            console.log("State from Post Reducer",state)
            console.log('Actioin from DeletePost',action)
            return state.filter(({PostId})=> PostId!=action.PostId)//this should automatically return
            
        case "CommentPost":
            console.log("State from Comment",action)
            return state.map((post)=>{
                if(post.PostId===action.PostId){
                    // console.log(post.PostId,'----',action)
                    post.Comment.push({
                        LikeId: action.LikeId,
                        UserId: action.UserId,
                        PostId: action.PostId,
                        imgUrl: action.imgUrl,
                        CreatedAt: action.CreatedAt,
                        Comment_Text: action.Comment,
                        displayName: action.displayName
                    })
                }
               
                return post
            })

            
        case "EditPost"://to be implemented
            return state;
        case "SetPost":
           return action.Post
        default: 
            return state;
    }
}

export default PostReducer;