import React, {useState, useEffect} from 'react'
import Layout from '../CoreComponent/Layout'
import {isAuthenticated} from '../Auth'
import {Link} from "react-router-dom"
import {createItem} from './backend'

const addItem = () => {

    const {user, token} = isAuthenticated()
    return (
        <Layout
            title="Add a new item"
            description= {"Create an item now"}
            className="container-fluid">
            <div className="row">
                <div className = "col-md-8 offset-md-2">

                    ...

                </div>
            </div>

        </Layout>
    )
}

export default addItem