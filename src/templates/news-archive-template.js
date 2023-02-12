import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import "./wp-block.css"
import "./wp-style.css"

const NewsArchiveTemplate = ({ data, path, pageContext }) => {
  const newsData = data.allWpNews.edges
  return (
    <Layout>
      <main>
        <h2 className='my-8 text-center text-[24px] font-bold text-teal-400'>お知らせ一覧</h2>
        <div className="w-4/5 mx-auto grid gap-8 grid-cols-3">
          {
            newsData.map((data, i) => {
              return (
                <Link
                  key={i}
                  to={data.node.uri}
                  className="block"
                >
                  <div className='col-span-1 border bg-teal-400 p-4'>
                    <h3 className='text-red-400 font-bold'>{ data.node.title }</h3>
                    <p dangerouslySetInnerHTML={{ __html: data.node.content }} className="my-4" />
                  </div>
                </Link>
              )
            })
          }
        </div>
        <div className='w-4/5 mx-auto my-8'>
          <ul className="page-navi flex justify-between">
            {!pageContext.isFirst && (
              <li className='bg-teal-400 text-white py-2 px-4 rounded-xl'>
                <Link
                  to={
                    pageContext.currentPage === 2
                      ? `/news/`
                      : `/news/${pageContext.currentPage - 1}/`
                  }
                  rel="prev"
                >
                  <span>＜ 前のページ</span>
                </Link>
              </li>
            )}
            {!pageContext.isLast && (
              <li className='ml-auto bg-teal-400 text-white py-2 px-4 rounded-xl'>
                <Link
                  to={`${pageContext.currentPage + 1}/`}
                  rel="next"
                >
                  <span>次のページ ＞</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </main>
    </Layout>
  )
}

export default NewsArchiveTemplate

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allWpNews(
      sort: {date: DESC}
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          title
          content
          id
          uri
          slug
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 1920)
                }
              }
              description
            }
          }
        }
      }
    }
  }
`
