import * as React from "react"
import { Link } from "gatsby"

const Index = () => {
  return (
    <>
      <h1 className="text-3xl text-right">tomWritesCode</h1>
      <Link to={"/blog"}>Ohh the blog</Link>
    </>
  )
}

export default Index
