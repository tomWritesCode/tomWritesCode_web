import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  HR,
  UL,
  LI,
} from '../styles/MDX_Components.js'

const Photography = () => {
  return (
    <Layout title="Photography">
      <div>
        <H2>My Projects</H2>

        <H3>raspberryCandy - VS Code theme</H3>
        <P>
          I made a VS Code theme a while back and that was a really fun
          experience and is one of my pride and joys.
        </P>
        <img
          className="w-full md:w-7/12 mt-8 mx-auto rounded-xl"
          src="https://res.cloudinary.com/tomwritescode/image/upload/v1559729838/Screen_Shot_2019-06-04_at_9.35.44_pm.png"
        />

        <HR />

        <H3>raspberryScraper - Node Scraper</H3>
        <P>
          After making the VS Code theme I made this scraper with NodeJS that
          hits the Microsoft page and pulls the amount of downloads. I linked
          that to a command in my CLI and it is shown with Chalk to make it
          pretty.
        </P>

        <img
          className="w-full md:w-7/12 mt-8 mx-auto rounded-xl"
          src="https://res.cloudinary.com/tomwritescode/image/upload/v1557822370/Large_GIF_912x276.gif"
        />

        <HR />

        <H3>Basketball NoStarz</H3>
        <P>
          This was a fun little project for my brother and I when we would play
          basketball at the local court.
        </P>

        <img
          className="h-3/6 mt-8 mx-auto rounded-xl"
          src="https://res.cloudinary.com/tomwritescode/image/upload/v1555541786/nostarz.gif"
        />
      </div>
    </Layout>
  )
}

export default Photography
