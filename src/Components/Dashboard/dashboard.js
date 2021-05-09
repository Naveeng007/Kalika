import React from 'react'
import Navbar from '../Navigation/Navbar'
import WholePage from './whole_page'
class Dashboard extends React.Component{
    render() {
        return (
            <div className="dashboard">
                {/* <h2>Hello from Dashboard</h2> */}
                <Navbar/>
                <WholePage/>
            </div>
        )
    }
}

export default Dashboard