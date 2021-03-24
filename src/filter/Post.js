

export default (Post) =>{
    console.log('called')
return   Post.sort((a, b) => {
   
        return a.createdAt < b.createdAt ? 1 : -1;
    });
}