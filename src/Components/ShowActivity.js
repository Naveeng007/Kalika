import React from 'react'

class Activity extends React.Component {
     render() {
         return (
            <div className="Activity">
            <h2 className="title"> Activities</h2>

            

            <div className="activity-box">
                
                <div className="post">
                    

                    <div className="post-textarea">
						<textarea className="textarea"  placeholder="hi">
						</textarea>
					</div>

					<button className="submit-post">Submit</button>

                </div>
                   
            </div>

            <div className="activity-box">
            <div className="post">
                    <div className="post-top">
						<div className="post-top-username-div">
                            <img className="post-top-photo" src={'./images/chasma.jpg'}/>
							<p className="username-text">Naveen</p>
							<p className="username-text">Time</p>
						</div>

                        <div className="post-top-delete">
							<input type="image"  className="username-text" width="20px" height="20px" src="./images/delete.png" />
						</div>
						
					</div>

                    <div className="post-textarea">
						<p>  efficitur ultrices. Nullam hendrerit posuere est. Nulla libero
  sapien, egestas ac felis porta, cursus ultricies quam. Vestibulum
  tincidunt accumsan sapien, a fringilla dui semper in. Vivamus
  consectetur ipsum a ornare blandit. Aenean tempus at lorem sit
  amet faucibus. Curabitur nibh justo, faucibus sed velit cursus,
  mattis cursus dolor. Pellentesque id pretium est. Quisque
  convallis nisi a diam malesuada mollis. Aliquam at enim ligula. </p>
					</div>

					

                </div>
            </div>
            <div className="activity-box">
                <p>hello </p>
            </div>
            <div className="activity-box">
                <p>hello </p>
            </div>
            <div className="activity-box">
                <p>hello </p>
            </div>
            <div className="activity-box">
                <p>hello </p>
            </div>
            </div>
         )
     }
}

export default Activity;