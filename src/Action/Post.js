import database from '../firebase/firebase'
export const CreatePost=(Post={})=>({
    type:'CreatePost',
    Post
    
})

export const FCreatePost=(PostData={})=>{
    return (dispatch,getState)=>{//we are able to return dispatch due to redux-thunk
      const UserId=getState().auth.uid;
      const {
        Text = '',//these are default values of parameters
        Photo='',
        CreatedAt = 0,
        Likes=0,
        Dislikes=0
      }=PostData;
  
      const Post={Text ,Photo ,CreatedAt,UserId,Likes,Dislikes};
      console.log("CreatePost", Post);
  
      database.ref(`Posts`).push(Post).then((ref)=>{
       dispatch(CreatePost({
        PostId:ref.key,//check it is post id or not
        ...Post
       }))
      })
    }
  }
export const DeletePost=(PostId={})=>({
    type:'DeletePost',
    PostId
})

export const F_DeletePost=(PostId={})=>{
  return (dispatch,getState)=>{
    // const uid=getState().auth.uid;
    return database.ref(`Posts/${PostId}`).remove().then(()=>{
      console.log('Post Deleted',PostId);
      dispatch(DeletePost(PostId));//also check without braces
    })
  }
}

export const EditPost=({Photo,Text,UserId,CreatedAt}={})=>({
    type:'EditPost',
    Photo,
    Text,
    UserId,
    CreatedAt
})

export const LikePost=({UserId,PostId}={})=>({
    type:'LikePost',
    PostId
})

export const F_LikePost=(PostId={})=>{
  return (dispatch,getState)=>{
    // const uid=getState().auth.uid;
    return database.ref(`Posts/${PostId}`).remove().then(()=>{
      console.log('Post Liked',PostId);
      dispatch(LikePost(PostId));//also check without braces
    })
  }
}


export const DislikePost=({UserId,PostId}={})=>({
    type:'DislikePost',
    PostId
})

export const F_DislikePost=(PostId={})=>{
  return (dispatch,getState)=>{
    // const uid=getState().auth.uid;
    return database.ref(`Posts/${PostId}`).remove().then(()=>{
      console.log('Post Deleted',PostId);
      dispatch(DislikePost(PostId));//also check without braces
    })
  }
}

export const Comment=({UserId,PostId,Comment}={})=>({
    type:'Comment',
    UserId,
    PostId,
    Comment

})
export const SetPost=(Post)=>({
    type:'SetPost',
    Post
})



export const F_SetPost=()=>{
    return (dispatch)=>{
        return  database.ref(`Posts`).once('value').then((snapshot)=>{
          const Post=[]
          snapshot.forEach((snapshotChild)=>{
            Post.push({
              PostId:snapshotChild.key,
              ...snapshotChild.val()
            })
          })
          dispatch(SetPost(Post))
        })
    }
  }