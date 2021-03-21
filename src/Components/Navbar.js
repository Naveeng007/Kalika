import React from 'react'
class Navbar extends React.Component {
   render() {
       return (
           <div className="Navbar">

                <div className="logo">
                    {/* <img src={fre} style="height: 40px;width: 40px;"> </img> */}
                    <img src="./images/fire.png" width="40px" height="40px" /> 
		        </div>

		        <div className="Logout">
			        {/* <button name="delete" className="logout-button">Logout</button> */}
                    <input type="image"  className="logout-button" width="20px" height="20px" src="./images/logout.png" />
		        </div>

           </div>
       )
   }
}

export default Navbar