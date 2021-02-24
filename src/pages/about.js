import { Link } from "gatsby"
import React from "react"
import Head from "../components/Head"
import Layout from "../components/Layout"

export default () => {
  return (
    <Layout>
      <Head title="About" />

      <h1>I am awesome</h1>
      <p>Why I am this awesome?</p>
      <Link to="/contact">contact me</Link>
    </Layout>
  )
}
