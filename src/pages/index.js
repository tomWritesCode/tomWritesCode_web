import * as React from 'react'
// import { Link } from 'gatsby'
import Header from '../components/Header'
import { H2, H4 } from '../styles/MDX_Components';

const Index = () => {
  return (
    <div>
      <Header />

      <div className="px-4 md:px-8">
        <H2>Hi, my name is Tom. Thanks for dropping by.</H2>

        <H4>I am a Developer and Photographer based in Sydney, Australia.</H4>
      </div>
    </div>
  )
}

export default Index
