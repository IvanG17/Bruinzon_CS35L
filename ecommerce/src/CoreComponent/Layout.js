import React from 'react'
import MenuPage from './MenuPage'

const Layout = ({title = 'Title',
                    description = 'Description',
                    className,
                    children
}) => (


    <div>
        <MenuPage />

        <div className="jumbotron ">
            
            <h1>{title}</h1>
            <p className="display-1">{description}</p>
        </div>
        <div className={className}>{children}</div>
    </div>

);

export default Layout