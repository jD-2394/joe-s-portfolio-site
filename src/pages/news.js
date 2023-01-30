import * as React from 'react'
import Layout from '../components/navComponent'

const NewsPage = () => {
  return (
    <Layout pageTitle="My Blog">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <title>My Blog</title>

export default NewsPage