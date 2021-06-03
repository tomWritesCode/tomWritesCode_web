import * as React from 'react';
import Layout from '../components/layout'
import { H1, H2, H3, H4, H5, H6, P, HR, UL, LI } from '../styles/MDX_Components.js'

const Gear = () => {
  return (
    <Layout title="Gear">
      <div>
        <H2>Desk Setup</H2>

        <H5>13" M1 Macbook Pro 2020 (Work Laptop)</H5>
        <P>
          I really like the M1 Mac for development, building an iOS project in
          XCode is insanely fast. There was some initial setup that was a little
          bit extra than normal but once that was out of the way it's great.
        </P>

        <HR />

        <H5>ALOGIC Universal Twin HD Docking Station</H5>
        <P>
          This was a new addition after my USB-C dock had the HDMI port stop
          working after about 4 years so I was due for an upgrade. This one was
          chosen because of 'Display Link' which lets me use multiple monitors
          with the M1 Macbook Pro.
        </P>

        <HR />

        <H5>Gaming / Editing PC</H5>
        <P>
          I have always wanted a gaming PC and building a video editing PC was a
          great way to kill 2 birds with 1 stone.
        </P>
        <UL>
          <LI>Ryzen 5 3600</LI>
          <LI>MSI GTX 1060 6GB</LI>
          <LI>Corsair Vengance RGB 32GB 3200MHz</LI>
          <LI>Seagate 1TB M.2</LI>
          <LI>Samsung 860 Evo M.2</LI>
        </UL>

        <HR />

        <H5>LG 34" 21:9 Ultrawide</H5>
        <P>
          After going with an ultrawide monitor I don't think I would ever go
          back. Having so much screen real estate is really handy for having
          multiple applications open and is amazing when gaming.
        </P>

        <HR />

        <H5>Dell 24" Vertical</H5>
        <P>
          I added this monitor recently to go with the ultrawide, giving me a
          little more screen real estate.
        </P>

        <HR />

        <H5>Keychorn K2</H5>
        <P>
          A nice mechanical keyboard can really make your desk both asthetically
          beautiful and also is a great addition for typing all day.
        </P>

        <HR />

        <H5>Logitech MX Master 3</H5>
        <P>
          This mouse has become one of the centerpoints of my desk, the comfort
          and customisation available even down to a per program basis is
          fantastic.
        </P>

        <HR />

        <H5>Turtle Beach TAC</H5>
        <P>
          I found this for a great deal and it was a great addition to the desk
          for both micrphone in and headphones out. The additional features of a
          digital noise gate and audio feedback from the micrphone are some
          features I now can't do without.
        </P>

        <HR />

        <H5>Rode VideoMic NTG</H5>
        <P>
          I was so excited when this microphone was announced as it was an
          amazing blend of a desktop microphone as well as the on camera
          micrphone for doing video work.
        </P>

        <HR />

        <H5>Rode PSA-1</H5>
        <P>
          The PSA-1 is the perfect desk companion for the microphone in your
          home office. I have mine mounted to the side of the table so I can
          swing it in and out when needed.
        </P>
      </div>
    </Layout>
  )
}

export default Gear