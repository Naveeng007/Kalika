
export const CreateActivity=({UserId,Text}={})=>({
    type:'CreatePost',
    UserId,
    Text
})

export const DeleteActivity=({UserId,ActivityId})=>({
    action:'DeletePost',
    UserId,
    ActivityId
})

export const SetActivity=(Activity)=>({
    type:'SetActivity',
    Post

})


