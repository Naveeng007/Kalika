import history from '../history'
import React from 'react'

import { Router } from 'react-router';
import ExpenseDashboard from  '../Components/Dashboard/dashboard'
import { Route,Switch} from 'react-router-dom'
import Login from '../Components/Auth/login'
const AppRouter=()=>(
    <Router history={history}>
        {/* changed from browserhistory to upper whole */}
    <div>
        
        <Switch>
            <Route path="/"  component={Login } exact={true}/>
            <Route exact path="/dashboard"  component={ExpenseDashboard } exact={true}/>
        </Switch>
    </div>
       
    </Router>
)

export default AppRouter