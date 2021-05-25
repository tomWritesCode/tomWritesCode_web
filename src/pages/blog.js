import React from 'react'
import { Link, graphql } from 'gatsby'

import Header from '../components/Header'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogIndex = ({ data, location }) => {
  const posts = data.allMdx.edges
  const tags = new Set()
  posts.map(post => post.node.frontmatter.tags.map(tag => tags.add(tag)))
  const tagsList = Array.from(tags)
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

  return (
    <>
      <SEO title="Blog Posts" />
      <Header />
      <div className="px-4 md:px-8 grid grid-cols-6 gap-2">
        <div className="col-start-1 col-end-2 hidden lg:grid">
          <h3 className="text-xl mb-2">Subjects:</h3>
          <ul className="pl-4" style={{ listStyle: 'none' }}>
            <li>All posts</li>
            {tagsList.map(tag => (
              <li key={tag} className="">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <ol
          className="col-start-1 md:col-start-2 col-end-7"
          style={{ listStyle: `none` }}
        >
          <h2 className="text-2xl">Posts</h2>
          {posts.map(post => (
            <Link to={`/blog/${post.node.frontmatter.slug}`}>
              <li className="mt-4 mb-4" key={post.node.id}>
                <h3 className="text-xl">{post.node.frontmatter.title}</h3>
                <p className="mb-0 font-extralight">
                  Published: {post.node.frontmatter.date}
                </p>
                <p className="mb-0">{post.node.frontmatter.description}</p>
              </li>
              <hr className="mt-0 mb-0 border-solid border border-indigo-600" />
            </Link>
          ))}
        </ol>
      </div>
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: ASC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt
          id
          frontmatter {
            title
            date
            tags
            slug
            description
          }
        }
      }
    }
  }
`
