import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div>
      <p>Created by {data.site.siteMetadata.author} </p>
    </div>
  )
}
