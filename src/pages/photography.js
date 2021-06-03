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
  const images = useStaticQuery(graphql`
  query Images {
    allCloudinaryMedia {
      edges {
        node {
          id
          secure_url
        }
      }
    }
  }
  `)
  return (
      <Layout title="Photography">
        <div>
          <H2>Photo gear</H2>

          <H5>Fujifilm X100F</H5>
          <P>
            When I sold my interchangable system I moved to the X100F, it's a
            great little camera and has been all over the globe with me (I mean
            when we were allowed overseas)
          </P>

          <HR />

          <H5>Leica M3 + 50mm Dual-range Summicron</H5>
          <P>
            This is absolutely my pride and joy. It has my initials engraved
            next too the eye piece. This camera is also the insperation for the
            tattoo I have on my wrist.
          </P>

          <HR />

          <H2>My Work</H2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center items-center">
              {images.allCloudinaryMedia.edges.map(image => (
                <img key={image.node.id} className="max-h-96" src={image.node.secure_url} />
              ))}
            </div>
        </div>
    </Layout>
  )
}

export default Photography
