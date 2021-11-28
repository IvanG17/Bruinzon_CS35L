import React, { useEffect, useState } from "react";
import Layout from './Layout'
import {getProducts} from './ApiCore'
import Card from './Card'

const HomePage = () => {
  const [productsBySell, setProductsBySell] = useState([])
  const [productsByArrival, setProductsByArrival] = useState([])
  const [error, setError] = useState(false)

  const loadProductsBySell = () => {
    getProducts('sold').then(data => {
      if(data.error){
        setError(data.error)
      }else{
        setProductsBySell(data)
      }

    })
  }

  const loadProductsByArrival = () => {
    getProducts('created').then(data => {
      if(data.error){
        setError(data.error)
      }else{
        setProductsByArrival(data)
      }

    })
  }

  useEffect(() => {
    loadProductsByArrival()
    loadProductsBySell()
  }, [])

  return (
    <Layout 
      title = "HomePage" 
      description = "Bruinzon Platform"
      className = "container-fluid"
      >
      <h2 className="mb-4">New Arrivals</h2>
      <div className = "row">
        {productsByArrival.map((item, i) => (<Card key = {i} product={item}/>
        ))}
      </div>
      <h2 className="mb-4">Best Sellers</h2>
      <div className = "row">
        {productsBySell.map((item, i) => (<Card key = {i} product={item}/>
        ))}
      </div>


    </Layout>
  )
}

export default HomePage