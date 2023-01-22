import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Seo from '../components/seo'

import Layout from '../components/layout'
// import { Link } from "gatsby"
// import { BsCaretRightFill } from "react-icons/bs"

// import KayakContactButton from "../components/svg/kayak-contact-button"
// import MenuScheduleHeader from "../components/svg/menu-schedule-header"
import MenuHero from '../components/menu/menu-hero'
import MenuIntro from '../components/menu/menu-intro'
// import KayakInfoHeader from '../components/svg/kayak-info-header'
import MenuContents from '../components/menu/menu-contents'
import MenuEmotion from '../components/menu/menu-emotion'
import MenuInformation from '../components/menu/menu-information'
import MenuSchedule from '../components/menu/menu-schedule'

// import Wave from '../components/svg/wave'

import "./menu.scss"
import "./index.scss"

const IntroH3 = () => {
  return (
    <span className='iso-target fadein-opacity'>
      神秘的なマングローブ林のなかを、<br className='lg:hidden' />
      みんなで楽しくボウケンしよう!!
    </span>
  )
}

const IntroP = () => {
  return (
    <p className='lg:w-[80%] xl:text-[1.2rem] mx-auto'>
      名護市大浦湾に生育するマングローブ林。
      日本でも、大浦川でしか見ることの出来ない景色があります。<br />
      <br/>
      別名「海の森」と呼ばれる神秘の森。さっそうとマングローブ林を抜けるのは本当に気持ちいい!!
      リピーターも多い大人気ツアーです。<br/>
      <br/>
      マングローブ林をカヤックでゆったり散策するのもあり！
      みんなでカヤックレースもできますよ♪
      １組貸切のガイドツアーで小さなお子様から、ご年配の方まで安心してご参加頂けます。
    </p>
  )
}

const ContentsTitle1 = () => {
  return ( 
    <span>
      1組だけのプライベートツアー
    </span>
  )
}
const ContentsTitle2 = () => {
  return ( 
    <span>
      指定文化財の神秘的なマングローブ林
    </span>
  )
}
const ContentsTitle3 = () => {
  return ( 
    <span>
      お子様・初心者でも<br/>
      季節問わず楽しめます！！
    </span>
  )
}
const ContentsText1 = () => {
  return (
    <p className="px-4 pt-4 pb-8 bg-white">
      お客様の「笑顔、思い出、時間」を大切にするために完全貸切のプライベートツアーにしております。<br />
      プライベートツアーなのでマイペースでのツアーが実現！「ここで写真が撮りたい！」「もう少しここで遊びたい！」などツアー中のリクエストに臨機応変に対応が可能です。
    </p>
  )
}
const ContentsText2 = () => {
  return (
    <p className="px-4 pt-4 pb-8 bg-white">
      沖縄県名護市指定文化財である大浦湾のマングローブ林。<br />
      ゆったりと進むカヤックからの視点や眺めは最高!! 水中から力強くのびるマングローブを間近に観察できるのは、カヤックならでは最大の魅力です。
      大自然に囲まれた水上をさっそうと進むのは、いつでも気持ちいい。
    </p>
  )
}
const ContentsText3 = () => {
  return (
    <p className="px-4 pt-4 pb-8 bg-white">
      カヤックはお子様と自然体験をしたい。 沖縄ならではの自然体験を気軽に満喫したい。と思う人にはもってこいのツアーです。<br />
      マングローブ林を一つの学習体験でなく 参加者に合った遊び方をプロデュースします！<br />
      一年中遊べる人気のアドベンチャーツアー。
    </p>
  )
}

