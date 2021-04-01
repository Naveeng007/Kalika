

export default (Post) =>{
    // console.log('called')
    if(Post===undefined)
    return Post
    for(let i=0;i<Post.length;i++){
        // console.log('outer',Post[i].CreatedAt)
        for(let j=i+1;j<Post.length;j++){
            // console.log('inner',Post[j].CreatedAt)
            if(Post[j].CreatedAt>Post[i].CreatedAt){
                const temp=Post[i];
                Post[i]=Post[j];
                Post[j]=temp
                // console.log('....................................')
            }
        }
    }
    // console.log(Post)
    return Post;
}