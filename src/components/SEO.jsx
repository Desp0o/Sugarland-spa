import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ title, description }) => {
    return (
        <Helmet>
            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:url" content="https://sugarlandspamassage.com/" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* <!-- Twitter -- /> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://sugarlandspamassage.com/" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />

            <meta name="title" content={title} />
            <meta name="description" content={description} />
            

            <title >{title}</title>
        </Helmet>
    )
}

export default SEO