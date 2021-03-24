import React from 'react'
import CreateActivity from './CreateActivity'
import Activitylist from './activitylist'


class Activity extends React.Component {
     render() {
         return (
            <div className="Activity">
            <h2 className="title"> Notes</h2>

                <CreateActivity/>
                <Activitylist/>
            
            </div>
         )
     }
}

export default Activity;