import React from 'react'
import MenuPage from './MenuPage'

const Layout = ({title = 'Title',
                    description = 'Description',
                    className,
                    children
}) => (


    <div>
        <MenuPage />

        <div className="jumbotron" class="p-3 mb-2 bg-warning text-dark" >
   
            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
    </div>

);

export default Layout