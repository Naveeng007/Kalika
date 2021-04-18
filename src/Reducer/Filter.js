const filter={Text:''}

const FilterReducer=(state=filter,action)=>{
    switch(action.type){
        
        case "NotesFilter"://to be checked
            return {
                ...state,
                Text: action.Text
            }
        //    console.log(action.Text,'<-------')
        //     return  state.filter((Note) => {
        //         const textMatch = Note.Text.toLowerCase().includes(action.Text.toLowerCase());
        //         return  textMatch;
        //       }).sort((a, b) => {
        //           return a.CreatedAt < b.CreatedAt ? 1 : -1;
        //       });

        default: 
            return state;
    }
}

export default FilterReducer;