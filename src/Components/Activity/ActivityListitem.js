import React from 'react'
import {connect} from 'react-redux'
import { format } from 'date-fns'
import {F_DeleteActivity} from '../../Action/Activity'
class ActivityListitem extends React.Component {
    constructor(props){//we are using props which is send from another component
        super(props)
        // console.log('props from Activity inner',props)
        
    }

    DeleteActivity=(e)=>{
        // console.log('Delete Activity CLicked',this.props.ActivityId)
        this.props.F_DeleteActivity(this.props.ActivityId)
    }

    render() {
        return (
            <div className={`post${this.props.indx+1}`} id="Activity-post">
                {/* {console.log('index',this.props.indx+1)} */}
                <div className="post-top">
                    <div className="post-top-username-div">
                        {/* <img className="post-top-photo" src={'./images/chasma.jpg'}/> */}
                        <div className="post-name-time">
                            <p className="activity-title">{this.props.Title}</p>
                            <h6 className="username-text">{format(new Date(this.props.CreatedAt), 'PPPP') }</h6>
                        </div>
                        
                    </div>

                    <div className="post-top-delete">
                    { <input type="image" onClick={this.DeleteActivity}  className="username-text" width="20px" height="20px" src="./images/delete.png" />}
                    </div>
                </div>

                <div className="post-textarea">
                    <p> {this.props.Text}  </p>
                </div>
        </div>

        )
    }
}

const mapStateToProps=(state) =>{
    return{
        CurrentUserId:state.auth.uid,
        name:state.auth.displayName,
        img:state.auth.photoURL,
    }   
}
const mapDispatchToProps=(dispatch) =>{
    return{
        F_DeleteActivity:(ActivityId)=>dispatch(F_DeleteActivity(ActivityId)),
    }   
}

export default connect(mapStateToProps,mapDispatchToProps)(ActivityListitem) 
