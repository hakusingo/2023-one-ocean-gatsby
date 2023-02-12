import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

import BlogHeader from "../svg/blog-header"
import { BsCaretRightFill } from "react-icons/bs"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpPost(
        sort: {date: DESC}
        limit: 3
      ) {
        edges {
          node {
            title
            date(formatString: "YYYY年MM月DD日")
            uri
            slug
            excerpt
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 400)
                  }
                }
                description
              }
            }
          }
        }
      }
    }
  `)

  let description = []
  for(let i = 0; i < 3; i++) {
    if(data.allWpPost.edges[i].node.featuredImage.node.description == null) {
      description[i] = "ブログのアイキャッチ写真"
    } else {
      description[i] = data.allWpPost.edges[i].node.featuredImage.node.description.replace(/(<([^>]+)>)/gi, '')
    }
  }

  return (
    <section id="blog" className="relative mt-[-1px] bg-white">
      <div className="pr-4 pl-4">
        <div className="pt-12 max-w-[500px] mx-auto mb-12">
          <h2 className="iso-target">
            <BlogHeader
              alt="ワンオーシャンのブログ"
            />
          </h2>
        </div>
      </div>
      <div id="blog-contents" className="lg:flex max-w-[1200px] mx-auto">
        {
          data.allWpPost.edges.map((blog, i) => {
            return (
              <div key={i} className={`iso-target fadein-opacity md:max-w-[340px] w-[80%] mx-auto max-w-[400px] border-[3px] border-gray-400 relative shadow-lg mb-8`}>
                <div className="absolute left-1/2 -translate-x-1/2 z-10 -top-4">
                  <svg id="_レイヤー_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="31.139" height="40.901" viewBox="0 0 31.139 40.901"><defs><style dangerouslySetInnerHTML={{__html: ".cls-1{fill:#b4b4b5;}.cls-2{fill:#e50012;}.cls-3{fill:#888;}.cls-4{fill:url(#_名称未設定グラデーション);}.cls-5{isolation:isolate;}" }} /><radialGradient id="_名称未設定グラデーション" cx="-848.67" cy="504.07" fx="-848.67" fy="504.07" r=".5" gradientTransform="translate(8310.52 4932.19) scale(9.77 -9.77)" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#fff" /><stop offset={1} stopColor="#e50012" /></radialGradient></defs><g id="_レイヤー_1-2"><g><image className="cls-5" width={32} height={24} transform="translate(0 19.89) scale(.6)" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAYCAYAAAB0kZQKAAAACXBIWXMAABJ0AAASdAHeZh94AAADe0lEQVRIic2W6VJUMRCFs3XuwICKoL7/27mA7MPNbp1r960QYAT9Y6q6MhQz6S+nt6j/YenXMpRSNrXWqdZKrTWrlDJKqaq1LsaYZIyZrbXhb+60FyLnfJhzPi6lHJVSDmutAPEdRAOE1logHqy19865GyK6/SeIUopPKZ2mlD7knN8zCCAOAFFrdQyhOojAEHfOuVsiuiKiS+/9zzdDpJSOY4yfGOKEQUQNQEytNYREIOo+CCI6996f71PGjQAhhC8xxs8xxrOU0keA5JzfDSGRvBCIPEKklADxznuP321DCN+mafqxFwIhCCHg9mdQgu005ww1JCTbIS+gZDPGZK31qIR8f1Vvnme72Wy+vgiB2EN6DsEJq3DK+xgSQLihQgTivpRy0znvv6tCCHWapu9PIGqtdp7nLchzzkdwiBDAoIIkaAexwcGcF40hojHmwTl3L2ohgSV3GBaKxZRSIKLrEQL1v+FeACeHiD+g2DHAsEuV9MnZJDmttYB75FxyBs6ttTOD7mqtd8aYskLgVlCDdxjxTSYBBBxUkHDUWk0pyxnKWquMMdSp0ydslB6Sc75DzojSSqnLPidaV7Kr4UA2y+bEUYwR1aRqbco5p7z3msh5OC+lLM4FnJU9YHVF4a1ACHXmDBcrnVVEjEHbb+Gaag0VVRVgcs6KVdECK4pyeGT3srPZVQmOlVgYLHaWWmsZToicBhORU1obZa3k3wrbL8A9pywgimMlWggBPX8xjt19Z9Ib+ph755ytteLzckaXA+igaVC2inGlrKBrn0DJIFmcc0dEtB0GltT50pwQc631UiHGGDtUyMzwOyTjqDCqhAEBmh9B4B8ppQsuUWnNcnMtdY6bllIeUM7ciPr2vU5TdE1MU+yoCLZdZw+syuPZATVCCMTxMr/PflJqu5yztOO1fQ8zZMcj/ZoHGewafzPUAvYkHLKmaToPYXmbyFsh9sMJNY6QDaHS/P3cd044g3Mi+klEFxjr/PkKDetFCMUgMcZ+MuJmkLcfZAdDsvbte1HMOXfXqQEIjPUfOP9R6TwHIQuTlUf6KY/0FaIfZBySJTm7p946UZ1zV9775W0xAvwRQhaeecMrax3R/SsLyduN9Znz4pbVuOxD8GYIWehwYzhQReh36KJdckKNJYwICYD2nfsmiHEhF3hirjMIENba9OpDlFK/ADKTDeWlTnLHAAAAAElFTkSuQmCC" /><path className="cls-1" d="M9.29,27.01l4.51-12.67,2.07,.79-5.72,12.15c-.22-.04-.44-.11-.66-.19-.07-.03-.14-.06-.21-.09Z" /><path className="cls-3" d="M13.8,14.35l-4.51,12.67c-.14-.06-.28-.13-.41-.21l3.88-12.86,1.04,.4Z" /><circle className="cls-2" cx="16.78" cy="9.34" r="9.34" /><path className="cls-4" d="M14.09,7.42c0,2.7,2.19,4.88,4.89,4.88s4.88-2.19,4.88-4.89-2.19-4.88-4.89-4.88h0c-2.7,0-4.88,2.19-4.88,4.89Z" /></g></g></svg>
                </div>
                <div className="p-4 pb-0">
                  <GatsbyImage
                    image={blog.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                    className="w-full h-auto aspect-[4/3]"
                    alt={description[i]}
                  />
                </div>
                <Link
                  to={ `blog${blog.node.uri}` }
                >
                  <div className="p-4">
                    <time className="text-[12px]">{ blog.node.date }</time>
                    <h3 dangerouslySetInnerHTML={{ __html: blog.node.title }} className="blog-title pt-2 text-main-blue font-bold text-[18px] text-center" />
                    <div id="blog-excerpt" dangerouslySetInnerHTML={{ __html: blog.node.excerpt }} className="pt-2">
                    </div>
                  </div>
                </Link>
              </div>

            )
          })
        }
      </div>

      {/* <div className="lg:flex max-w-[1200px] mx-auto">
        <div className={`iso-target fadein-opacity md:max-w-[340px] w-[80%] mx-auto max-w-[400px] border-[3px] border-gray-400 relative shadow-lg mb-8`}>
          <div className="absolute left-1/2 -translate-x-1/2 z-10 -top-4">
            <svg id="_レイヤー_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="31.139" height="40.901" viewBox="0 0 31.139 40.901"><defs><style dangerouslySetInnerHTML={{__html: ".cls-1{fill:#b4b4b5;}.cls-2{fill:#e50012;}.cls-3{fill:#888;}.cls-4{fill:url(#_名称未設定グラデーション);}.cls-5{isolation:isolate;}" }} /><radialGradient id="_名称未設定グラデーション" cx="-848.67" cy="504.07" fx="-848.67" fy="504.07" r=".5" gradientTransform="translate(8310.52 4932.19) scale(9.77 -9.77)" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#fff" /><stop offset={1} stopColor="#e50012" /></radialGradient></defs><g id="_レイヤー_1-2"><g><image className="cls-5" width={32} height={24} transform="translate(0 19.89) scale(.6)" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAYCAYAAAB0kZQKAAAACXBIWXMAABJ0AAASdAHeZh94AAADe0lEQVRIic2W6VJUMRCFs3XuwICKoL7/27mA7MPNbp1r960QYAT9Y6q6MhQz6S+nt6j/YenXMpRSNrXWqdZKrTWrlDJKqaq1LsaYZIyZrbXhb+60FyLnfJhzPi6lHJVSDmutAPEdRAOE1logHqy19865GyK6/SeIUopPKZ2mlD7knN8zCCAOAFFrdQyhOojAEHfOuVsiuiKiS+/9zzdDpJSOY4yfGOKEQUQNQEytNYREIOo+CCI6996f71PGjQAhhC8xxs8xxrOU0keA5JzfDSGRvBCIPEKklADxznuP321DCN+mafqxFwIhCCHg9mdQgu005ww1JCTbIS+gZDPGZK31qIR8f1Vvnme72Wy+vgiB2EN6DsEJq3DK+xgSQLihQgTivpRy0znvv6tCCHWapu9PIGqtdp7nLchzzkdwiBDAoIIkaAexwcGcF40hojHmwTl3L2ohgSV3GBaKxZRSIKLrEQL1v+FeACeHiD+g2DHAsEuV9MnZJDmttYB75FxyBs6ttTOD7mqtd8aYskLgVlCDdxjxTSYBBBxUkHDUWk0pyxnKWquMMdSp0ydslB6Sc75DzojSSqnLPidaV7Kr4UA2y+bEUYwR1aRqbco5p7z3msh5OC+lLM4FnJU9YHVF4a1ACHXmDBcrnVVEjEHbb+Gaag0VVRVgcs6KVdECK4pyeGT3srPZVQmOlVgYLHaWWmsZToicBhORU1obZa3k3wrbL8A9pywgimMlWggBPX8xjt19Z9Ib+ph755ytteLzckaXA+igaVC2inGlrKBrn0DJIFmcc0dEtB0GltT50pwQc631UiHGGDtUyMzwOyTjqDCqhAEBmh9B4B8ppQsuUWnNcnMtdY6bllIeUM7ciPr2vU5TdE1MU+yoCLZdZw+syuPZATVCCMTxMr/PflJqu5yztOO1fQ8zZMcj/ZoHGewafzPUAvYkHLKmaToPYXmbyFsh9sMJNY6QDaHS/P3cd044g3Mi+klEFxjr/PkKDetFCMUgMcZ+MuJmkLcfZAdDsvbte1HMOXfXqQEIjPUfOP9R6TwHIQuTlUf6KY/0FaIfZBySJTm7p946UZ1zV9775W0xAvwRQhaeecMrax3R/SsLyduN9Znz4pbVuOxD8GYIWehwYzhQReh36KJdckKNJYwICYD2nfsmiHEhF3hirjMIENba9OpDlFK/ADKTDeWlTnLHAAAAAElFTkSuQmCC" /><path className="cls-1" d="M9.29,27.01l4.51-12.67,2.07,.79-5.72,12.15c-.22-.04-.44-.11-.66-.19-.07-.03-.14-.06-.21-.09Z" /><path className="cls-3" d="M13.8,14.35l-4.51,12.67c-.14-.06-.28-.13-.41-.21l3.88-12.86,1.04,.4Z" /><circle className="cls-2" cx="16.78" cy="9.34" r="9.34" /><path className="cls-4" d="M14.09,7.42c0,2.7,2.19,4.88,4.89,4.88s4.88-2.19,4.88-4.89-2.19-4.88-4.89-4.88h0c-2.7,0-4.88,2.19-4.88,4.89Z" /></g></g></svg>
          </div>
          <div className="p-4 pb-0">
            <StaticImage
              src="../../images//blog/blog-pic1.jpg"
              alt="カヤック写真"
              quality={90}
            />
          </div>
          <Link
            to={'/blog-page'}
          >
            <div className="p-4">
              <time className="text-[12px]">2022.12.11</time>
              <h3 className="pt-2 text-main-blue font-semibold">
                10年前のご縁での来店でした。
                感謝です🙏
              </h3>
              <p className="pt-2">
                天気はイマイチでしたが通常通り開催できたのは嬉しかったですね😁
              </p>
            </div>
          </Link>
        </div>

        <div className="iso-target lg:delay-[200ms] fadein-opacity md:max-w-[340px] w-[80%] mx-auto max-w-[400px] border-[3px] border-gray-400 relative shadow-lg mb-8">
          <div className="absolute left-1/2 -translate-x-1/2 z-10 -top-4">
            <svg id="_レイヤー_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="31.139" height="40.901" viewBox="0 0 31.139 40.901"><defs><style dangerouslySetInnerHTML={{__html: ".cls-1{fill:#b4b4b5;}.cls-2{fill:#e50012;}.cls-3{fill:#888;}.cls-4{fill:url(#_名称未設定グラデーション);}.cls-5{isolation:isolate;}" }} /><radialGradient id="_名称未設定グラデーション" cx="-848.67" cy="504.07" fx="-848.67" fy="504.07" r=".5" gradientTransform="translate(8310.52 4932.19) scale(9.77 -9.77)" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#fff" /><stop offset={1} stopColor="#e50012" /></radialGradient></defs><g id="_レイヤー_1-2"><g><image className="cls-5" width={32} height={24} transform="translate(0 19.89) scale(.6)" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAYCAYAAAB0kZQKAAAACXBIWXMAABJ0AAASdAHeZh94AAADe0lEQVRIic2W6VJUMRCFs3XuwICKoL7/27mA7MPNbp1r960QYAT9Y6q6MhQz6S+nt6j/YenXMpRSNrXWqdZKrTWrlDJKqaq1LsaYZIyZrbXhb+60FyLnfJhzPi6lHJVSDmutAPEdRAOE1logHqy19865GyK6/SeIUopPKZ2mlD7knN8zCCAOAFFrdQyhOojAEHfOuVsiuiKiS+/9zzdDpJSOY4yfGOKEQUQNQEytNYREIOo+CCI6996f71PGjQAhhC8xxs8xxrOU0keA5JzfDSGRvBCIPEKklADxznuP321DCN+mafqxFwIhCCHg9mdQgu005ww1JCTbIS+gZDPGZK31qIR8f1Vvnme72Wy+vgiB2EN6DsEJq3DK+xgSQLihQgTivpRy0znvv6tCCHWapu9PIGqtdp7nLchzzkdwiBDAoIIkaAexwcGcF40hojHmwTl3L2ohgSV3GBaKxZRSIKLrEQL1v+FeACeHiD+g2DHAsEuV9MnZJDmttYB75FxyBs6ttTOD7mqtd8aYskLgVlCDdxjxTSYBBBxUkHDUWk0pyxnKWquMMdSp0ydslB6Sc75DzojSSqnLPidaV7Kr4UA2y+bEUYwR1aRqbco5p7z3msh5OC+lLM4FnJU9YHVF4a1ACHXmDBcrnVVEjEHbb+Gaag0VVRVgcs6KVdECK4pyeGT3srPZVQmOlVgYLHaWWmsZToicBhORU1obZa3k3wrbL8A9pywgimMlWggBPX8xjt19Z9Ib+ph755ytteLzckaXA+igaVC2inGlrKBrn0DJIFmcc0dEtB0GltT50pwQc631UiHGGDtUyMzwOyTjqDCqhAEBmh9B4B8ppQsuUWnNcnMtdY6bllIeUM7ciPr2vU5TdE1MU+yoCLZdZw+syuPZATVCCMTxMr/PflJqu5yztOO1fQ8zZMcj/ZoHGewafzPUAvYkHLKmaToPYXmbyFsh9sMJNY6QDaHS/P3cd044g3Mi+klEFxjr/PkKDetFCMUgMcZ+MuJmkLcfZAdDsvbte1HMOXfXqQEIjPUfOP9R6TwHIQuTlUf6KY/0FaIfZBySJTm7p946UZ1zV9775W0xAvwRQhaeecMrax3R/SsLyduN9Znz4pbVuOxD8GYIWehwYzhQReh36KJdckKNJYwICYD2nfsmiHEhF3hirjMIENba9OpDlFK/ADKTDeWlTnLHAAAAAElFTkSuQmCC" /><path className="cls-1" d="M9.29,27.01l4.51-12.67,2.07,.79-5.72,12.15c-.22-.04-.44-.11-.66-.19-.07-.03-.14-.06-.21-.09Z" /><path className="cls-3" d="M13.8,14.35l-4.51,12.67c-.14-.06-.28-.13-.41-.21l3.88-12.86,1.04,.4Z" /><circle className="cls-2" cx="16.78" cy="9.34" r="9.34" /><path className="cls-4" d="M14.09,7.42c0,2.7,2.19,4.88,4.89,4.88s4.88-2.19,4.88-4.89-2.19-4.88-4.89-4.88h0c-2.7,0-4.88,2.19-4.88,4.89Z" /></g></g></svg>
          </div>
          <div className="p-4 pb-0">
            <StaticImage
              src="../../images//blog/blog-pic2.jpg"
              alt="カヤック写真"
              quality={90}
            />
          </div>
          <Link
            to={'/blog-page'}
          >
            <div className="p-4">
              <time className="text-[12px]">2022.11.11</time>
              <h3 className="pt-2 text-main-blue font-semibold">
                ご無沙汰でーす！
                最近全然動かしてなかった💦
              </h3>
              <p className="pt-2">
                ガジュマルが見たくてここへ来ました。
              </p>
            </div>
          </Link>
        </div>
        <div className="iso-target lg:delay-[400ms] fadein-opacity md:max-w-[340px] w-[80%] mx-auto max-w-[400px] border-[3px] border-gray-400 relative shadow-lg mb-8">
          <div className="absolute left-1/2 -translate-x-1/2 z-10 -top-4">
            <svg id="_レイヤー_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="31.139" height="40.901" viewBox="0 0 31.139 40.901"><defs><style dangerouslySetInnerHTML={{__html: ".cls-1{fill:#b4b4b5;}.cls-2{fill:#e50012;}.cls-3{fill:#888;}.cls-4{fill:url(#_名称未設定グラデーション);}.cls-5{isolation:isolate;}" }} /><radialGradient id="_名称未設定グラデーション" cx="-848.67" cy="504.07" fx="-848.67" fy="504.07" r=".5" gradientTransform="translate(8310.52 4932.19) scale(9.77 -9.77)" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#fff" /><stop offset={1} stopColor="#e50012" /></radialGradient></defs><g id="_レイヤー_1-2"><g><image className="cls-5" width={32} height={24} transform="translate(0 19.89) scale(.6)" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAYCAYAAAB0kZQKAAAACXBIWXMAABJ0AAASdAHeZh94AAADe0lEQVRIic2W6VJUMRCFs3XuwICKoL7/27mA7MPNbp1r960QYAT9Y6q6MhQz6S+nt6j/YenXMpRSNrXWqdZKrTWrlDJKqaq1LsaYZIyZrbXhb+60FyLnfJhzPi6lHJVSDmutAPEdRAOE1logHqy19865GyK6/SeIUopPKZ2mlD7knN8zCCAOAFFrdQyhOojAEHfOuVsiuiKiS+/9zzdDpJSOY4yfGOKEQUQNQEytNYREIOo+CCI6996f71PGjQAhhC8xxs8xxrOU0keA5JzfDSGRvBCIPEKklADxznuP321DCN+mafqxFwIhCCHg9mdQgu005ww1JCTbIS+gZDPGZK31qIR8f1Vvnme72Wy+vgiB2EN6DsEJq3DK+xgSQLihQgTivpRy0znvv6tCCHWapu9PIGqtdp7nLchzzkdwiBDAoIIkaAexwcGcF40hojHmwTl3L2ohgSV3GBaKxZRSIKLrEQL1v+FeACeHiD+g2DHAsEuV9MnZJDmttYB75FxyBs6ttTOD7mqtd8aYskLgVlCDdxjxTSYBBBxUkHDUWk0pyxnKWquMMdSp0ydslB6Sc75DzojSSqnLPidaV7Kr4UA2y+bEUYwR1aRqbco5p7z3msh5OC+lLM4FnJU9YHVF4a1ACHXmDBcrnVVEjEHbb+Gaag0VVRVgcs6KVdECK4pyeGT3srPZVQmOlVgYLHaWWmsZToicBhORU1obZa3k3wrbL8A9pywgimMlWggBPX8xjt19Z9Ib+ph755ytteLzckaXA+igaVC2inGlrKBrn0DJIFmcc0dEtB0GltT50pwQc631UiHGGDtUyMzwOyTjqDCqhAEBmh9B4B8ppQsuUWnNcnMtdY6bllIeUM7ciPr2vU5TdE1MU+yoCLZdZw+syuPZATVCCMTxMr/PflJqu5yztOO1fQ8zZMcj/ZoHGewafzPUAvYkHLKmaToPYXmbyFsh9sMJNY6QDaHS/P3cd044g3Mi+klEFxjr/PkKDetFCMUgMcZ+MuJmkLcfZAdDsvbte1HMOXfXqQEIjPUfOP9R6TwHIQuTlUf6KY/0FaIfZBySJTm7p946UZ1zV9775W0xAvwRQhaeecMrax3R/SsLyduN9Znz4pbVuOxD8GYIWehwYzhQReh36KJdckKNJYwICYD2nfsmiHEhF3hirjMIENba9OpDlFK/ADKTDeWlTnLHAAAAAElFTkSuQmCC" /><path className="cls-1" d="M9.29,27.01l4.51-12.67,2.07,.79-5.72,12.15c-.22-.04-.44-.11-.66-.19-.07-.03-.14-.06-.21-.09Z" /><path className="cls-3" d="M13.8,14.35l-4.51,12.67c-.14-.06-.28-.13-.41-.21l3.88-12.86,1.04,.4Z" /><circle className="cls-2" cx="16.78" cy="9.34" r="9.34" /><path className="cls-4" d="M14.09,7.42c0,2.7,2.19,4.88,4.89,4.88s4.88-2.19,4.88-4.89-2.19-4.88-4.89-4.88h0c-2.7,0-4.88,2.19-4.88,4.89Z" /></g></g></svg>
          </div>
          <div className="p-4 pb-0">
            <StaticImage
              src="../../images//blog/blog-pic3.jpg"
              alt="カヤック写真"
              quality={90}
            />
          </div>
          <Link
            to={'/blog-page'}
          >
            <div className="p-4">
              <time className="text-[12px]">2022.11.11</time>
              <h3 className="pt-2 text-main-blue font-semibold">
                今年は三世代で訪れてくれる
                家族が多い感じですね♪
              </h3>
              <p className="pt-2">
                みんなでワイワイレースも楽しかったねー！
              </p>
            </div>
          </Link>
        </div>
      </div> */}

      <div className="flex justify-center pt-12 pb-16 bg-white mb-[-1px]">
        <Link
          to={'/blog'}
          className="flex justify-center items-center bg-main-blue py-2 px-8 rounded-[8px] text-white"
        >
          <span>
            ブログ一覧
          </span>
          <BsCaretRightFill 
            className='ml-2'
            size="1rem"
          />
        </Link>
      </div>

    </section>
  )
}

export default Blog
