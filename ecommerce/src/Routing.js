import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import UserSignUp from './UserComponent/UserSignUp'
import UserSignIn from './UserComponent/UserSignIn'
import HomePage from './CoreComponent/HomePage'
import PrivateRoute from './Auth/PrivateRoute'
import AdminRoute from './Auth/AdminRoute'
import UserDashboard from './UserComponent/UserDashboard'
import AdminDashboard from './UserComponent/AdminDashboard'

const Routing  = () => {
    return (<div>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/signin" exact component={UserSignIn} />
                <Route path="/signup" exact component={UserSignUp} />
                <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
                
            </Switch>
        </BrowserRouter>
    </div>)
}

export default Routing;