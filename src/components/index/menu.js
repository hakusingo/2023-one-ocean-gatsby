import React from 'react'
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage} from 'gatsby-plugin-image'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import TourMenuHeader from "../../components/svg/tour-menu-header"
import { BsCaretRightFill } from "react-icons/bs"

import Wave from '../svg/wave'

const menuContents = [
  {
    subTitle: "１歳からでも参加できる!!",
    title: "マングローブカヤック",
    desc: `神秘的な沖縄の大自然。
そのなかでもマングローブは、植物や動物の宝庫です。
静かなマングローブのトンネルをぬける景色はとても幻想的。
ワンオーシャンイチオシの大人気アドベンチャーツアーです。`,
    color: "main-green",
    mapPng: "menu-kayak-map",
    link: "/trekking/"
  },
  {
    subTitle: "チャレンジ 滝つぼダイブ!!",
    title: "ター滝アドベンチャー",
    desc: `世界自然遺産に登録された大宜味村のター滝。
ただ行くだけではもったいない！
アドベンチャー感満載のリバートレッキング ツアーで思い出づくりしませんか？
コースが選べるので、アクティブでものんびりでも楽しめます。`,
    color: "main-blue",
    mapPng: "menu-trekking-map",
    link: "/trekking/"
  },
  {
    subTitle: "保育園児・学童クラブ・しょうがい児\nしょうがい者受け入れ可能!!",
    title: "親子 結プログラム",
    desc: `お客様のご要望にお答えして、出来上がった 結（ゆい）プログラム。
「親と子。人と人。が、助け合いながら進む。」 をテーマにお客様に合わせたプログラムを組み立 てています。
保育園、学童クラブ集団プログラム受け入れ 可能です。（要事前相談）`,
    color: "pink",
    mapPng: "menu-yui-map",
    link: "/yui/"
  },
  {
    subTitle: "古琉球の扉をひらく!!",
    title: "オリジナルムイツアー",
    desc: `沖縄の独特で濃いミステリアスな歴史をたどるディープツアー です。
地元沖縄の聖地巡りが大好きな、ワンオーシャンの スタッフだからこそご、案内できるオリジナルムイツアー。
ムイとは社のことで、他では体験できない大人気 急上昇中のツアーです。`,
    color: "navy",
    mapPng: "menu-mui-map",
    link: "/mui/"
  },
]

