const Posts=[]


const PostReducer=(state=Posts,action)=>{
    switch(action.type){
        case 'Liked':
            let change=0;
            
            return {
                ...state,
                Likes:state.Likes+1,
                Dislikes:state.Dislikes+change
            }
            

        case "Disliked":
             change=0;
            //if liked make make liked=0
            return{
                ...state,
                Dislikes:state.Dislikes+1,
                Likes:state.Likes+change
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
            return action.Post
        default: 
            return state;
            


    }
}

export default PostReducer;