import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Seo from "../components/seo"

import "./wp-block.css"
import "./wp-style.css"
import Pagination from '../components/pagenation'

const BlogArchiveTemplate = ({ data, pageContext }) => {

  return (
    <Layout>
      <main className="container mx-auto">
        <h2 className='py-8 text-[24px] font-bold text-teal-400 text-center'>ブログ一覧</h2>
        <div className="grid grid-cols-12 gap-4">
          <div className='col-span-3'>
            <h3
              className='bg-teal-400 text-white inline-block py-2 px-4 rounded-xl mb-4'
            >
              カテゴリー</h3>
            <ul>
              {
                data.allWpCategory.edges.map((cat, i) => {
                  return (
                    <li key={i}>
                      <Link
                        to={`/cat/${cat.node.name}`}
                      >
                        {`${cat.node.name} (${cat.node.count})`}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-4 col-span-9">
            {data.allWpPost.edges.map(({ node }) => (
              <article className='col-span-1 w-full' key={node.id}>
                <Link
                  to={`/blog${node.uri}`}
                  alt="/"
                >
                  {node.featuredImage ? (
                    <GatsbyImage
                      className="w-auto h-[120px]"
                      image={node.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                      alt={node.featuredImage.node.description ? node.featuredImage.node.description : "イメージ写真"}
                    />
                  ) : (
                    <div
                      className='bg-teal-400 text-white w-auto h-[120px] grid place-items-center'
                    >
                      写真なし
                    </div>
                  )}
                  <h3>{node.title}</h3>
                </Link>
              </article>
            ))}
          </div>
        </div>
        <ul className='py-8 text-[18px] font-bold text-teal-400 grid grid-cols-3 mx-auto'>
          <div className="col-span-1">
            {!pageContext.isFirst && (
              <li>
                <Link
                  to={
                    pageContext.currentPage === 2
                      ? `/blog/`
                      : `/blog/${pageContext.currentPage - 1}/`
                  }
                  rel="prev"
                >
                  <span>＜ 前のページ</span>
                </Link>
              </li>
            )}
          </div>
          <Pagination totalCount={ data.allWpPost.totalCount } pageContext={ pageContext } />
          <div className='col-span-1 ml-auto'>
            {!pageContext.isLast && (
              <li className=''>
                <Link
                  to={`/blog/${pageContext.currentPage + 1}/`}
                  rel="next"
                >
                  <span>次のページ ＞</span>
                </Link>
              </li>
            )}
          </div>
        </ul>
      </main>
    </Layout>
  )
}

export default BlogArchiveTemplate

export const Head = () => <Seo title="ブログ一覧ページ" description="ブログ一覧ページです" />

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allWpPost(
      sort: {date: DESC}
      skip: $skip
      limit: $limit
    ) {
      totalCount
      edges {
        node {
          title
          id
          uri
          slug
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 4000)
                }
              }
              description
            }
          }
        }
      }
    }
    allWpCategory(sort: {count: DESC}) {
      edges {
        node {
          id
          slug
          uri
          name
          count
        }
      }
    }
  }
`