const Menu = () => {

  const data = useStaticQuery(
    graphql`
      query {
        kayakPng: file(relativePath: {eq: "tour-menu/menu-kayak-map.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        trekkingPng: file(relativePath: {eq: "tour-menu/menu-trekking-map.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        yuiPng: file(relativePath: {eq: "tour-menu/menu-yui-map.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        muiPng: file(relativePath: {eq: "tour-menu/menu-mui-map.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        kayakJpg: file(relativePath: {eq: "tour-menu/menu-kayak.jpg"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        trekkingJpg: file(relativePath: {eq: "menu/trekking/trekking-intro-pic2.jpg"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        yuiJpg: file(relativePath: {eq: "tour-menu/menu-yui.jpg"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        muiJpg: file(relativePath: {eq: "tour-menu/menu-mui.jpg"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        kayakPngUnder: file(relativePath: {eq: "tour-menu/menu-kayak.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        trekkingPngUnder: file(relativePath: {eq: "tour-menu/menu-trekking.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        yuiPngUnder: file(relativePath: {eq: "tour-menu/menu-yui.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        muiPngUnder: file(relativePath: {eq: "tour-menu/menu-mui.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `
  )

  const kayakMapPng = getImage(data.kayakPng.childImageSharp.gatsbyImageData)
  const trekkingMapPng = getImage(data.trekkingPng.childImageSharp.gatsbyImageData)
  const yuiMapPng = getImage(data.yuiPng.childImageSharp.gatsbyImageData)
  const muiMapPng = getImage(data.muiPng.childImageSharp.gatsbyImageData)
  const kayakJpg = getImage(data.kayakJpg.childImageSharp.gatsbyImageData)
  const trekkingJpg = getImage(data.trekkingJpg.childImageSharp.gatsbyImageData)
  const muiJpg = getImage(data.muiJpg.childImageSharp.gatsbyImageData)
  const yuiJpg = getImage(data.yuiJpg.childImageSharp.gatsbyImageData)
  const kayakPngUnder = getImage(data.kayakPngUnder.childImageSharp.gatsbyImageData)
  const trekkingPngUnder = getImage(data.trekkingPngUnder.childImageSharp.gatsbyImageData)
  const yuiPngUnder = getImage(data.yuiPngUnder.childImageSharp.gatsbyImageData)
  const muiPngUnder = getImage(data.muiPngUnder.childImageSharp.gatsbyImageData)
  let mapPng = [kayakMapPng, trekkingMapPng, yuiMapPng, muiMapPng]
  let heroJpg = [kayakJpg, trekkingJpg, yuiJpg, muiJpg]
  let pngUnder = [kayakPngUnder, trekkingPngUnder, yuiPngUnder, muiPngUnder]


  return (
    <section id="tour-menu" className="bg-light-yellow relative pb-24">
      <Wave
        color="white"
      />
      <div className="pr-4 pl-4">
        <div className="pt-12 max-w-[500px] mx-auto">
          <h2 className="iso-target">
            <TourMenuHeader
              alt="ツアーメニュー"
            />
          </h2>
        </div>

        <div className='lg:grid grid-cols-12 gap-8 xl:w-[80%] mx-auto'>
          {
            menuContents.map((content, i) => {
              return (
                <div key={i} className="iso-target fadein-opacity col-span-6 pt-12 h-auto max-w-[400px] mx-auto lg:max-w-[500px] w-full">
                  <div className="flex justify-center -mt-6 absolute z-10 w-full">
                    <p className={`bg-${content.color} whitespace-pre-wrap text-yellow font-bold py-2 px-8 inline-block rounded-[8px] lg:text-[22px]`}>
                      {content.subTitle}
                    </p>
                  </div>
                  <GatsbyImage
                    className="rounded-[12px] rounded-tr-none rounded-bl-none w-full shadow-xl h-[248px]"
                    alt="マングローブカヤック"
                    // src="../../images/tour-menu/menu-kayak.jpg"
                    image={heroJpg[i]}
                    width={500}
                  />
                  <div className="bg-white relative shadow-xl rounded-b-[12px]">
                    <GatsbyImage
                      className="absolute -right-2 w-[80px] h-auto lg:w-[100px] -top-[4rem]"
                      image={mapPng[i]}
                      alt="名護市大浦湾"
                    />
                    <h3 className="text-[24px] lg:text-[28px] font-bold text-center pt-6">
                      <span>
                        {content.title}
                      </span>
                    </h3>
                    <p className="pt-6 w-[85%] lg:h-[220px] mx-auto pb-12 whitespace-pre-wrap">
                      {content.desc}
                    </p>
                  </div>
                  <div className="flex justify-center">  
                    <GatsbyImage
                      className="-mt-8 w-[400px] h-[200px]" 
                      imgClassName='object-contain'
                      // src="../../images/tour-menu/menu-kayak.png"
                      image={pngUnder[i]}
                      alt="親子カヤック写真"
                    />
                  </div>
                  <div className="py-12 flex justify-center lg:pt-8">
                    <Link
                      className={`flex items-center justify-center bg-${content.color} text-white w-[80%] text-center shadow-lg py-2 px-4 rounded-[12px] font-bold`}
                      to={content.link}
                    >
                      <span>
                        ツアー内容を見る
                      </span>
                      <BsCaretRightFill
                        className='block'
                        size="1.4rem"
                      />
                    </Link>
                  </div>
                </div>
              )
            })
          }
        </div>




        {/* <div className="">

          <div className="iso-target fadein-opacity pt-12 h-auto max-w-[400px] mx-auto lg:max-w-[500px] drop-shadow-xl">
            <div className="flex justify-center -mb-[1.4rem] relative z-10">
              <p className="bg-main-green text-yellow font-bold py-2 px-8 inline-block rounded-[8px] lg:text-[22px]">
                １歳からでも参加できる!!
              </p>
            </div>
            <StaticImage
              clawssName="rounded-[12px] rounded-tr-none rounded-bl-none w-full h-auto"
              alt="マングローブカヤック"
              src="../../images/tour-menu/menu-kayak.jpg"
              width={500}
            />
            <div className="bg-white relative">
              <StaticImage
                className="absolute -right-2 w-[80px] h-auto lg:w-[100px] -top-[4rem]"
                src="../../images/tour-menu/menu-kayak-map.png"
                alt="名護市大浦湾"
              />
              <h3 className="text-[24px] lg:text-[28px] font-bold text-center pt-6">
                <span>
                  マングローブカヤック
                </span>
              </h3>
              <p className="pt-6 w-[85%] lg:h-[220px] mx-auto pb-12">
                神秘的な沖縄の大自然。<br />
                そのなかでもマングローブは、植物や
                動物の宝庫です。<br />
                静かなマングローブのトンネルをぬける景色はとても幻想的。<br/>
                ワンオーシャンイチオシの大人気アドベンチャーツアーです。<br />
              </p>
            </div>
            <div className="lg:flex lg:justify-center">  
              <StaticImage
                className="-mt-8 w-auto h-[200px]" 
                imgClassName='object-contain'
                src="../../images/tour-menu/menu-kayak.png"
                alt="親子カヤック写真"
              />
            </div>
            <div className="py-12 flex justify-center lg:pt-8">
              <Link
                className="flex items-center justify-center bg-main-green text-white w-[80%] text-center shadow-lg py-2 px-4 rounded-[12px] font-bold"
                to={'/kayak'}
              >
                <span>
                  ツアー内容を見る
                </span>
                <BsCaretRightFill
                  className='block'
                  size="1.4rem"
                />
              </Link>
            </div>
          </div>

          <div className="iso-target fadein-opacity pt-12 max-w-[400px] mx-auto lg:max-w-[500px] drop-shadow-xl">
            <div className="flex justify-center -mb-[1.4rem] relative z-10">
              <p className="bg-main-blue text-yellow font-bold py-2 px-8 inline-block rounded-[8px] lg:text-[22px]">
                チャレンジ 滝つぼダイブ!!
              </p>
            </div>
            <StaticImage
              className="rounded-[12px] rounded-tr-none rounded-bl-none w-full h-auto"
              alt="トレッキング"
              src="../../images/tour-menu/menu-trekking.jpg"
              width={500}
            />
            <div className="bg-white relative">
              <StaticImage
                className="absolute -right-2 w-[80px] lg:w-[100px] -top-[4rem]"
                src="../../images/tour-menu/menu-trekking-map.png"
                alt="トレッキング写真"
              />
              <h3 className="text-[24px] lg:text-[28px]  font-bold text-center pt-6">
                <span>
                  ター滝アドベンチャー
                </span>
              </h3>
              <p className="pt-6 w-[85%] lg:h-[220px] mx-auto pb-12">
                世界自然遺産に登録された大宜味村のター滝。<br />
                ただ行くだけではもったいない！<br />
                アドベンチャー感満載のリバートレッキング
                ツアーで思い出づくりしませんか？<br />
                コースが選べるので、アクティブでものんびりでも楽しめます。
              </p>
            </div>
            <div className="lg:flex lg:justify-center">
              <StaticImage
                className="-mt-8 w-auto h-[200px]" 
                imgClassName='object-contain'
                src="../../images/tour-menu/menu-trekking.png"
                alt="親子トレッキング写真"
                quality={90}
              />
            </div>
            <div className="py-12 flex justify-center lg:pt-8">
              <Link
                className="flex justify-center items-center bg-main-blue text-white w-[80%] text-center py-2 px-4 rounded-[12px] font-bold shadow-lg"
                to={'/trekking'}
              >
                <span>
                  ツアー内容を見る
                </span>
                <BsCaretRightFill
                  className='block'
                  size="1.4rem"
                />
              </Link>
            </div>
          </div>
          <div className="iso-target fadein-opacity pt-12 max-w-[400px] mx-auto lg:max-w-[500px] drop-shadow-xl">
            <div className="flex justify-center -mb-[1.4rem] relative z-10 md:-mb-[3.3rem]">
              <p className="text-center bg-pink text-yellow font-bold py-2 px-8 inline-block rounded-[8px] lg:text-[22px]">
                保育園児・学童クラブ・しょうがい児<br />
                しょうがい者受け入れ可能!!
              </p>
            </div>
            <StaticImage
              className="rounded-[12px] rounded-tr-none rounded-bl-none w-full h-auto"
              alt="結プログラム"
              src="../../images/tour-menu/menu-yui.jpg"
              width={500}
              quality={90}
            />
            <div className="bg-white relative">
              <StaticImage
                className="absolute -right-2 w-[80px] lg:w-[100px] -top-[4rem]"
                src="../../images/tour-menu/menu-yui-map.png"
                alt="結プログラム写真"
                quality="90"
              />
              <h3 className="text-[24px] lg:text-[28px]  font-bold text-center pt-6">
                <span>
                  親子結プログラム
                </span>
              </h3>
              <p className="pt-6 w-[85%] lg:h-[240px] mx-auto pb-12">
                お客様のご要望にお答えして、出来上がった
                結（ゆい）プログラム。<br />
                「親と子。人と人。が、助け合いながら進む。」
                をテーマにお客様に合わせたプログラムを組み立
                てています。<br />
                保育園、学童クラブ集団プログラム受け入れ
                可能です。（要事前相談）
              </p>
            </div>
            <div className="flex justify-center">
              <StaticImage
                className="-mt-8 w-auto h-[200px]" 
                imgClassName='object-contain'
                src="../../images/tour-menu/menu-yui.png"
                alt="結プログラム写真"
                quality={90}
              />
            </div>
            <div className="py-12 flex justify-center lg:pt-8">
              <Link
                className="flex items-center justify-center bg-pink text-white w-[80%] text-center shadow-lg py-2 px-4 rounded-[12px] font-bold"
                to={'/yui'}
              >
                <span>
                  ツアー内容を見る
                </span>
                <BsCaretRightFill
                  className='block'
                  size="1.4rem"
                />
              </Link>
            </div>
          </div>

          <div className="iso-target fadein-opacity pt-12 max-w-[400px] mx-auto lg:max-w-[500px] drop-shadow-xl">
            <div className="flex justify-center -mb-[1.4rem] relative z-10">
              <p className="bg-navy text-yellow font-bold py-2 px-8 inline-block rounded-[8px] lg:text-[22px]">
                古琉球の扉をひらく!!
              </p>
            </div>
            <StaticImage
              className="rounded-[12px] rounded-tr-none rounded-bl-none w-full h-auto"
              alt="拝しょ"
              src="../../images/tour-menu/menu-mui.jpg"
              width={500}
              quality={90}
            />
            <div className="bg-white relative">
              <StaticImage
                className="absolute -right-2 w-[80px] lg:w-[100px] -top-[4rem]"
                src="../../images/tour-menu/menu-mui-map.png"
                quality={90}
                alt="オキナワ全域map"
              />
              <h3 className="text-[24px] lg:text-[28px]  font-bold text-center pt-6">
                <span>
                  オリジナルムイツアー
                </span>
              </h3>
              <p className="pt-6 w-[85%] lg:h-[240px] mx-auto pb-12">
                沖縄の独特で濃いミステリアスな歴史をたどるディープツアー
                です。<br />
                地元沖縄の聖地巡りが大好きな、ワンオーシャンの
                スタッフだからこそご、案内できるオリジナルムイツアー。<br />
                ムイとは社のことで、他では体験できない大人気
                急上昇中のツアーです。
              </p>
            </div>
            <div className="flex justify-center">
              <StaticImage
                className="-mt-8 w-auto h-[200px]" 
                imgClassName='object-contain'
                src="../../images/tour-menu/menu-mui.png"
                alt="オキナワ拝しょ"
              />
            </div>
            <div className="py-12 flex justify-center lg:pt-8">
              <Link
                className="flex justify-center items-center bg-navy text-white w-[80%] text-center shadow-lg py-2 px-4 rounded-[12px] font-bold"
                to={'/mui'}
              >
                <span>
                  ツアー内容を見る
                </span>
                <BsCaretRightFill
                  className='block'
                  size="1.4rem"
                />
              </Link>
            </div>
          </div>

        </div> */}

      </div>
    </section>
  )
}

export default Menu