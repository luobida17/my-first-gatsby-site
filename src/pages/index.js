import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
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
            <StaticImage alt="moon" src="https://images.unsplash.com/photo-1620118733503-ab4e1cb6025d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"/>
        </Layout>
    )

}

//export my component
export default IndexPage