const MenuInfo = [
  {
    title: `料金`,
    desc: `大人 4,800円\n子供 3,800円\n幼児 2,400円(4才児以下)`
  },
  {
    title: `所要時間`,
    desc: `約90分`
  },
  {
    title: `参加年齢`,
    desc: `１才児よりご参加頂けます`
  },
  {
    title: `開催時間`,
    desc: `ツアー開催時間は満潮時の前後２時間が目安になります\nお気軽にお問合わせください`,
    aLinkName: `満潮時刻参考サイトはコチラ`,
    url: `https://www.data.jma.go.jp/kaiyou/db/tide/suisan/suisan.php?stn=NH`
  },
  {
    title: `集合場所`,
    desc: `大浦わんさかパーク\n住所 沖縄県名護市字大浦465-7\n※予約時間１０分前集合です。`,
    aLinkName: `Map`,
    url: `https://www.google.com/maps/place/%E3%82%8F%E3%82%93%E3%81%95%E3%81%8B%E5%A4%A7%E6%B5%A6%E3%83%91%E3%83%BC%E3%82%AF/@26.55469,128.0383823,17z/data=!3m1!4b1!4m5!3m4!1s0x34e454f4e6655555:0x59ce77f8b40f82eb!8m2!3d26.55469!4d128.040571?coh=164777&entry=tt&shorturl=1`
  },
  {
    title: `料金にふくまれるもの`,
    desc: `保険料、器材代、写真データ`
  },
  {
    title: `持ち物`,
    desc: `お着替え、タオル`
  },
  {
    title: `備考`,
    desc: `濡れても良いお洋服でお越し下さい。\n天候によりますが、ガイドの 判断でツアーを中止する場合 がございます。 ご了承くださいませ。\n\nタオルのレンタル可能です、 ご予約時にお申し込みください。\n\n※下記の注意事項をツアー参加 前に必ずお読みくださいませ。`,
    linkName: `注意事項`,
    url: `/coution`
  },
]

const menuSchedule = [
  {
    title: `1.ご予約・申し込み`,
    text: `お電話、メール、SNS等でご予約・お申し込み頂けます。\n潮の満ち引きによる状態も御座いますので、基本的に事前予約をお願い致します。\nお客様のご要望により、タイムスケジュールをお作りします。 ご要望がございましたら、お気軽にお問い合わせくださいませ。`,
    linkName: `ご予約はコチラ`,
    url: `/contact`
  },
  {
    title: `2.現地にて集合`,
    text: `名護市大浦湾での待ち合わせをお願い致します。\nわんさか大浦パークという場所での集合です。名護 ICから約２０分ほどの場所にございます。`,
    aLinkName: `地図はコチラ`,
    url: `https://google.com`
  },
  {
    title: `3.お着替え・装備装着`,
    text: `濡れてもいいお洋服にお着替えをお願い致します。 わんさか大浦パークにて着替スペースもございます。`,
  },
  {
    title: `4.カヤックレクチャー`,
    text: `安全第一の為コース内容の確認、注意点、ハンドシグナル（ジェスチャーによる意思表示）などのレクチャーを行います。\nパドルの漕ぎ方、乗り降りの仕方を楽しく練習♪`,
  },
  {
    title: `5.カヤックにていざ出発!!`,
    text: `レクチャーも終わり、いよいよ出発 ゆらゆら揺れるカヤックにみんなで乗り込むのも 楽しい！！`,
  },
  {
    title: `6.マングローブの林や生物を楽しむ`,
    text: `沖縄特有の亜熱帯地方でしか見れないマングロ ーブ林！冒険の匂いがするほうへ進んでいこう。\nマングローブの生体もご説明しながらご案内致します。`,
  },
  {
    title: `7.大自然の中でゆったり開放感`,
    text: `自然の中で思いっきりアソボー☆\nみんなで競争しても面白いね♪遊びかたは十人十色！\n存分に楽しもう。`,
  },
  {
    title: `8.記念写真・解散`,
    text: `お疲れさまでした。\nみんなで、笑顔の記念写真を撮って解散。また、一緒に沖縄の自然を楽しみましょう〜♫`,
  },
]

const MenuEmotionP = () => {
  return (
    <p className="mt-12 text-center lg:text-[20px]">
      沖縄県名護市指定文化財である<br/>大浦湾のマングローブ林。<br />
      <br />
      ゆったりと進むカヤックからの<br />視点や眺めは最高!!<br/>
      <br />
      水中から力強くのびるマングローブを<br />間近に観察できるのは、<br />カヤックならでは最大の魅力です。<br />
      <br />
      大自然に囲まれた水上を<br />さっそうと進むのは<br />いつでも気持ちいい。
    </p>
  )
}

