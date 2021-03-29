import database from '../firebase/firebase'
import moment from 'moment'

export const CreateActivity=(Activity={})=>({
    type:'CreateActivity',
    Activity
    
})

export const FCreateActivity=(ActivityData={})=>{
    return (dispatch,getState)=>{//we are able to return dispatch due to redux-thunk
      const UserId=getState().auth.uid;
      const {
        Text = '',//these are default values of parameters
        Photo='',
        CreatedAt = 0,
        indx=0
      }=ActivityData;

      const Activity={Text ,Photo ,CreatedAt,UserId,indx};
      Activity.CreatedAt=moment().valueOf()
      database.ref(`${UserId}/Activity`).push(Activity).then((ref)=>{
       dispatch(CreateActivity({
        ActivityId:ref.key,//check it is post id or not
        ...Activity,
       }))
      })
    }
  }
export const DeleteActivity=(ActivityId={})=>({
    type:'DeleteActivity',
    ActivityId
})

export const F_DeleteActivity=(ActivityId={})=>{
  return (dispatch,getState)=>{
    const UserId=getState().auth.uid;
    return database.ref(`${UserId}/Activity/${ActivityId}`).remove().then(()=>{
      console.log('Activity Deleted',ActivityId);
      dispatch(DeleteActivity(ActivityId));
    })
  }
}

export const EditActivity=({Photo,Text,UserId,CreatedAt}={})=>({
    type:'EditActivity',
    Photo,
    Text,
    UserId,
    CreatedAt
})



export const SetActivity=(Activity={})=>({
    type:'SetActivity',
    Activity,
    
})

export const F_SetActivity=()=>{
    return    (dispatch,getState)=>{
      const Activity=[]
        const UserId=getState().auth.uid;
        return  database.ref(`${UserId}/Activity`).once('value').then((snapshot)=>{
            let i=0;
           snapshot.forEach((snapshotChild)=>{
            Activity.push({
                ActivityId:snapshotChild.key,
              ...snapshotChild.val(),
              indx:i%5
            })
            i++;
          })
           console.log('from set Activity',Activity)
           dispatch(SetActivity(Activity))
        })
    }
  }