import React from 'react'
import {FCreateActivity} from '../Action/Activity'
import ActivityListitem from './ActivityListitem'
import CreateActivity from './CreateActivity'
import filter from '../filter/Post'
import Notes_filter from '../filter/Notes'
import {connect} from 'react-redux'
import NotesFilter from './Notes_Filter'
class Activities extends React.Component {
    constructor(props) {
        // console.log('Props from ShowActivity',props)
        super(props)
      
        
    }
    onSubmit=(Activity)=>{
        // console.log('activity create submitted',Activity)
        this.props.FCreateActivity(Activity)
    }

 

   render() {
       return (
           <div className="page-Activity">
                   <h2 className="title">Personal Notes</h2>
               <CreateActivity
                onSubmit={this.onSubmit}/>

                <NotesFilter/>
                
            {/* {console.log("from Activity ActivityListitem ",this.props.Activity)} */}

                {/* if(this.props.Activity) */}
                {this.props.Activity&&this.props.Activity.map((activity)=>{
                   
                   
                    return  <ActivityListitem key={activity.ActivityId}  {...activity} />//key updated because it will update that
                })}
           </div>
       )
   }
}

const MapDispatchToProps=(dispatch)=>{
    // console.log('dispatch checkpoint')
return{
    FCreateActivity: (Activity)=>dispatch(FCreateActivity(Activity))//in js any function we treat as an object and hence passing as props
}  
};

const mapStateToProps=(state)=>{
    // console.log('States||||||||',state)
    // console.log('ShowActivity state',state)
    return{
        Activity:Notes_filter(state.Activity,state.Filter)//adding expenses props to ExpenseList

    }
}
export default connect(mapStateToProps,MapDispatchToProps)(Activities) 
