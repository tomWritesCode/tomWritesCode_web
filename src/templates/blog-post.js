import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Header from '../components/Header'
import { H1, H2, H3, H4, H5, H6, P, HR, UL, LI } from '../styles/MDX_Components.js'

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  hr: HR,
  ul: UL,
  li: LI
}

const BlogPostTemplate = ({ data: { mdx }, location }) => {
  return (
    <>
      <Header />
      <div className="px-8 sm:px-4 pb-12 max-w-full">
        <MDXProvider components={components}>
          <MDXRenderer components={components}>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
