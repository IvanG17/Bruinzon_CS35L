import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Layout from '../CoreComponent/Layout'
import {signin} from '../Auth/index'


const UserSignIn = () => {

    const [values, setValues] = useState({

        email:'',
        password:'',
        error:'',
        loading: false,
        redirectToReferrer: false,
    });

    const {email, password, loading, error, redirectToReferrer} = values

    const handleChange = name => event =>{
        setValues({...values, error:false,
            [name]:event.target.value})
    }

    
    
    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({...values, error:false, loading: true})
        signin({email, password})
        .then(data => {
            if(data.error){
                setValues({...values,error: data.error, 
                    loading: false})
            }else{
                setValues({
                    ...values,
                    redirectToReferrer: true
                })
            }

        })
    }


    const signUpForm = () => (
        <form>
            
            <div className="form-group">
                <label className="text-muted">
                    Email
                </label>
                <input onChange={handleChange('email')} 
                type="email" 
                className="form-control"
                value={email}></input>
            </div>
            <div className="form-group">
                <label className="text-muted">
                    Password
                </label>
                <input onChange={handleChange('password')} 
                type="password" 
                className="form-control"
                value={password}></input>
            </div>
            <button onClick= {clickSubmit} className="btn btn-primary">Sign Up</button>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger" 
        style={{display: error ? '' : 'none'}}>
            {error}
        </div>
    )

    const showLoading = () => loading && (
        <div className="alert alert-info">
            <h2>Loading...</h2>
        </div>
    );

    const redirectUser = () => {
        if(redirectToReferrer){
            return <Redirect to="/"/>
        }
    }
    

    return (
        <Layout
            title="Signup"
            description="Sign up for Bruinzoqn!"
            className="container col-md-8 offset-md-2"
        >
            {showLoading()}
            {showError() }
            {signUpForm()}
            {redirectUser()}
            {JSON.stringify(values)}
        </Layout>
    )
}

export default UserSignIn