import * as React from 'react'
import Layout from '../components/layout'
import { H2, H4, P } from '../styles/MDX_Components';

const Index = () => {
  return (
      <Layout>
        <H2>Hi, my name is Tom. Thanks for dropping by.</H2>

        <H4>I am a Developer and Photographer based in Sydney, Australia.</H4>

        <P>Welcome to the website that has been rebuilt through 2021. You're looking at a tech stack of Gatsby, TailwindCSS and all of my blog posts are made using MDX and stored in a seperate GitHub repo. The whole project is hosted through Vercel's Now and has a neat little webhook aimed at both of the repos to update when there is new data pushed to the repo.</P>

        <P>If you want to get in touch I would love to hear from you. Im available at my socials below.</P>

        <div className="">
        </div>
      </Layout>
  )
}

export default Index
