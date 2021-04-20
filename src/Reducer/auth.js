export default (state={},action)=>{
    switch(action.type){
        case 'LOGIN':
            return{
                uid:action.uid,
                imgUrl:action.imgUrl,
                DisplayName:action.displayName,
                Email:action.email
            };
        case 'LOGOUT':
            return{}
        default:
            return state;
    }
} 