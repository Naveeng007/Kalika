const Posts=[]
const PostState={
    PostId,
    Likes,
    Dislikes,
    UserId,
    Text,
    Photo,
    CreatedOn,
    CreatedBy,
    
}={}

const PostReducer=(state=PostState,action)=>{
    switch(action.type){
        case 'Liked':
            return {
                ...state,
                Likes:state.Likes+1,
                Dislikes:state.Dislikes+change
            }
            break;//something gdbd

        case "Disliked":
            let change=0
            //if liked make make liked=0
            return{
                ...state,
                Dislikes:state.Dislikes+1,
                Likes:state.Likes+change
            }
            break;
        case "CreatePost":
            Posts.push(state);
            break
        case "DeletePost":
            return state.map((post)=>{
                post.PostId!=action.PostId
            })
        case "EditPost":
            


    }
}