import React from 'react'
import Activity from './ShowActivity'
import Post from './ShowPost'
import Message from './message'
import Chat from './chat'
class WholePage extends React.Component {

   render() {
       return (
           <div className="Whole_page">
               <Activity/>
               <Post/>
               {/* {false&&<Message/>} */}
               <Chat/>
           </div>
       )
   }
}

export default WholePage