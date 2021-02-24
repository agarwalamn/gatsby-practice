import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Head from "../components/Head"
import Layout from "../components/Layout"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            title
            slug
            createdAt(fromNow: true)
          }
        }
      }
    }
  `)
  const posts = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <Head title="Blog" />

      {posts.map(post => (
        <Link to={post.node.slug}>
          <h1>{post.node.title}</h1>
          <p>{post.node.createdAt}</p>
        </Link>
      ))}
    </Layout>
  )
}
