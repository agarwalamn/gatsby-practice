import { Link } from "gatsby"
import React from "react"
import Head from "../components/Head"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>hey baby</h1>
      <h2>Some Text</h2>
      <p>
        need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
