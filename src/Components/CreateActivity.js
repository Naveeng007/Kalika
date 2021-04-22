import React from 'react'
import moment from 'moment'//for better understanding check official website

class CreateActivity extends React.Component {
    constructor(props) {
        super(props);
        // console.log('props',this.props)
// 
        this.state={
            Title: props.Activity?props.Activity.Title:'',
            Text:props.Activity?props.Activity.Text:'',
            CreatedAt:props.Activity?props.Activity.CreatedAt:moment(),
            error:''
        };

    }

    onTextChange=(event) =>{
        const Text=event.target.value

        if(Text.length>500){//if u want words less than 10 ... Title.split(" ").length>10||
            this.setState(()=>({error:'Text must contain less than 500 characters'}))
        }
        else
        {
            this.setState(()=>({error:''}))
            this.setState(()=>({Text}))
        }
        
    }

    onTitleChange=(event) =>{
        const Title=event.target.value
        if(Title.length>50){//if u want words less than 10 ... Title.split(" ").length>10||
            this.setState(()=>({error:'Title must contain less than 50 characters'}))
        }
        else
            {
                this.setState(()=>({error:''}))
                this.setState(()=>({Title}))
            }
    }

    onSubmit=(e)=>{
        e.preventDefault()
        if(!this.state.Text||!this.state.Title){
            this.setState(()=>({error:'Title and Text  is required'}))
        }
        else{
            this.setState(()=>({error:''}))//this function must retur
            this.props.onSubmit({
                Text:this.state.Text,
                Title:this.state.Title,
                CreatedAt:this.state.CreatedAt.valueOf()
            })

            this.setState(()=>({Text:''}))
            this.setState(()=>({Title:''}))
        }
    }

    render() {
        // console.log('properties',this.props)
        return(
            <div className="post">
                {/* {this.state.error&&<p className="error">{this.state.error}</p>} */}
                {this.state.error&&<div className="comment-post" id="error">
                    {<p className="error-text">{this.state.error}</p>}
                </div>}

                    <div className="create-post-textarea">

                        <textarea 
                        className="submit-post-Title"  
                        placeholder="Title Here"
                        value={this.state.Title}
                        onChange={this.onTitleChange}
                        >
						</textarea>

						<textarea 
                        className="submit-post-textarea"  
                        placeholder="hi"
                        value={this.state.Text}
                        onChange={this.onTextChange}
                        >
						</textarea>
					</div>

					<button onClick={this.onSubmit}  className="submit-Notes">Submit</button>

               </div>
        )
    }
}
export default CreateActivity