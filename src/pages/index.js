import * as React from 'react'
import Layout from '../components/layout'
// import { Link } from 'gatsby'

//my component
const IndexPage = () => {
    return (
        // <main>
        //     <title>
        //         Home Page
        //     </title>
        //     <h1>Welcome to my Gatsby site!</h1>
        //     <Link to="/about">About</Link>
        //     <p>I'm making this by following Gatsby Tutorial.</p>
        // </main>
        <Layout pageTitle="Home Page">
            <p>I'm making this by following the Gatsby Tutorial.</p>
        </Layout>
    )

}

//export my component
export default IndexPage
