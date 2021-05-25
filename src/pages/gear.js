import * as React from 'react';
import Header from '../components/Header';
import { H1, H2, H3, H4, H5, H6, P, HR, UL, LI } from '../styles/MDX_Components.js'

const Gear = () => {
  return (
    <div className="">
      <Header />

      <div className="px-8">
        <div>
          <H3>Desk Setup</H3>
          <H5>13" M1 Macbook Pro 2020</H5>
          <P>I really like the M1 Mac for development</P>

          <HR />

          <H5>ALOGIC Universal Twin HD Docking Station</H5>
          <P>I love this monitor</P>

          <HR />

          <H5>Gaming / Editing PC</H5>
          <P>
            I have always wanted a gaming PC and building a video editing PC was
            a great way to kill 2 birds with 1 stone.
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
          <P>I love this monitor</P>

          <HR />

          <H5>Dell 24" Vertical</H5>
          <P>I love this monitor</P>

          <HR />

          <H5>Keychorn K2</H5>
          <P>I love this monitor</P>

          <HR />

          <H5>Keychorn K2</H5>
          <P>I love this monitor</P>

          <HR />

          <H5>Logitech MX Master 3</H5>
          <P>I love this monitor</P>

          <HR />

          <H5>Turtle Beach TAC</H5>
          <P>I love this monitor</P>

          <HR />

          <H5>Rode VideoMic NTG</H5>
          <P>I love this monitor</P>

          <HR />

          <H5>Rode PSA-1</H5>
          <P>I love this monitor</P>

          <HR />
        </div>
      </div>
    </div>
  )
}

export default Gear