const Kayak = ({ data }) => {

  let heroImg = getImage(data.kayakHero.childImageSharp.gatsbyImageData)
  let heroImgPc = getImage(data.kayakHeroPc.childImageSharp.gatsbyImageData)
  let introPic1 = getImage(data.kayakIntro1.childImageSharp.gatsbyImageData)
  let introPic2 = getImage(data.kayakIntro2.childImageSharp.gatsbyImageData)
  let contentsPic1 = getImage(data.kayakContentsPic1.childImageSharp.gatsbyImageData)
  let contentsPic2 = getImage(data.kayakContentsPic2.childImageSharp.gatsbyImageData)
  let contentsPic3 = getImage(data.kayakContentsPic3.childImageSharp.gatsbyImageData)
  let schedulePics = []
  schedulePics.push(getImage(data.kayakSchedulePic1.childImageSharp.gatsbyImageData))
  schedulePics.push(getImage(data.kayakSchedulePic2.childImageSharp.gatsbyImageData))
  schedulePics.push(getImage(data.kayakSchedulePic3.childImageSharp.gatsbyImageData))
  schedulePics.push(getImage(data.kayakSchedulePic4.childImageSharp.gatsbyImageData))
  schedulePics.push(getImage(data.kayakSchedulePic5.childImageSharp.gatsbyImageData))
  schedulePics.push(getImage(data.kayakSchedulePic6.childImageSharp.gatsbyImageData))
  schedulePics.push(getImage(data.kayakSchedulePic7.childImageSharp.gatsbyImageData))
  schedulePics.push(getImage(data.kayakSchedulePic8.childImageSharp.gatsbyImageData))

  let emotion = getImage(data.kayakEmotion.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <MenuHero
        heroImg = {heroImg}
        heroImgPc= {heroImgPc}
        heroTitle= "マングローブカヤック"
        heroSubTitle= "マングローブを巡る旅、カヤックで楽しもう"
        heroColor= "bg-main-green"
      />
      <MenuIntro
        IntroH3 = {IntroH3}
        IntroH3Color = "text-main-green"
        IntroP = {IntroP}
        IntroPic1 = {introPic1}
        IntroPic2 = {introPic2}
      />
      <MenuContents
        ContentsPic1 = {contentsPic1}
        ContentsPic1Title = "マングローブカヤック写真"
        ContentsTitle1 = {ContentsTitle1}
        ContentsText1 = {ContentsText1}
        ContentsPic2 = {contentsPic2}
        ContentsPic2Title = "マングローブ林の写真"
        ContentsTitle2 = {ContentsTitle2}
        ContentsText2 = {ContentsText2}
        ContentsPic3 = {contentsPic3}
        ContentsPic3Title = "親子マングローブカヤック写真"
        ContentsTitle3 = {ContentsTitle3}
        ContentsText3 = {ContentsText3}
      />
      <MenuInformation
        MenuInfo = {MenuInfo}
      />
      <MenuSchedule
        schedulePics = {schedulePics}
        menuSchedule = {menuSchedule}
      />
      <MenuEmotion
        menuEmotionH3 = "マングローブは生物・植物の宝庫です"
        menuEmotionP = {MenuEmotionP}
        emotion = {emotion}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    kayakHero: file(relativePath: {eq: "menu/kayak/kayak-hero.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
    kayakHeroPc: file(relativePath: {eq: "menu/kayak/kayak-hero-pc.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    kayakIntro1: file(relativePath: {eq: "menu/kayak/intro1.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    kayakIntro2: file(relativePath: {eq: "menu/kayak/intro2.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    kayakContentsPic1: file(relativePath: {eq: "menu/kayak/kayak-contents-pic1.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    kayakContentsPic2: file(relativePath: {eq: "menu/kayak/kayak-contents-pic2.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    kayakContentsPic3: file(relativePath: {eq: "menu/kayak/kayak-contents-pic3.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    kayakEmotion: file(relativePath: {eq: "menu/kayak/kayak-emotion.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    kayakSchedulePic1: file(relativePath: {eq: "menu/kayak/kayak-schedule-contact.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    kayakSchedulePic2: file(relativePath: {eq: "menu/kayak/kayak-schedule-place.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    kayakSchedulePic3: file(relativePath: {eq: "menu/kayak/kayak-schedule-changeclothes.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    kayakSchedulePic4: file(relativePath: {eq: "menu/kayak/kayak-schedule-lecture.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    kayakSchedulePic5: file(relativePath: {eq: "menu/kayak/kayak-schedule-start.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    kayakSchedulePic6: file(relativePath: {eq: "menu/kayak/kayak-contents-pic1.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    kayakSchedulePic7: file(relativePath: {eq: "menu/kayak/kayak-schedule-openness.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    kayakSchedulePic8: file(relativePath: {eq: "menu/kayak/kayak-schedule-photo.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

export const Head = () => <Seo title="マングローブカヤックメニュー | ワンオーシャン" />

export default Kayak