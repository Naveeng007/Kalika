const Posts=[]
const PostState={
    PostId,
    UserId,
    Text,
    Photo,
    CreatedOn,
    username,
    
}={}

const ActivityReducer=(state=PostState,action)=>{
    switch(action.type){
        case "CreatePost":
            Posts.push(state);
            break;
        case "DeletePost":
            return state.map((post)=>{
                post.PostId!=action.PostId
            })
        case "EditPost":
            return state
        default:
            return state;
    }
}

export default ActivityReducer