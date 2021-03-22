import React from 'react'
class Post extends React.Component {

   render() {
       return (
           <div className="page">
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

					<div className="post-feedbacks">
						<div className="like">
								{/* <button className="like-button">Like</button> */}
								<input type="image"  className="like-button" width="20px" height="20px" src="./images/like.png" />
								{false&&<input type="image"  className="like-button" width="20px" height="20px" src="./images/liked.png" />}
								<p className="like-count">12</p>
						</div>

						<div className="dislike">
								{/* <button className="dislike-button">Dislike</button> */}
								<input type="image"  className="dislike-button" width="20px" height="20px" src="./images/dislike.png" />
								{false&&<input type="image"  className="dislike-button" width="20px" height="20px" src="./images/disliked.png" />}
								<p className="like-count">12</p>
						</div>
						
					</div>
					
               </div>

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

					<div className="post-feedbacks">
						<div className="like">
								{/* <button className="like-button">Like</button> */}
								<input type="image"  className="like-button" width="20px" height="20px" src="./images/like.png" />
								{false&&<input type="image"  className="like-button" width="20px" height="20px" src="./images/liked.png" />}
								<p className="like-count">12</p>
						</div>

						<div className="dislike">
								{/* <button className="dislike-button">Dislike</button> */}
								<input type="image"  className="dislike-button" width="20px" height="20px" src="./images/dislike.png" />
								{false&&<input type="image"  className="dislike-button" width="20px" height="20px" src="./images/disliked.png" />}
								<p className="like-count">12</p>
						</div>
						
					</div>
					
               </div>

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

					<div className="post-feedbacks">
						<div className="like">
								{/* <button className="like-button">Like</button> */}
								<input type="image"  className="like-button" width="20px" height="20px" src="./images/like.png" />
								{false&&<input type="image"  className="like-button" width="20px" height="20px" src="./images/liked.png" />}
								<p className="like-count">12</p>
						</div>

						<div className="dislike">
								{/* <button className="dislike-button">Dislike</button> */}
								<input type="image"  className="dislike-button" width="20px" height="20px" src="./images/dislike.png" />
								{false&&<input type="image"  className="dislike-button" width="20px" height="20px" src="./images/disliked.png" />}
								<p className="like-count">12</p>
						</div>
						
					</div>
					
               </div>


              
             
           </div>
       )
   }
}

export default Post