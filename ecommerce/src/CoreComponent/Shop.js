import React, { useEffect, useState } from "react";
import Layout from './Layout'
import Card from './Card'
import {getProductTypes} from './ApiCore'



const ShopPage = () => {
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


    return (
        <Layout 
          title = "Shop Page" 
          description = "Bruinzon Shop"
          className = "container-fluid"
          >
        <div className ="row">
            <div className = 'col-4'>
                {JSON.stringify(productType)}
            </div>
            <div className = 'col-8'>
                Right Options
            </div>

        </div>
          
    
        </Layout>
      )
}

export default ShopPage