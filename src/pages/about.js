import * as React from 'react'
import Layout from '../components/navComponent'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Flafeber.com%2Fpet-birds%2Fspecies%2Fgoffins-cockatoo%2F&psig=AOvVaw05V19Ij6bNTVFXNLQUx0sS&ust=1674708539466000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLiAns714fwCFQAAAAAdAAAAABAJ"
      />
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage