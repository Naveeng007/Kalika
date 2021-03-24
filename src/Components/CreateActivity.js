import React from 'react'

class CreateActivity extends React.Component {
    render() {
        return(
            <div className="post">
                    <div className="post-top">
						<div className="post-top-username-div">
                            <img className="post-top-photo" src={'./images/chasma.jpg'}/>
							<p className="username-text">Naveen</p>
						
						</div>

						
					</div>

                    <div className="create-post-textarea">
						<textarea className="submit-post-textarea"  placeholder="hi">
						</textarea>
					</div>

					<button className="submit-post">Submit</button>

               </div>
        )
    }
}
export default CreateActivity