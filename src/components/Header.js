import * as React from 'react'
import { Link } from 'gatsby'

const Navigation = () => {
  return (
    <div className="text-right p-3 overflow-x-scroll">
      <Link to={'/blog/'} className="no-underline pl-2 pr-2 text-2xl">
        Blog
      </Link>
      <Link to={'/projects/'} className="no-underline pl-2 pr-2 text-2xl">
        Projects
      </Link>
      <Link to={'/photography'} className="no-underline pl-2 pr-2 text-2xl">
        Photography
      </Link>
      <Link to={'/gear'} className="no-underline pl-2 pr-2 text-2xl">
        Gear
      </Link>
    </div>
  )
}

export default function Header() {
  return (
    <div className="p-3 pt-4 lg:mr-4">
      <Link className="no-underline" to={'/'}>
        <h1 className="m-0 mt-0 text-4xl text-right">tomWritesCode</h1>
      </Link>
      <Navigation />
    </div>
  )
}
