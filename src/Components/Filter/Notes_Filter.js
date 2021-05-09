import React from 'react'
import {notesfilter} from '../../Action/Activity'
import {connect} from 'react-redux'

class NotesFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Search:''
        }
    }
    onSearchChange=(event) =>{

        const Search=event.target.value
        this.setState(()=>({Search}))
        this.props.notesfilter(Search)
        
            
    }
    render() {
        // console.log('properties',this.props)
        return(
            <div className="post">
                    <div className="create-post-textarea">
                    <label className="Search-label">Search Here</label>
                        <textarea 
                        className="submit-post-Title"  
                        placeholder="Enter Text"
                        value={this.state.Search}
                        onChange={this.onSearchChange}
                        >
						</textarea>
					</div>
               </div>
        )
    }
}


const mapDispatchToProps=(dispatch) =>{
    return{
        notesfilter:(Text)=>dispatch(notesfilter(Text)),
    }   
}

export default connect(null,mapDispatchToProps)(NotesFilter) 

// export default NotesFilter