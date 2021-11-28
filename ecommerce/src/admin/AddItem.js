import React, {useState, useEffect} from 'react'
import Layout from '../CoreComponent/Layout'
import {isAuthenticated} from '../Auth'
import {Link} from "react-router-dom"
import {createItem} from './backend'

const AddItem = () => {

    const {user, token} = isAuthenticated();
    const [values, setValues] = useState ({
        name: '',
        description: '',
        price: '',
        products: [],
        product: '',
        shipping: '',
        quantity: '',
        photo: '',
        loading: false,
        error: '',
        createdProduct: '',
        redirectToProfile: false,
        formData: ''
    });

    const {
        name,
        description,
        price,
        products,
        product,
        shipping,
        quantity,
        photo,
        loading,
        error,
        createdProduct,
        redirectToProfile,
        formData
    } = values;

    useEffect(() => {
        setValues({...values, formData: new FormData()})
    }, [])

    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value
        formData.set(name, value)
        setValues({...values, [name]: value})
    }

    const clickSubmit = event => {

    }

    const uploadForm = () => (
        <form className = "mb-3" onSubmit={clickSubmit}>
            <h4>Upload photo</h4>
            <div className = "form-group">
                <label className = "btn btn-secondary">
                    <input onChange={handleChange('photo')}
                           type="file"
                           name="photo"
                           accept="image/*"/>
                </label>

            </div>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')}
                       type="text"
                       className="form-control"
                       value={name} />
            </div>

            <div className="form-group">
                <label className="text-muted">Description</label>
                <textarea onChange={handleChange('description')}
                       className="form-control"
                       value={description} />
            </div>

            <div className="form-group">
                <label className="text-muted">Price</label>
                <input onChange={handleChange('price')}
                       type="number"
                       className="form-control"
                       value={price} />
            </div>

            <div className="form-group">
                <label className="text-muted">Product</label>
                <select onChange={handleChange('product')}
                       className="form-control">
                    <option value = "to_be_decided">Product A</option>
                    <option value = "to_be_decided">Product B</option>
                    <option value = "to_be_decided">Product C</option>
                </select>
            </div>

            <div className="form-group">
                <label className="text-muted">Shipping</label>
                <select onChange={handleChange('shipping')}
                        className="form-control">
                    <option value = "0">No Shipping</option>
                    <option value = "1">Yes Shipping</option>
                </select>
            </div>

            <div className="form-group">
                <label className="text-muted">Quantity</label>
                <input onChange={handleChange('quantity')}
                       type="number"
                       className="form-control"
                       value={quantity} />
            </div>

            <button className="btn btn-outline-primary">Create Product</button>

        </form>
    );

    const {} = values

    return (
        <Layout
            title="Add a new item"
            description= {"Create an item now"}
            className="container-fluid">
            <div className="row">
                <div className = "col-md-8 offset-md-2">
                    {uploadForm()}
                </div>
            </div>

        </Layout>
    )
}

export default AddItem