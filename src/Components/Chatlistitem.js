import React from 'react' 
import { format } from 'date-fns'
class Chatlistitem extends React.Component {
    constructor(props){
        super(props)
        console.log('Hellooooooooooo',props)
        this.state={
            UserNumber:(this.props.UserId===this.props.SenderId)?1:2
        }

    }

    render() {
        return (
            <div >
                    
            <div className={`user${this.state.UserNumber}-message`}>         
            <p > {this.props.Message}</p>
            <h5>{format(new Date(this.props.CreatedAt), 'PPPP') }</h5>
            </div>
            </div>
        )
    }
}



export default Chatlistitem