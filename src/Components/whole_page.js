import React from 'react'
import Activity from './ShowActivity'
import Post from './ShowPost'
import Message from './message'
class WholePage extends React.Component {

   render() {
       return (
           <div className="Whole_page">
               <Activity/>
               <Post/>
               <Message/>
           </div>
       )
   }
}

export default WholePage