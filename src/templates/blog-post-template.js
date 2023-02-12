import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

import "./wp-block.css"
import "./wp-style.css"

const BlogPostTemplate = ({ data, pageContext }) => {
  console.log(data)
  let title = data.wpPost.title
  let date = data.wpPost.date
  let eyeCatch 
  if(data.wpPost.featuredImage) {
    eyeCatch = data.wpPost.featuredImage.node.localFile.chidImageSharp
  }
  console.log(pageContext)
  return (
    <Layout>
      <main className='container mx-auto'>
        <article>
          <h2 dangerouslySetInnerHTML={{ __html: title }} className='text-[32px] font-bold text-teal-400 text-center my-4' />
          <p dangerouslySetInnerHTML={{ __html: date }} className="text-right w-4/5" />
            {
              eyeCatch && (
                <GatsbyImage
                  className='w-[50%] h-auto mx-auto my-8'
                  image={eyeCatch}
                  alt="ブログ写真"
                />
              )
            }
          <div dangerouslySetInnerHTML={{ __html: data.wpPost.content }} className="w-4/5 mx-auto my-8" />
        </article>
        <div className="w-4/5 mx-auto my-8">
          <ul className='page-navi flex justify-between'>
            {pageContext.next && (
              <li className='bg-teal-400 text-white py-2 px-4 rounded-xl'>
                <Link to={`/blog${pageContext.next.uri}`} rel="prev">
                  <span>
                    {`< ${pageContext.next.title}`}
                  </span>
                </Link>
              </li>
            )}
            {pageContext.previous && (
              <li className="ml-auto bg-teal-400 text-white py-2 px-4 rounded-xl">
                <Link to={`/blog${pageContext.previous.uri}`} rel="next">
                  <span>
                    {`${pageContext.previous.title} >`}
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </main>
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      dateJP: date(formatString: "YYYY年MM月DD日")
      date
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          caption
        }
      }
      content
    }
  }
`
