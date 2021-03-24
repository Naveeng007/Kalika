import React from 'react'
import {connect} from 'react-redux'
import {startLogout} from '../Action/auth'
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
   render() {
       return (
           <div className="Navbar">

                <div className="logo">
                    {/* <img src={fre} style="height: 40px;width: 40px;"> </img> */}
                    <img src="./images/fire.png" width="40px" height="40px" /> 
		        </div>

		        <div className="Logout">
			        {/* <button name="delete" className="logout-button">Logout</button> */}
                    <input type="image" onClick={this.props.startLogout}  className="logout-button" width="20px" height="20px" src="./images/logout.png" />
		        </div>

           </div>
       )
   }
}

const MapDispatchToLogout=(dispatch)=>({//dispatch is passed implicity , same as state is passed in maptostate
    startLogout:()=>dispatch(startLogout())
})

export default connect(undefined,MapDispatchToLogout)(Navbar)//maptosttate is undefined as second argument is allways maptodispatch

// export default Navbar