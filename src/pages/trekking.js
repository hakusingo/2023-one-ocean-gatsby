import React from 'react'
import { getImage, StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Seo from '../components/seo'

import Layout from '../components/layout'
import { Link } from "gatsby"

import KayakContactButton from "../components/svg/kayak-contact-button"
import MenuScheduleHeader from "../components/svg/menu-schedule-header"
import MenuHero from '../components/menu/menu-hero'
import MenuIntro from '../components/menu/menu-intro'
import KayakInfoHeader from '../components/svg/kayak-info-header'
import MenuContents from '../components/menu/menu-contents'
import MenuEmotion from '../components/menu/menu-emotion'
import Wave from '../components/svg/wave'

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

const Trekking = ({ data }) => {

  let heroImg = getImage(data.trekkingHero.childImageSharp.gatsbyImageData)
  let heroImgPc = getImage(data.kayakHeroPc.childImageSharp.gatsbyImageData)
  let introPic1 = getImage(data.kayakIntro1.childImageSharp.gatsbyImageData)
  let introPic2 = getImage(data.kayakIntro2.childImageSharp.gatsbyImageData)
  let contentsPic1 = getImage(data.kayakContentsPic1.childImageSharp.gatsbyImageData)
  let contentsPic2 = getImage(data.kayakContentsPic2.childImageSharp.gatsbyImageData)
  let contentsPic3 = getImage(data.kayakContentsPic3.childImageSharp.gatsbyImageData)
  let emotion = getImage(data.kayakEmotion.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <MenuHero
        heroImg = {heroImg}
        heroImgPc= {heroImgPc}
        heroTitle= "ター滝トレッキング"
        heroSubTitle= "世界遺産のター滝を楽しむ!!"
        heroColor= "bg-main-blue"
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
      <section id="menu-info" className=''>
        <div className="section-container">
          <div className="pt-16 max-w-[500px] mx-auto">
            <h2 className='iso-target'>
              <KayakInfoHeader
              />
            </h2>
            <p className='fadein-opacity mt-8 w-[80%] mx-auto mx-w-[400px]'>
              ワンオーシャンでは、お客様のご要望に答えるツアーもご用意しております。<br />
              自然相手のツアーでもありますので、安心安全なツアーにするために、時間的な指定もございます。<br />
              お気軽にお問合せ、ご質問くださいませ。
            </p>
          </div>
          <div className="mt-12 max-w-[500px] lg:max-w-[800px] mx-auto">
            <div className="menu-infomation rounded-tl-[12px] rounded-tr-[12px] bg-main-green text-white px-4">
              <h3 className='py-2 text-[26px] font-medium'>
                Information
              </h3>
            </div>
            <table className='w-full'>
              <tbody>
                <tr className='grid grid-cols-6 w-full'>
                  <th className='p-4 border col-span-2 text-left font-normal'>
                    料金
                  </th>
                  <td className='p-4 border col-span-4'>
                    大人 4,800円<br />
                    子供 3,800円(高校生まで)<br />
                    幼児 2,400円(４才児以下)
                  </td>
                </tr>
                <tr className='grid grid-cols-6 w-full'>
                  <th className='p-4 border col-span-2 text-left font-normal'>
                    所要時間
                  </th>
                  <td className='p-4 border col-span-4'>
                    約90分
                  </td>
                </tr>
                <tr className='grid grid-cols-6 w-full'>
                  <th className='p-4 border col-span-2 text-left font-normal'>
                    参加年齢
                  </th>
                  <td className='p-4 border col-span-4'>
                    １才児よりご参加頂けます
                  </td>
                </tr>
                <tr className='grid grid-cols-6 w-full'>
                  <th className='p-4 border col-span-2 text-left font-normal'>
                    開催時間
                  </th>
                  <td className='p-4 border col-span-4'>
                    ツアー開催時間は満潮時の前後２時間が目安になります<br/>
                    お気軽にお問合わせください
                    <div className="flex justify-center">
                      <a 
                        className='text-[12px] md:text-[14px] font-semibold rounded-[12px] whitespace-nowrap block bg-main-green text-white my-2 p-2'
                        href='https://www.data.jma.go.jp/kaiyou/db/tide/suisan/suisan.php?stn=NH'
                      >
                        満潮時刻参考サイトはこちらから▶
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className='grid grid-cols-6 w-full'>
                  <th className='p-4 border col-span-2 text-left font-normal'>
                    集合場所
                  </th>
                  <td className='p-4 border col-span-4'>
                    大浦わんさかパーク<br />
                    住所 沖縄県名護市字大浦465-7<br/>
                    ※予約時間１０分前集合です。<br />
                    <div className="flex justify-center">
                      <a 
                        className='font-semibold rounded-[12px] whitespace-nowrap inline-block bg-main-green text-white my-2 py-2 px-6'
                        href='https://goo.gl/maps/4warquznDCHoQJVD8'
                      >
                        MAP ▶
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className='grid grid-cols-6 w-full'>
                  <th className='p-4 border col-span-2 text-left font-normal'>
                    料金にふくまれるもの
                  </th>
                  <td className='p-4 border col-span-4'>
                    保険料、器材代、写真データ                </td>
                </tr>
                <tr className='grid grid-cols-6 w-full'>
                  <th className='p-4 border col-span-2 text-left font-normal'>
                    持ち物
                  </th>
                  <td className='p-4 border col-span-4'>
                    お着替え、タオル
                  </td>
                </tr>
                <tr className='grid grid-cols-6 w-full'>
                  <th className='p-4 border col-span-2 text-left font-normal'>
                    備考
                  </th>
                  <td className='p-4 border col-span-4'>
                    濡れても良いお洋服でお越し
                    下さい。<br />
                    天候によりますが、ガイドの
                    判断でツアーを中止する場合
                    がございます。
                    ご了承くださいませ。<br />
                    <br/>
                    タオルのレンタル可能です、
                    ご予約時にお申し込みください。<br />
                    <br/>
                    ※下記の注意事項をツアー参加
                    前に必ずお読みくださいませ。
                    <div className="flex justify-center">
                      <Link
                        to={'/notes'}
                        className='font-semibold rounded-[12px] whitespace-nowrap block bg-main-green text-white my-2 py-2 px-6'
                        href='https://www.data.jma.go.jp/kaiyou/db/tide/suisan/suisan.php?stn=NH'
                      >
                        注意事項 ▶
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='mt-[6rem] relative pb-[4rem] '>
          <Wave
            color = "gray"
          />
        </div>
      </section>
      <section id="schedule" className='bg-gray-50'>
        <div className="section-container mb-16">
          <div className="iso-target pt-16 max-w-[500px] mx-auto">
            <h2>
              <MenuScheduleHeader
                alt="マングローブカヤックのタイムスジェジュール"
              />
            </h2>
          </div>
          <div className="mt-12 max-w-[500px] mx-auto lg:hidden">
            <div className="grid grid-cols-5 gap-2 mt-12">
              <div className="flex flex-col items-center -mb-12">
                <div className="w-[40px] rounded-[50%] h-[40px] bg-yellow"></div>
                <div className="border-2 border-dashed h-full"></div>
              </div>
              <div className="col-span-4">
                <div className="">
                  <h3 className='inline-block text-[22px] font-semibold border-b-4 border-main-green'>
                    1.ご予約・お申し込み
                  </h3>
                  <p className='pt-4'>
                    お電話、メール、SNS等でご予約・お申し込み頂けます。
                    潮の満ち引きによる状態も御座いますので、基本的に事前
                    予約をお願い致します。<br />
                    <br />
                    お客様のご要望により、タイムスケジュールをお作りします。
                    ご要望がございましたら、お気軽にお問い合わせください。
                  </p>
                  <Link
                    className="bg-main-green text-white py-2 px-4 text-[14px] rounded-[8px] my-4 inline-block"
                    to={'/reserve'}
                  >
                    ご予約はこちらから ▶
                  </Link>
                  <StaticImage
                    className='my-4 rounded-[12px]'
                    src="../images/menu/kayak/kayak-schedule-contact.jpg"
                    alt="電話をかけてる写真"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2 pt-12">
              <div className="flex flex-col items-center -mb-12">
                <div className="w-[40px] rounded-[50%] h-[40px] bg-yellow"></div>
                <div className="border-2 border-dashed h-full"></div>
              </div>
              <div className="col-span-4">
                <div className="">
                  <h3 className='inline-block text-[22px] font-semibold border-b-4 border-main-green'>
                    2.現地にて集合
                  </h3>
                  <p className='pt-4'>
                    名護市大浦湾での待ち合わせをお願い致します。<br />
                    わんさか大浦パークという場所での集合です。名護
                    ICから約２０分ほどの場所にございます。
                  </p>
                  <a
                    className="bg-main-green text-white py-2 px-4 text-[14px] rounded-[8px] my-4 inline-block"
                    href='https://goo.gl/maps/4warquznDCHoQJVD8'
                  >
                    地図はこちらから ▶
                  </a>
                  <StaticImage
                    className='pt-4 rounded-[12px]'
                    src="../images/menu/kayak/kayak-schedule-place.jpg"
                    alt="わんさか大浦パーク看板"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2 pt-12">
              <div className="flex flex-col items-center -mb-12">
                <div className="w-[40px] rounded-[50%] h-[40px] bg-yellow"></div>
                <div className="border-2 border-dashed h-full"></div>
              </div>
              <div className="col-span-4">
                <div className="">
                  <h3 className='inline-block text-[22px] font-semibold border-b-4 border-main-green'>
                    3.お着替え・装備装着
                  </h3>
                  <p className='py-4'>
                    濡れてもいいお洋服にお着替えをお願い致します。
                    わんさか大浦パークにて着替スペースもございます。
                  </p>
                  <StaticImage
                    className='rounded-[12px]'
                    src="../images/menu/kayak/kayak-schedule-changeclothes.jpg"
                    alt="わんさか大浦湾外観"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2 pt-12">
              <div className="flex flex-col items-center -mb-12">
                <div className="w-[40px] rounded-[50%] h-[40px] bg-yellow"></div>
                <div className="border-2 border-dashed h-full"></div>
              </div>
              <div className="col-span-4">
                <div className="">
                  <h3 className='inline-block text-[22px] font-semibold border-b-4 border-main-green'>
                    4.カヤックレクチャー
                  </h3>
                  <p className='py-4'>
                    コース内容の確認、注意点、ハンドシグナル
                    （ジェスチャーによる意思表示）などのレク
                    チャーを行います。パドルの漕ぎ方、乗り降
                    りの仕方を楽しく練習♪
                  </p>
                  <StaticImage
                    className='pt-4 rounded-[12px]'
                    src="../images/menu/kayak/kayak-schedule-lecture.jpg"
                    alt="カヤックの練習"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2 pt-12">
              <div className="flex flex-col items-center -mb-12">
                <div className="w-[40px] rounded-[50%] h-[40px] bg-yellow"></div>
                <div className="border-2 border-dashed h-full"></div>
              </div>
              <div className="col-span-4">
                <div className="">
                  <h3 className='inline-block text-[22px] font-semibold border-b-4 border-main-green'>
                    5.カヤックにていざ出発!!
                  </h3>
                  <p className='py-4'>
                    レクチャーも終わり、いよいよ出発
                    ゆらゆら揺れるカヤックにみんなで乗り込むのも
                    楽しい！！
                  </p>
                  <StaticImage
                    className='pt-4 rounded-[12px]'
                    src="../images/menu/kayak/kayak-schedule-start.jpg"
                    alt="カヤックに乗り込む"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2 pt-12">
              <div className="flex flex-col items-center -mb-12">
                <div className="w-[40px] rounded-[50%] h-[40px] bg-yellow"></div>
                <div className="border-2 border-dashed h-full"></div>
              </div>
              <div className="col-span-4">
                <div className="">
                  <h3 className='inline-block text-[22px] font-semibold border-b-4 border-main-green'>
                    6.マングローブの林や生物
                  </h3>
                  <p className='py-4'>
                    沖縄特有の亜熱帯地方でしか見れないマングロ
                    ーブ林！
                    冒険の匂いがするほうへ進んでいこう。
                    マングローブの生体もご説明しながらご案内致
                    します。
                  </p>
                  <StaticImage
                    className='pt-4 rounded-[12px]'
                    src="../images/menu/kayak/kayak-contents-pic1.jpg"
                    alt="マングローブ林"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2 pt-12">
              <div className="flex flex-col items-center -mb-12">
                <div className="w-[40px] rounded-[50%] h-[40px] bg-yellow"></div>
                <div className="border-2 border-dashed h-full"></div>
              </div>
              <div className="col-span-4">
                <div className="">
                  <h3 className='inline-block text-[22px] font-semibold border-b-4 border-main-green'>
                    7.大自然の中でゆったり開放感
                  </h3>
                  <p className='py-4'>
                    自然の中で思いっきりアソボー☆
                    みんなで競争しても面白いね♪　遊びかたは十人十色！
                  </p>
                  <StaticImage
                    className='pt-4 rounded-[12px]'
                    src="../images/menu/kayak/kayak-schedule-openness.jpg"
                    alt="マングローブカヤック"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2 pt-12">
              <div className="flex flex-col items-center -mb-12">
                <div className="w-[40px] rounded-[50%] h-[40px] bg-yellow"></div>
              </div>
              <div className="col-span-4">
                <div className="">
                  <h3 className='inline-block text-[22px] font-semibold border-b-4 border-main-green'>
                    8.記念写真・解散
                  </h3>
                  <p className='py-4'>
                    お疲れさまでした。
                    みんなで、笑顔の記念写真を撮って解散。
                    また、一緒に沖縄の自然を楽しみましょう〜♫
                  </p>
                  <StaticImage
                    className='pt-4 rounded-[12px]'
                    src="../images/menu/kayak/kayak-schedule-photo.jpg"
                    alt="記念写真"
                  />
                </div>
              </div>
            </div>
          </div>



          {/* PC TIME SCHEDULE */}
          <div id="pc-kayak-schedule" className="hidden lg:block mt-12 max-w-[1000px] mx-auto">
            <div className="grid grid-cols-7 gap-2 mt-12">
              <div className="col-span-3"></div>
              <div className="flex flex-col items-center -mb-12">
                <div className="w-[40px] rounded-[50%] h-[40px] bg-yellow"></div>
                <div className="border-2 border-dashed h-full"></div>
              </div>
              <div className="col-span-3 iso-target">
                <div className="">
                  <h3 className='inline-block text-[22px] font-semibold border-b-4 border-main-green'>
                    1.ご予約・お申し込み
                  </h3>
                  <p className='pt-4'>
                    お電話、メール、SNS等でご予約・お申し込み頂けます。
                    潮の満ち引きによる状態も御座いますので、基本的に事前
                    予約をお願い致します。<br />
                    <br />
                    お客様のご要望により、タイムスケジュールをお作りします。
                    ご要望がございましたら、お気軽にお問い合わせください。
                  </p>
                  <Link
                    className="bg-main-green text-white py-2 px-4 text-[14px] rounded-[8px] my-4 inline-block"
                    to={'/reserve'}
                  >
                    ご予約はこちらから ▶
                  </Link>
                  <StaticImage
                    className='my-4 rounded-[12px]'
                    src="../images/menu/kayak/kayak-schedule-contact.jpg"
                    alt="電話をかけてる写真"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 -mt-[12rem]">
              <div className="col-span-3 iso-target">
                <div className="">
                  <h3 className='inline-block text-[22px] font-semibold border-b-4 border-main-green'>
                    2.現地にて集合
                  </h3>
                  <p className='pt-4'>
                    名護市大浦湾での待ち合わせをお願い致します。<br />
                    わんさか大浦パークという場所での集合です。名護
                    ICから約２０分ほどの場所にございます。
                  </p>
                  <a
                    className="bg-main-green text-white py-2 px-4 text-[14px] rounded-[8px] my-4 inline-block"
                    href='https://goo.gl/maps/4warquznDCHoQJVD8'
                  >
                    地図はこちらから ▶
                  </a>
                  <StaticImage
                    className='pt-4 rounded-[12px]'
                    src="../images/menu/kayak/kayak-schedule-place.jpg"
                    alt="わんさか大浦パーク看板"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center -mb-12">
                <div className="w-[40px] rounded-[50%] h-[40px] bg-yellow"></div>
                <div className="border-2 border-dashed h-full"></div>
              </div>
              <div className="col-span-3"></div>
            </div>
            <div className="grid grid-cols-7 gap-2 -mt-[8rem]">
              <div className="col-span-3"></div>
              <div className="flex flex-col items-center -mb-12">
                <div className="w-[40px] rounded-[50%] h-[40px] bg-yellow"></div>
                <div className="border-2 border-dashed h-full"></div>
              </div>
              <div className="col-span-3 iso-target">
                <div className="">
                  <h3 className='inline-block text-[22px] font-semibold border-b-4 border-main-green'>
                    3.お着替え・装備装着
                  </h3>
                  <p className='py-4'>
                    濡れてもいいお洋服にお着替えをお願い致します。
                    わんさか大浦パークにて着替スペースもございます。
                  </p>
                  <StaticImage
                    className='rounded-[12px]'
                    src="../images/menu/kayak/kayak-schedule-changeclothes.jpg"
                    alt="わんさか大浦湾外観"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 -mt-[4rem]">
              <div className="col-span-3 iso-target">
                <div className="">
                  <h3 className='inline-block text-[22px] font-semibold border-b-4 border-main-green'>
                    4.カヤックレクチャー
                  </h3>
                  <p className='py-4'>
                    コース内容の確認、注意点、ハンドシグナル
                    （ジェスチャーによる意思表示）などのレク
                    チャーを行います。パドルの漕ぎ方、乗り降
                    りの仕方を楽しく練習♪
                  </p>
                  <StaticImage
                    className='pt-4 rounded-[12px]'
                    src="../images/menu/kayak/kayak-schedule-lecture.jpg"
                    alt="カヤックの練習"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center -mb-12">
                <div className="w-[40px] rounded-[50%] h-[40px] bg-yellow"></div>
                <div className="border-2 border-dashed h-full"></div>
              </div>
              <div className="col-span-3"></div>
            </div>
            <div className="grid grid-cols-7 gap-2 -mt-[4rem]">
              <div className="col-span-3"></div>
              <div className="flex flex-col items-center -mb-12">
                <div className="w-[40px] rounded-[50%] h-[40px] bg-yellow"></div>
                <div className="border-2 border-dashed h-full"></div>
              </div>
              <div className="col-span-3 iso-target">
                <div className="">
                  <h3 className='inline-block text-[22px] font-semibold border-b-4 border-main-green'>
                    5.カヤックにていざ出発!!
                  </h3>
                  <p className='py-4'>
                    レクチャーも終わり、いよいよ出発
                    ゆらゆら揺れるカヤックにみんなで乗り込むのも
                    楽しい！！
                  </p>
                  <StaticImage
                    className='pt-4 rounded-[12px]'
                    src="../images/menu/kayak/kayak-schedule-start.jpg"
                    alt="カヤックに乗り込む"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 -mt-[4rem]">
              <div className="col-span-3 iso-target">
                <div className="">
                  <h3 className='inline-block text-[22px] font-semibold border-b-4 border-main-green'>
                    6.マングローブの林や生物
                  </h3>
                  <p className='py-4'>
                    沖縄特有の亜熱帯地方でしか見れないマングロ
                    ーブ林！
                    冒険の匂いがするほうへ進んでいこう。
                    マングローブの生体もご説明しながらご案内致
                    します。
                  </p>
                  <StaticImage
                    className='pt-4 rounded-[12px]'
                    src="../images/menu/kayak/kayak-contents-pic1.jpg"
                    alt="マングローブ林"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center -mb-12">
                <div className="w-[40px] rounded-[50%] h-[40px] bg-yellow"></div>
                <div className="border-2 border-dashed h-full"></div>
              </div>
              <div className="col-span-3"></div>
            </div>
            <div className="grid grid-cols-7 gap-2 -mt-[4rem]">
              <div className="col-span-3"></div>
              <div className="flex flex-col items-center -mb-12">
                <div className="w-[40px] rounded-[50%] h-[40px] bg-yellow"></div>
                <div className="border-2 border-dashed h-full"></div>
              </div>
              <div className="col-span-3 iso-target">
                <div className="">
                  <h3 className='inline-block text-[22px] font-semibold border-b-4 border-main-green'>
                    7.大自然の中でゆったり開放感
                  </h3>
                  <p className='py-4'>
                    自然の中で思いっきりアソボー☆
                    みんなで競争しても面白いね♪　遊びかたは十人十色！
                  </p>
                  <StaticImage
                    className='pt-4 rounded-[12px]'
                    src="../images/menu/kayak/kayak-schedule-openness.jpg"
                    alt="マングローブカヤック"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 -mt-[4rem]">
              <div className="col-span-3 iso-target">
                <div className="">
                  <h3 className='inline-block text-[22px] font-semibold border-b-4 border-main-green'>
                    8.記念写真・解散
                  </h3>
                  <p className='py-4'>
                    お疲れさまでした。
                    みんなで、笑顔の記念写真を撮って解散。
                    また、一緒に沖縄の自然を楽しみましょう〜♫
                  </p>
                  <StaticImage
                    className='pt-4 rounded-[12px]'
                    src="../images/menu/kayak/kayak-schedule-photo.jpg"
                    alt="記念写真"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center -mb-12">
                <div className="w-[40px] rounded-[50%] h-[40px] bg-yellow"></div>
              </div>
              <div className="col-span-3"></div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center pb-20">
          <Link
            className="flex justify-center items-center news-btn mt-12 py-2 px-8 text-white text-[14px] font-semibold rounded-[22px]"
            to={'/news-list'}
          >
            <span>
              ご予約はコチラ
            </span>
            <BsCaretRightFill
              size="1rem"
              className='ml-2'
            />
          </Link>
        </div> */}
        <div className="iso-target flex justify-center py-[4rem]">
          <Link
            className='max-w-[300px] w-[60%] inline-block mx-auto'
            to={'/contact'}
          >
            <KayakContactButton/>
          </Link>
        </div>
      </section>
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
    trekkingHero: file(relativePath: {eq: "menu/trekking/trekking-hero-pic1.jpg"}) {
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
  }
`

export const Head = () => <Seo title="マングローブカヤックメニュー | ワンオーシャン" />

export default Trekking