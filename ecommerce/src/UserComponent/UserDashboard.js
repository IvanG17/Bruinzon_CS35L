import React from 'react'
import Layout from '../CoreComponent/Layout'
import {isAuthenticated} from '../Auth'

const UserDashboard = () => {

    const {customer: {_id, name, email, role}} = isAuthenticated();

    return (
        <Layout
            title="Dashboard"
            description="User Dashboard"
            className="container">

            <div className="card mb-5">
                <h3 className = "card-header">User Information</h3>
                <ul className = "list-group">
                    <li className = "list-group-item">{name}</li>
                    <li className = "list-group-item">{email}</li>
                    <li className = "list-group-item">{role === 1 ? "Seller" : "Registered User"}</li>
                </ul>
            </div>

            <div className="card">
                <h3 className = "card-header">Purchase History</h3>
                <ul className = "list-group">
                    <li className = "list-group-item">history</li>
                </ul>
            </div>

        </Layout>
    )
}

export default UserDashboard;