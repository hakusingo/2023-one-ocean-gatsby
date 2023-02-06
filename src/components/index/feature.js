import React from 'react'
// import { StaticImage } from 'gatsby-plugin-image'
import { GatsbyImage, getImage} from 'gatsby-plugin-image'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'

import FeatureHeader from "../svg/feature-header"
import Wave from '../svg/wave'

const Feature = () => {

  const data = useStaticQuery(
    graphql`
      query {
        feature1: file(relativePath: {eq: "feature/feature-pic1.jpg"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        feature2: file(relativePath: {eq: "feature/feature-pic2.jpg"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        feature3: file(relativePath: {eq: "feature/feature-pic3.jpg"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        feature4: file(relativePath: {eq: "feature/feature-pic4.jpg"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        feature5: file(relativePath: {eq: "feature/feature-pic5.jpg"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        feature6: file(relativePath: {eq: "feature/feature-pic6.jpg"}) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `
  )

  const feature1 = getImage(data.feature1.childImageSharp.gatsbyImageData)
  const feature2 = getImage(data.feature2.childImageSharp.gatsbyImageData)
  const feature3 = getImage(data.feature3.childImageSharp.gatsbyImageData)
  const feature4 = getImage(data.feature4.childImageSharp.gatsbyImageData)
  const feature5 = getImage(data.feature5.childImageSharp.gatsbyImageData)
  const feature6 = getImage(data.feature6.childImageSharp.gatsbyImageData)
  let featureImage = [feature1, feature2, feature3, feature4, feature5, feature6]
  
  const featureText = [
  `お客様の「笑顔、思い出、時間」を大切にするために完全貸切のプライベートツアーにしております。
  プライベートツアーなのでお客様のペースでツアーが実現！!「ここで写真が撮りたい！」「もう少しここで遊びたい！」などツアー中のリクエストに臨機応変に対応が可能です。`,

  `ツアーツールはワンオーシャンがご用意するので、お客様にご用意していただくものはタオルとお着替えのみ！

  手軽にご参加いただけるのも、ワンオーシャンの人気の理由です。 タオルの貸し出しもしております。`,

  `アドベンチャーが大好きな、地元出身のベテランガイドが同行いたします。
  お客さの安全・安心を第一にツアーを敢行しています。
  お子様から高齢方でも安心して、楽しめるツアーをご提供いたします。`,

  `沖縄特有の亜熱帯ジャングルや世界有数のキレイな川をフィールドに、遊び心と冒険心をくすぐるアドベンチャーツアーを行います！
  植物や昆虫などを探すまったりした探検、滝壷を昇ったり、ターザンしたりのアドベンチャーなど。自然の中での遊び方を伝授します♪`,

  `孫とカヤックでマングローブ林を探検したい！自分のペースで滝壺のぼりやアドベンチャーを楽しみたい！沖縄の大自然の中で、大切なあの人に感謝の気持ちを伝えたい！...etc
  アナタの想いや夢をお聞かせください。全力でサポートいたします！`,

  `みなさんの冒険の動画や写真を撮影し、データを無料で差し上げています。

  大切なご家族、友人、カップルで撮影した大切な一枚をぜひワンオーシャンで!!`
  ]

  const featreTitle = [
    "１組だけのプライベートツアー",
    "お手軽にツアーにご参加頂けます!!",
    "経験豊富なガイドが同行するので安全・安全に楽しめます！！",
    "沖縄の大自然の中を探検♪冒険♫",
    `アナタの想いや夢を叶えます！
    まずはご相談ください`,
    `冒険の動画や写真データを
    無料でご提供致します`
  ]

  return (
    <section id="feature" className="relative pb-24">
      <Wave
        color="main-blue"
      />
      <div className="pr-8 pl-8">
        <div className="pt-12 max-w-[500px] mx-auto mb-8">
          <h2 className="iso-target">
            <FeatureHeader
              alt="ワンオーシャンの特徴"
            />
          </h2>
        </div>
        <div className="max-w-[1300px] mx-auto lg:grid lg:grid-cols-12 lg:gap-8">
          {
            featureImage.map((featureImg, i) => {
              return (
                <div key={i} className="feature py-8 lg:py-4 iso-target flex-1 col-span-4 relative max-w-[500px] mx-auto">
                  <div className="relative shadow-xl">
                    <div className="absolute z-10 text-[4rem] -top-[3.4rem] right-4 font-zenmaru font-bold">
                      <span className="text-yellow px-1">0</span>
                      <span className="text-main-green">{ i + 1 }</span>
                    </div>
                    <GatsbyImage
                      image={featureImg}
                      className="aspect-[3/2] w-full h-auto object-cover"
                      alt=""
                    />
                    <div className="relative">
                      <div className="feature-subtitle relative -mt-8 -ml-4 w-full">
                        <div className="triangle"></div>
                        <h3 className={`bg-main-green text-white text-[20px] py-2 px-4 font-bold w-[100%]`}>
                          {featreTitle[i]}
                        </h3>
                      </div>
                      <p className="px-4 pt-4 pb-8">
                        {featureText[i]}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        {/* <div className="">
          <div className="max-w-[1300px] mx-auto">
            <div className="lg:flex gap-4">
              <div className="iso-target flex-1 lg:mt-0  lg:pt-[4rem] feature relative px-4 my-12 max-w-[500px] mx-auto">
                <div className="relative shadow-xl">
                  <div className="absolute z-10 text-[4rem] -top-[3.4rem] right-4 font-zenmaru font-bold">
                    <span className="text-yellow px-1">0</span>
                    <span className="text-main-green">1</span>
                  </div>
                  <StaticImage
                    src="../../images/feature/feature-pic1.jpg"
                    alt="親子カヤックの写真"
                    className="aspect-[3/2]"
                  />
                  <div className="relative">
                    <div className="feature-subtitle relative -mt-8 -ml-4 w-full">
                      <div className="triangle"></div>
                      <h3 className="bg-main-green text-white text-[20px] py-2 px-4 font-bold w-[100%]">
                        １組だけのプライベートツアー
                      </h3>
                    </div>
                    <p className="px-4 pt-4 pb-8">
                      お客様の「笑顔、思い出、時間」を大切にするために完全貸切のプライベートツアーにしております。<br />
                      プライベートツアーなのでお客様のペースでツアーが実現！!「ここで写真が撮りたい！」「もう少しここで遊びたい！」などツアー中のリクエストに臨機応変に対応が可能です。
                    </p>
                  </div>
                </div>
              </div>
              <div className="iso-target lg:delay-300 flex-1 lg:mt-0 lg:pt-[2rem] feature relative px-4 my-12 max-w-[500px] mx-auto">
                <div className="relative shadow-xl">
                  <div className="absolute z-10 text-[4rem] font-bold -top-[3.4rem] right-4 font-zenmaru">
                    <span className="text-yellow px-1">0</span>
                    <span className="text-main-green">2</span>
                  </div>
                  <StaticImage
                    src="../../images/feature/feature-pic2.jpg"
                    alt="ター滝の写真"
                    className="aspect-[3/2]"
                  />
                  <div className="relative">
                    <div className="feature-subtitle relative -mt-8 -ml-4 w-full">
                      <div className="triangle"></div>
                      <h3 className="bg-main-green text-white text-[20px] py-2 px-4 font-bold w-[100%]">
                        お手軽にツアーにご参加頂けます!!
                      </h3>
                    </div>
                    <p className="px-4 pt-4 pb-8">
                      ツアーツールはワンオーシャンがご用意するので、お客様にご用意していただくものはタオルとお着替えのみ！<br />
                      <br />
                      手軽にご参加いただけるのも、ワンオーシャンの人気の理由です。
                      タオルの貸し出しもしております。<br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="iso-target lg:delay-[600ms] flex-1 lg:mt-0  feature relative px-4 my-12 max-w-[500px] mx-auto">
                <div className="relative shadow-xl">
                  <div className="absolute z-10 text-[4rem] font-bold -top-[3.4rem] right-4 font-zenmaru">
                    <span className="text-yellow px-1">0</span>
                    <span className="text-main-green">3</span>
                  </div>
                  <StaticImage
                    src="../../images/feature/feature-pic3.jpg"
                    alt="親子カヤックの写真"
                    className="aspect-[3/2]"
                  />
                  <div className="relative">
                    <div className="feature-subtitle relative -mt-8 -ml-4 w-full">
                      <div className="triangle"></div>
                      <h3 className="bg-main-green text-white text-[20px] py-2 px-4 font-bold w-[100%]">
                        経験豊富なガイドが同行するので<br />
                        安全・安全に楽しめます！！
                      </h3>
                    </div>
                    <p className="px-4 pt-4 pb-8">
                      アドベンチャーが大好きな、地元出身のベテランガイドが同行いたします。<br />
                      お客さの安全・安心を第一にツアーを敢行しています。<br />
                      お子様から高齢方でも安心して、楽しめるツアーをご提供いたします。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex gap-4">
              <div className="iso-target flex-1 lg:mt-0  lg:pt-[4rem] feature relative px-4 my-12 max-w-[500px] mx-auto">
                <div className="relative shadow-xl">
                  <div className="absolute z-10 text-[4rem] font-bold -top-[3.4rem] right-4 font-zenmaru">
                    <span className="text-yellow px-1">0</span>
                    <span className="text-main-green">4</span>
                  </div>
                  <StaticImage
                    src="../../images/feature/feature-pic4.jpg"
                    alt="親子カヤックの写真"
                    className="aspect-[3/2]"
                  />
                  <div className="relative">
                    <div className="feature-subtitle relative -mt-8 -ml-4 w-full">
                      <div className="triangle"></div>
                      <h3 className="bg-main-green text-white text-[20px] py-2 px-4 font-bold w-[100%]">
                        沖縄の大自然の中を探検♪冒険♫
                      </h3>
                    </div>
                    <p className="px-4 pt-4 pb-8">
                      沖縄特有の亜熱帯ジャングルや世界有数のキレイな川をフィールドに、遊び心と冒険心をくすぐるアドベンチャーツアーを行います！<br/>
                      植物や昆虫などを探すまったりした探検、滝壷を昇ったり、ターザンしたりのアドベンチャーなど。自然の中での遊び方を伝授します♪
                    </p>
                  </div>
                </div>
              </div>
              <div className="iso-target lg:delay-[300ms] flex-1 lg:mt-0 lg:pt-[2rem] feature relative px-4 my-12 max-w-[500px] mx-auto">
                <div className="relative shadow-xl">
                  <div className="absolute z-10 text-[4rem] font-bold -top-[3.4rem] right-4 font-zenmaru">
                    <span className="text-yellow px-1">0</span>
                    <span className="text-main-green">5</span>
                  </div>
                  <StaticImage
                    src="../../images/feature/feature-pic5.jpg"
                    alt="３世代でトレッキング"
                    className="aspect-[3/2]"
                  />
                  <div className="relative">
                    <div className="feature-subtitle relative -mt-8 -ml-4 w-full">
                      <div className="triangle"></div>
                      <h3 className="bg-main-green text-white text-[20px] py-2 px-4 font-bold w-[100%]">
                        アナタの想いや夢を叶えます！<br />
                        まずはご相談ください
                      </h3>
                    </div>
                    <p className="px-4 pt-4 pb-8">
                      孫とカヤックでマングローブ林を探検したい！自分のペースで滝壺のぼりやアドベンチャーを楽しみたい！沖縄の大自然の中で、大切なあの人に感謝の気持ちを伝えたい！...etc<br/>
                      アナタの想いや夢をお聞かせください。全力でサポートいたします！
                    </p>
                  </div>
                </div>
              </div>
              <div className="iso-target lg:delay-[600ms] flex-1 lg:mt-0  feature relative px-4 my-12 max-w-[500px] mx-auto">
                <div className="relative shadow-xl">
                  <div className="absolute z-10 text-[4rem] font-bold -top-[3.4rem] right-4 font-zenmaru">
                    <span className="text-yellow px-1">0</span>
                    <span className="text-main-green">6</span>
                  </div>
                  <StaticImage
                    src="../../images/feature/feature-pic6.jpg"
                    className="aspect-[3/2]"
                    alt="親子カヤックの写真"
                  />
                  <div className="relative">
                    <div className="feature-subtitle relative -mt-8 -ml-4 w-full">
                      <div className="triangle"></div>
                      <h3 className="bg-main-green text-white text-[20px] py-2 px-4 font-bold w-[100%]">
                        冒険の動画や写真データを<br />
                        無料でご提供致します
                      </h3>
                    </div>
                    <p className="px-4 pt-4 pb-8">
                      みなさんの冒険の動画や写真を撮影し、データを無料で差し上げています。<br/>
                      <br />
                      大切なご家族、友人、カップルで撮影した大切な一枚をぜひワンオーシャンで!!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Feature
