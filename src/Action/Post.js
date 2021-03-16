
export const CreatePost=({Photo,Text,UserId,CreatedAt}={})=>({
    type:'CreatePost',
    Photo,
    Text,
    UserId,
    CreatedAt
})

export const DeletePost=({UserId,PostId}={})=>({
    type:'DeletePost',
    UserId,
    PostId
})

export const EditPost=({Photo,Text,UserId,CreatedAt}={})=>({
    type:'EditPost',
    Photo,
    Text,
    UserId,
    CreatedAt
})

export const LikePost=({UserId,PostId}={})=>({
    type:'LikePost',
    UserId,
    PostId
})
export const DislikePost=({UserId,PostId}={})=>({
    type:'DislikePost',
    UserId,
    PostId
})
export const Comment=({UserId,PostId,Comment})=>({
    type:'Comment',
    UserId,
    PostId,
    Comment

})
export const SetPost=(Post)=>({
    type:'SetPost',
    Post
})