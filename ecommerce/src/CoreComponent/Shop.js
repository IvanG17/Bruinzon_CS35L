import React, { useEffect, useState } from "react";
import Layout from './Layout'
import Card from './Card'
import {getProductTypes} from './ApiCore'
import Checklist from './Checklist'
import {prices} from './Prices'



const ShopPage = () => {
    const [shopFilters, setFilters] = useState({
        filters: {product : [], price : []}
    })
    const [productType, setType] = useState([])
    const [error, setError] = useState(false)

    const init = () => {
        getProductTypes().then(data => {
            if(data.error) {
                setError(data.error)
                
            } else {
                setType(data)
            }
        })
    }

    useEffect(() => {
        init()

    }, [])

    const itemFilter  = (filter, filterBy) => {
        const newFilters = {...shopFilters}
        newFilters.filters[filterBy] = filter
        setFilters(newFilters)
    }

    console.log(productType)

    return (
        <Layout 
          title = "Shop Page" 
          description = "Bruinzon Shop"
          className = "container-fluid"
          >
        <div className ="row">
            <div className = 'col-4'>
                <ul>
                <h4>See specific items with types</h4>
            
                <Checklist productType = {productType} itemFilter={ filters =>itemFilter(filters, 'products')}/>
                
                </ul>
            </div>
            <div className = 'col-8'>
                {JSON.stringify(shopFilters)}
            </div>

        </div>
          
    
        </Layout>
      )
}

export default ShopPage