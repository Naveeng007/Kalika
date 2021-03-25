const Posts=[]


const PostReducer=(state=Posts,action)=>{
    switch(action.type){
        case 'LikePost':
            let change=0;
                return state.filter((post)=>{
                if(action.PostId===post.PostId)
                    {
                        console.log(post)
                    }
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
           return [
               ...state,
               action.Post
           ]
        case "DeletePost":
            console.log("State from Post Reducer",state)
            console.log('Actioin from DeletePost',action)
            return state.filter(({PostId})=> PostId!=action.PostId)//this should automatically return
            
        
        case "EditPost"://to be implemented
            return state;
        case "SetPost":
            console.log('SetPost',action.Post)
            return action.Post
        default: 
            return state;
            


    }
}

export default PostReducer;