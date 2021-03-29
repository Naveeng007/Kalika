const give_likes=(PostId)=>{

    return (dispatch)=>{
       return database.ref(`Posts/${PostId}/Likes`).once('value').then((snapshot)=>{
         const Likes=[]
           snapshot.forEach((snapshotChild)=>{
           Likes.push({
             LikeId:snapshotChild.key,
             UserId:snapshotChild.val(),
           })
         })
         return Likes
       })
       
     }
     }
       
   
   
   // export const F_SetPost=()=>{
   //     return   (dispatch)=>{
   //       const Post=[]
   //         return  database.ref(`Posts`).once('value').then((snapshot)=>{
             
   //            snapshot.forEach((snapshotChild)=>{
   //            give_likes(snapshotChild.key).then((Likes)=>{
   //              console.log('sddddddddd',Likes)
   //              Post.push({
   //               PostId:snapshotChild.key,
   //               ...snapshotChild.val(),
   //               Likes
                 
   //             })
   //            })
   //           })
               
             
            
             
            
   //         }).then(()=>{
   //           console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',Post)
   //           const test=Post.map((post)=>false)
   //           console.log(test)
   //           dispatch(SetPost(Post))
   //         }
             
   //         )
   //     }
   //   }
   
   