import React from 'react'
import Layout from '../CoreComponent/Layout'
import {API} from "../config"

const UserSignIn = () => (
    <Layout title = "Sign In" description = "Sign in to your Bruinzon">
        {API}
        
    </Layout>
);

export default UserSignIn