import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// import { useEffect } from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Layout from "../components/layout"

import "./index.scss"
import Hero from "../components/index/hero"
import Intro from "../components/index/intro"
import News from "../components/index/news"
import Menu from "../components/index/menu"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {console.log(data.kayak.childImageSharp.GatsbyImageData)}
      <div>
        <figure>
          <GatsbyImage
            image={data.kayak.childImageSharp.GatsbyImageData}
            alt=""
          />
        </figure>
      </div>
      <Hero />
      <Intro />
      <News />
      <Menu />
    </Layout>
  )
}

export const query = graphql`
  query {
    kayak: file(relativePath: {eq: "tour-menu/menu-kayak.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

export const Head = () => <Seo title="沖縄自然体験アドベンチャーツアー" />

export default IndexPage