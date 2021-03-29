import * as React from 'react'
import { Link } from 'gatsby'

const Navigation = () => {
  return (
    <div className="text-right p-3">
      <Link to={'/blog'} className="pl-2 pr-2 text-2xl">
        Blog
      </Link>
      <Link to={''} className="pl-2 pr-2 text-2xl">
        Gear
      </Link>
    </div>
  )
}

export default function Header() {
  return (
    <div className="p-3 pt-4">
      <Link to={'/'}>
        <h1 className="text-4xl text-right">tomWritesCode</h1>
      </Link>
      <Navigation />
    </div>
  )
}
