import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {isAuthenticated} from './index'

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props =>
        !isAuthenticated() ? (  /* TODO: CHANGE THIS CONDITION TO isAuthenticated() */
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: '/signin',
                state: {from: props.location}
            }} />
        )
    }/>
);

export default PrivateRoute;