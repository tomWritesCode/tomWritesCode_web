import * as React from 'react'
import { Link, graphql } from 'gatsby'

import Header from '../components/Header'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogIndex = ({ data, location }) => {
  const posts = data.allMdx.edges
  if (posts.length === 0) {
    return (
      <Layout location={location}>
        <Header />
        <SEO title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }
  console.log(posts)

  return (
    <>
      <SEO title="All posts" />
      <Header />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => (
          <li>{post.node.frontmatter.title}</li>
        ))}
      </ol>
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          rawBody
          fileAbsolutePath
          slug
          excerpt
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`
