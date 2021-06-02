import * as React from "react"
import Header from './Header';
import SEO from './seo'

const Layout = ({ title, children }) => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <SEO title={title} />
      <Header />
      <div className="px-4 md:px-8 mb-10">
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
