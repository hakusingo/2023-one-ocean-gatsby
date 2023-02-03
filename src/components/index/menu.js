import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import TourMenuHeader from "../../components/svg/tour-menu-header"
import { BsCaretRightFill } from "react-icons/bs"

import Wave from '../svg/wave'

const Menu = () => {
  return (
    <section id="tour-menu" className="bg-light-yellow relative pb-12">
      <div className="pr-4 pl-4">
        <div className="pt-12 max-w-[500px] mx-auto">
          <h2 className="iso-target">
            <TourMenuHeader
              alt="ツアーメニュー"
            />
          </h2>
        </div>
        <div className="">
          <div className="md:flex md:gap-[1rem] lg:justify-center max-w-[1200px] mx-auto">
            {/* カヤックメニュー */}
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
            {/* トレッキングメニュー */}
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
          </div>
          <div className="md:flex md:gap-[1rem] max-w-[1200px] justify-center mx-auto">
            {/* 結プログラムメニュー */}
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
            {/* ムイツアーメニュー */}
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
          </div>

        </div>
      </div>
      <div className="pt-12">

      </div>
      <Wave
        color="white"
      />
    </section>
  )
}

export default Menu
