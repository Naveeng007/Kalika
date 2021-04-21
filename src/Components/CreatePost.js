import React from 'react'
import moment from 'moment'//for better understanding check official website

class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        // console.log('props from Create Post',props)

        this.state={
            Text:props.Post?props.Post.Text:'',
            CreatedAt:props.Post?props.Post.CreatedAt:moment(),
            error:'',
            img:{}
        };

    }
    handleImageAsFile=async(e)=>{
        const image = await e.target.files[0]
        this.setState(()=>({img:image}))
        // console.log('images........',this.state.img)
    }
    onTextChange=(event) =>{
        const Text=event.target.value
        if(Text.length>1000){//if u want words less than 10 ... Title.split(" ").length>10||
            this.setState(()=>({error:'Text must contain less than 1000 characters'}))
        }
        else
        {
            this.setState(()=>({error:''}))
            this.setState(()=>({Text}))
        }
        
    }

    onSubmit=(e)=>{
        e.preventDefault()
        if(!this.state.Text){
            this.setState(()=>({error:'Text is required'}))
        }
        else{
            this.setState(()=>({error:''}))//this function must retur
            this.props.onSubmit({
                Text:this.state.Text,
                CreatedAt:this.state.CreatedAt.valueOf()
            })


            this.setState(()=>({Text:''}))
        }
    }

    render() {
        // console.log('properties',this.props)
        return(
            <div className="post">
                {this.state.error&&<div className="comment-post" id="error">
                    {<p className="error-text">{this.state.error}</p>}
                </div>}
                
                    <div className="post-top">
						<div className="post-top-username-div">
                            <img className="post-top-photo" src={this.props.imgUrl}/>
							<p className="username-text">{this.props.Username}</p>
						</div>
					</div>


                
                    
                    <div className="create-post-textarea">
                        
						<textarea 
                        className="submit-post-textarea"  
                        placeholder="hi"
                        value={this.state.Text}
                        onChange={this.onTextChange}
                        >
						</textarea>
					</div>
                    {/* <input type="file" onChange={this.handleImageAsFile} ></input> */}

					<button onClick={this.onSubmit}  className="submit-post">Submit</button>

               </div>
        )
    }
}
export default CreatePost