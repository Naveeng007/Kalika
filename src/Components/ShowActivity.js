import React from 'react'
import {FCreateActivity} from '../Action/Activity'
import ActivityListitem from './Activitylistitem'
import CreateActivity from './CreateActivity'
import filter from '../filter/Post'
import {connect} from 'react-redux'
class Activity extends React.Component {
    constructor(props) {
        console.log('Props from ShowActivity',props)
        super(props)
      
        
    }
    onSubmit=(Activity)=>{
        this.props.FCreateActivity(Activity)
    }

 

   render() {
       return (
           <div className="page-Activity">
               <CreateActivity
                onSubmit={this.onSubmit}/>
                
            {/* {console.log("from Activity ActivityListitem showActivity",this.props.Activity)}
                if(this.props.Activity)
                {this.props.Activity.map((activity)=>{
                   
                    // console.log('incrment',this.state.i)
                    return  <ActivityListitem key={activity.ActivityId+`${activity.Likes.length}`}  {...activity} />//key updated because it will update that
                })} */}
                <p>hello</p>
              
           </div>
       )
   }
}

const MapDispatchToProps=(dispatch)=>{
    console.log('dispatch checkpoint')
return{
    FCreateActivity: (Activity)=>dispatch(FCreateActivity(Activity))//in js any function we treat as an object and hence passing as props
}  
};

const mapStateToProps=(state)=>{
    console.log('States',state)
    console.log('ShowActivity state',state.Activity)
    return{
        Activity:filter(state.Activity)//adding expenses props to ExpenseList
    }
}
export default connect(mapStateToProps,MapDispatchToProps)(Activity) 
