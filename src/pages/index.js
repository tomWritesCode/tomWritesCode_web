import * as React from 'react'
// import { Link } from 'gatsby'
import Header from '../components/Header'
import { H2 } from '../styles/MDX_Components';

const Index = () => {
  return (
    <div className="px-8">
      <Header />

      <div>
        <H2>Hi, my name is Tom. Thanks for dropping by.</H2>
      </div>
    </div>
  )
}

export default Index
