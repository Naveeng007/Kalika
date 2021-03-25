import Post from '../filter/Post';
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
        Likes=[],
        Dislikes=[]
      }=PostData;
  
      const Post={Text ,Photo ,CreatedAt,UserId,Likes,Dislikes};
      console.log("CreatePost", Post);
      // var indx=-1;
      // for(let i=0;i<Post.Likes.length;i++)
      // {
      //   if(Post.Likes[i]==UserId)
      //       {
      //         console.log('Like ID FOUND',i);
      //         indx=i;
      //         break;
      //       }
      // }
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

export const LikePost=(UserId={},PostId={})=>({
    type:'LikePost',
    PostId,
    UserId
})

export const F_LikePost=(PostId={})=>{
  return (dispatch,getState)=>{
    const UserId=getState().auth.uid;
    return database.ref(`Posts/${PostId}/Likes`).push(UserId).then(()=>{
      console.log('Post Liked',PostId);
      dispatch(LikePost(UserId,PostId));//also check without braces
    })
  }
}


export const DislikePost=(UserId={},PostId={})=>({
    type:'DislikePost',
    PostId,
    UserId
})

export const F_DislikePost=(PostId={})=>{
  return (dispatch,getState)=>{
    const UserId=getState().auth.uid;
    return database.ref(`Posts/${PostId}/Dislikes`).Push(UserId).then(()=>{
      console.log('Post Deleted',PostId);
      dispatch(DislikePost(UserId,PostId));//also check without braces
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

const give_likes=(PostId)=>{
    return database.ref(`Posts/${PostId}/Likes`).once('value').then((snapshot)=>{
      const Likes=[]
      console.log('ayare')
      snapshot.forEach((snapshotChild)=>{
          console.log('sssssss',snapshotChild.val())
        Likes.push({
          LikeId:snapshotChild.key,
          UserId:snapshotChild.val(),
        })
      })
      return Likes
    })
    
  }


export const F_SetPost=()=>{
    return (dispatch)=>{
        return  database.ref(`Posts`).once('value').then((snapshot)=>{
          const Post=[]
          snapshot.forEach((snapshotChild)=>{
           give_likes(snapshotChild.key).then((Likes)=>{
             console.log('sddddddddd',Likes)
             Post.push({
              PostId:snapshotChild.key,
              ...snapshotChild.val(),
              Likes
              
            })
           }).then(()=>{
            console.log('qqqqqqqq',Post)
            dispatch(SetPost(Post))
           })
           
          })
         
        })
    }
  }