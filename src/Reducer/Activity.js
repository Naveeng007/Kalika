const Activity=[]

const ActivityReducer=(state=Activity,action)=>{
    switch(action.type){
        
        case "CreateActivity":
            console.log('createing Activity',state);
            action.Activity.indx=(state.length+1)%5
           return [
               ...state,
               action.Activity,
            //    indx=state.length+1
           ]
        case "DeleteActivity":
            console.log("State from Activity Reducer",state)
            console.log('Actioin from DeleteActivity',action)
            return state.filter(({ActivityId})=> ActivityId!=action.ActivityId)//this should automatically return
            
        
        case "EditActivity"://to be implemented
            return state;
        case "SetActivity":
           return action.Activity
        default: 
            return state;
    }
}

export default ActivityReducer;