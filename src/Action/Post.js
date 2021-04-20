import Post from '../filter/Post';
import database from '../firebase/firebase'
import moment from 'moment'
export const CreatePost=(Post={})=>({
    type:'CreatePost',
    Post
    
})

export const FCreatePost=(PostData={})=>{
    return (dispatch,getState)=>{//we are able to return dispatch due to redux-thunk
      const UserId=getState().auth.uid;
      var imgUrl='';
      var Email='Your Email';
      var Username='Your Name';

      const UserList=getState().Chat;

      UserList.forEach((user)=>{
        // console.log(user.UserId,'--hi--',UserId)
        if(user.UserId===UserId){
            imgUrl=user.imgUrl;
            Username=user.Username;
            Email=user.Email;
        }
      })

      const {
        Text = '',//these are default values of parameters
        Photo='',
        CreatedAt = 0,
        Likes=[],
        Dislikes=[],
        indx=0
      }=PostData;
  
      const Post={Text ,Photo ,CreatedAt,UserId,Likes,Dislikes,indx,imgUrl,Username,Email};
      Post.CreatedAt=moment().valueOf()
      database.ref(`Posts`).push(Post).then((ref)=>{
       dispatch(CreatePost({
        PostId:ref.key,//check it is post id or not
        ...Post,
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

export const LikePost=(UserId={},LikeId={},PostId={})=>({
    type:'LikePost',
    LikeId,
    UserId,
    PostId
})

export const F_LikePost=(PostId={})=>{
  return (dispatch,getState)=>{
    const UserId=getState().auth.uid;
    return database.ref(`Posts/${PostId}/Likes`).push(UserId).then((e)=>{
      console.log('Post Liked',e.key);
      dispatch(LikePost(UserId,e.key,PostId));//also check without braces
    })
  }
}


export const CommentPost=(UserId={},LikeId={},PostId={},Comment='',imgUrl={},displayName='',CreatedAt)=>({
  type:'CommentPost',
  LikeId,
  UserId,
  PostId,
  imgUrl,
  Comment,
  displayName,
  CreatedAt
})

export const F_CommentPost=({PostId,Comment_Text=''})=>{
return (dispatch,getState)=>{
  const UserId=getState().auth.uid;
  const imgUrl=getState().auth.imgUrl;
  const CreatedAt=moment().valueOf()
  const displayName=getState().auth.DisplayName;
  const Comment={
    UserId,
    PostId,
    Comment_Text,
    imgUrl,
    displayName,
    CreatedAt
  };
  console.log('Comment Creating.............',PostId)
  return database.ref(`Posts/${PostId}/Comment`).push(Comment).then((e)=>{
    console.log('Commented',e.key);
    dispatch(CommentPost(UserId,e.key,PostId,Comment_Text,imgUrl,displayName,CreatedAt));//also check without braces
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


export const SetPost=(Post={})=>({
    type:'SetPost',
    Post,
    
})

export const F_SetPost=()=>{
    return    (dispatch,getState)=>{
      const Post=[]

        return  database.ref(`Posts`).once('value').then((snapshot)=>{
            let i=0;
           snapshot.forEach((snapshotChild)=>{
            //  console.log('l')
             const Likes=[]
             const Comment=[]
              if(snapshotChild.val().Likes)
                Object.entries(snapshotChild.val().Likes).map(item => {
                  Likes.push({
                    LikeId:item[0],
                    UserId:item[1],
                    PostId:snapshotChild.key
                  })
                })
                // Comment part
              if(snapshotChild.val().Comment)
                Object.entries(snapshotChild.val().Comment).map(item => {
                  Comment.push({
                    CommentId:item[0],
                    ...item[1],
                    // PostId:snapshotChild.key
                  })
                })

             Post.push({
              PostId:snapshotChild.key,
              ...snapshotChild.val(),
              Likes,
              Comment,
              indx:i%5
            })
            i++;
          })
           console.log('from set Post',Post)
           dispatch(SetPost(Post))
        })
        
    }
  }