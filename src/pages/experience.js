import * as React from 'react'
import Layout from '../components/navComponent'

const ExperiencePage = () => {
  return (
    <Layout pageTitle="My Experience">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <title>My Experience</title>

export default ExperiencePage