import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Wave from '../components/svg/wave'
import BlogHeader from '../components/svg/blog-header'
import { BsCaretRightFill } from 'react-icons/bs'
import { BsCaretLeftFill } from 'react-icons/bs'
import Seo from '../components/seo'

import "./wp-block.css"
import "./wp-style.css"
import "./template.scss"

const BlogPostTemplate = ({ data, pageContext }) => {
  let title = data.wpPost.title
  let date = data.wpPost.dateJP
  let eyeCatch 
  if(data.wpPost.featuredImage) {
    eyeCatch = data.wpPost.featuredImage.node.localFile.chidImageSharp
  }

  let imgDesc

  if(data.wpPost.featuredImage) {
    if(data.wpPost.featuredImage.node.description) {
      imgDesc = data.wpPost.featuredImage.node.description
    }
  } 
  if(imgDesc === undefined) {
    imgDesc = `${title}のアイキャッチ`
  }

  return (
    <Layout>
      <main className='relative md:border-b-4 border-main-blue'>
        <div className="lg:hidden">
          <Wave
            color = "main-blue"
          />
        </div>
        <div className='pl-4 pr-4 pt-16 pb-24 max-w-[1000px] mx-auto'>
          <div className="max-w-[500px] mx-auto">
            <h2 className="">
              <BlogHeader   
                alt="ブログ"
              />
            </h2>
          </div>
          <article className='w-4/5 mx-auto'>
            <h2 dangerouslySetInnerHTML={{ __html: title }} className='text-[24px] font-black text-main-blue text-center my-8' />
            <p dangerouslySetInnerHTML={{ __html: date }} className="text-right" />
              {
                eyeCatch && (
                  <GatsbyImage
                    className='h-auto aspect-[4/3] mx-auto my-8'
                    image={eyeCatch}
                    alt={imgDesc}
                    quality={90}
                  />
                )
              }
            <div id="wp-content" dangerouslySetInnerHTML={{ __html: data.wpPost.content }} className="my-8 lg:w-4/5 lg:mx-auto" />
          </article>
          <div className="max-w-[1000px] mx-auto mt-16">
            <ul className='page-navi flex justify-between w-4/5 mx-auto'>
              {pageContext.next && (
                <li className=''>
                  <Link
                    className='flex text-[14px] lg:text-4 gap-2 news-btn justify-center items-center news-btn py-2 px-4 text-white font-bold rounded-[12px]'
                    to={`/blog${pageContext.next.uri}`} 
                    rel="prev"
                  >
                    <BsCaretLeftFill
                      size="1rem"
                    />
                    <span>
                      次の記事
                    </span>
                  </Link>
                </li>
              )}
              {pageContext.previous && (
                <li className="ml-auto">
                  <Link
                    className='flex text-[14px] lg:text-4 gap-2 news-btn justify-center items-center news-btn py-2 px-4 text-white font-bold rounded-[12px]'
                    to={`/blog${pageContext.previous.uri}`} 
                    rel="next"
                  >
                    <span>
                      前の記事
                    </span>
                    <BsCaretRightFill
                      size="1rem"
                    />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default BlogPostTemplate

export const Head = () => <Seo title="ワンオーシャンブログ" />

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
