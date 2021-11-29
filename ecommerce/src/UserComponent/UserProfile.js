import React, {useState, useEffect} from 'react'
import Layout from '../CoreComponent/Layout'
import {isAuthenticated} from '../Auth'
import {Link} from "react-router-dom"
import {read, update, updateUser} from './apiUser'

const UserProfile = ({match}) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: false,
        success: false
    })

    const {token} = isAuthenticated()

    const {name, email, password, error, success} = values


    const init = userId => {
        console.log(userId);
        console.log(token);

        read(userId, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: true });
            } else {
                setValues({ ...values, name: data.name, email: data.email });
            }
        });
    }

    useEffect(() => {
        console.log(match)
        init(match.params.userID)
    }, [])

    return (
        <Layout
                title = "Profile"
                description = "Update your profile"
                className = "container-fluid"
                >
            <h2 className = "mb-4">Profile Update</h2>

            {JSON.stringify(values)}
        </Layout>
    )
};



export default UserProfile;