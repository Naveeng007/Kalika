import React from 'react'
import Activity from './ShowActivity'
import Post from './ShowPost'
import Message from './message'
import Chat from './chat'

class WholePage extends React.Component {
    constructor(props){
        super(props);
    }

    state={
        ischat: false
    }

   render() {
       return (
           <div className="Whole_page">
               <Activity/>
               <Post/>
               {true&&<Message/>}
               {false && <Chat/>}
           </div>
       )
   }
}

export default WholePage