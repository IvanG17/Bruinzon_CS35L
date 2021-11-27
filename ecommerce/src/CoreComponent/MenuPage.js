import React, {Fragment} from 'react'
import { Link, withRouter } from 'react-router-dom'
import {logout, isAuthenticated} from '../Auth'


const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return {color: '#000000'}
    } else {
        return {color: '#ffffff'}
    }
}

const MenuPage = ({history}) => {
    return (<div>
        <ul className = "nav nav-tabs bg-primary">
            <li className = "nav-item" >
                <Link className="nav-link" style = {isActive(history, '/')} to="/">Home</Link>
            </li>

            {!isAuthenticated() && (
                <Fragment>
                    <li className = "nav-item">
                        <Link className="nav-link" style = {isActive(history, '/signin')} to="/signin">Signin</Link>
                    </li>

                    <li className = "nav-item">
                        <Link className="nav-link" style = {isActive(history, '/signup')} to="/signup">Signup</Link>
                    </li>
                </Fragment>
            )}

            {isAuthenticated() && (
                <li className = "nav-item">
                <span className="nav-link"
                      style ={{cursor: 'pointer', color: '#ffffff'}}
                      onClick ={() => logout(() => {
                          history.push("/");
                      })
                      }
                >
                    Logout
                </span>
                </li>
            )}




        </ul>
    </div>)
}
export default withRouter(MenuPage);


/* Old code with David's new versions down here */

/*
export default function MenuPage() {
    return (
        <header>
          <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                
                <Navbar.Brand href="/">Bruinzon</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
    
                    <Nav.Link href="/cart"><i className = 'fas fa-shopping-cart'></i>Cart</Nav.Link>
                    <Nav.Link href="/signin"><i className = 'fas fa-user'></i>Sign In</Nav.Link>
                
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}
*/