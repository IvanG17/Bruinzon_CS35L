import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import UserSignUp from './UserComponent/UserSignUp'
import UserSignIn from './UserComponent/UserSignIn'
import HomePage from './CoreComponent/HomePage'

const Routing  = () => {
    return (<div>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/signin" exact component={UserSignIn} />
                <Route path="/signup" exact component={UserSignUp} />
            </Switch>
        </BrowserRouter>
    </div>)
}

export default Routing;