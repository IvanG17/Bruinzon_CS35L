import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserSignUp from './UserComponent/UserSignUp'
import UserSignIn from './UserComponent/UserSignIn'
import HomePage from './CoreComponent/HomePage'

const Routing  = () => {
    return (<div>
        <Router>
            <Routes>
                <Route path="/" exact element={<HomePage/>}/>
                <Route path="/signin" exact element={<UserSignIn/>}/>
                <Route path="/signup" exact element={<UserSignUp/>}/>
            </Routes>
        </Router>
    </div>)
}

export default Routing;