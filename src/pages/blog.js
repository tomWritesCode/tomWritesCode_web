import React from 'react'
import { Link, graphql } from 'gatsby'
import Bio from '../components/bio'
import Layout from '../components/layout';

const BlogIndex = ({ data, location }) => {
  const posts = data.allMdx.edges
  const tags = new Set()
  posts.map(post => post.node.frontmatter.tags.map(tag => tags.add(tag)))
  const tagsList = Array.from(tags)
  if (posts.length === 0) {
    return (
      <Layout title="Blog Posts">
        <Bio />
        <p>
          Well looks like there are no posts here at the minute, maybe check back another time.
        </p>
      </Layout>
    )
  }

  const maybeS = (number) => {
    return number === 1 ? '' : "'s"
  }

  return (
    <Layout title="Blog Posts">
      <div className="px-4 md:px-8">
        <h2 className="py-4 text-3xl lg:text-4xl">Blog</h2>
        <ol
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          style={{ listStyle: `none` }}
        >
          {posts.map(post => (
            <Link
              className="col-span-1"
              to={`/blog/${post.node.frontmatter.slug}`}
            >
              <li
                className="mt-4 mb-4 p-4 border-solid border border-gray-200 hover:border-indigo-400 hover:shadow rounded-xl"
                key={post.node.id}
              >
                <h3 className="py-4 text-2xl lg:text-3xl underline">
                  {post.node.frontmatter.title}
                </h3>
                <p className="text-l mb-2 font-extralight">
                  Published: {post.node.frontmatter.date}
                </p>
                <p className="text-l mb-2">
                  {post.node.frontmatter.description}
                </p>
                <p className="text-l font-extralight text-right">
                  Read time: {post.node.timeToRead} minute
                  {maybeS(post.node.timeToRead)}
                </p>
              </li>
            </Link>
          ))}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt
          id
          timeToRead
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
