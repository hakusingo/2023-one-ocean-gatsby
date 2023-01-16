import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import FeatureHeader from "../svg/feature-header"
import Wave from '../svg/wave'

const Feature = () => {
  return (
    <section id="feature" className="relative pb-24">
      <Wave
        color="main-blue"
      />
      <div className="pr-4 pl-4">
        <div className="pt-12 max-w-[500px] mx-auto mb-12">
          <h2 className="iso-target">
            <FeatureHeader
              alt="ワンオーシャンの特徴"
            />
          </h2>
        </div>
        <div className="">
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
                  />
                  <div className="relative">
                    <div className="feature-subtitle absolute -top-8 -left-4 w-full">
                      <div className="triangle"></div>
                      <h3 className="bg-main-green text-white py-4 px-4 font-bold w-[100%]">
                        <span>
                          １組だけのプライベートツアー
                        </span>
                      </h3>
                    </div>
                    <p className="px-4 py-8 lg:pt-14 xl:pt-10">
                      お客様の「笑顔、思い出、時間」を大切にするために完全貸切のプライベートツアーにしております。<br />
                      プライベートツアーなのでマイペースでのツアーが実現！「ここで写真が撮りたい！」「もう少しここで遊びたい！」などツアー中のリクエストに臨機応変に対応が可能です。
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
                  />
                  <div className="relative">
                    <div className="feature-subtitle absolute -top-8 -left-4 w-full">
                      <div className="triangle"></div>
                      <h3 className="bg-main-green text-white py-4 px-4 font-bold w-[100%]">
                        お手軽にツアーにご参加頂けます!!
                      </h3>
                    </div>
                    <p className="px-4 py-8 lg:pt-14 xl:pt-10">
                      お客様にご用意していただくものはタオルとお着替えのみ！<br />
                      手軽にご参加いただけるのも、ワンオーシャンの人気の理由です。
                      タオルの貸し出しもしております。
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
                  />
                  <div className="relative">
                    <div className="feature-subtitle absolute -top-8 -left-4 w-full">
                      <div className="triangle"></div>
                      <h3 className="bg-main-green text-white py-4 px-4 font-bold w-[100%]">
                        経験豊富なガイドが同行するので<br />
                        安全・安全に楽しめます！！
                      </h3>
                    </div>
                    <p className="px-4 py-8 pt-14 xl:pt-16">
                      お客様の「笑顔、思い出、時間」を大切にするために完全貸切のプライベートツアーにしております。<br />
                      プライベートツアーなのでマイペースでのツアーが実現！「ここで写真が撮りたい！」「もう少しここで遊びたい！」などツアー中のリクエストに臨機応変に対応が可能です。
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
                  />
                  <div className="relative">
                    <div className="feature-subtitle absolute -top-8 -left-4 w-full">
                      <div className="triangle"></div>
                      <h3 className="bg-main-green text-white py-4 px-4 font-bold w-[100%]">
                        大自然の中を探検♪冒険♫
                      </h3>
                    </div>
                    <p className="px-4 py-8 lg:pt-14 xl:pt-10">
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
                    alt="親子カヤックの写真"
                  />
                  <div className="relative">
                    <div className="feature-subtitle absolute -top-8 -left-4 w-full">
                      <div className="triangle"></div>
                      <h3 className="bg-main-green text-white py-4 px-4 font-bold w-[100%]">
                        アナタの想いや夢を叶えます！<br />
                        まずはご相談ください
                      </h3>
                    </div>
                    <p className="px-4 py-8 pt-14 lg:pt-14 xl:pt-16">
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
                    alt="親子カヤックの写真"
                  />
                  <div className="relative">
                    <div className="feature-subtitle absolute -top-8 -left-4 w-full">
                      <div className="triangle"></div>
                      <h3 className="bg-main-green text-white py-4 px-4 font-bold w-[100%] ">
                        冒険の動画や写真データを<br />
                        無料でご提供致します
                      </h3>
                    </div>
                    <p className="px-4 py-8 pt-14 lg:pt-14 xl:pt-16">
                      みなさんの冒険のデータの動画や写真をアクションカメラ等で撮影し、データを差し上げています。<br/>
                      アクションカメラの無料レンタルも行っています。
                      楽しい思い出をお持ち帰りできますよ！
                      （事前予約時にお申し出ください）
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature
