import React from 'react'

import { GatsbyImage } from 'gatsby-plugin-image'

import KayakContentsHeader from '../svg/kayak-contents-header'
import Wave from '../svg/wave'

const MenuContents = (props) => {
  console.log(props)

  let ContentsPic1 = props.ContentsPic1
  let ContentsPic1Title = props.ContentsPic1Title
  let ContentsTitle1 = props.ContentsTitle1
  let ContentsText1 = props.ContentsText1
  let ContentsPic2 = props.ContentsPic2
  let ContentsPic2Title = props.ContentsPic2Title
  let ContentsTitle2 = props.ContentsTitle2
  let ContentsText2 = props.ContentsText2
  let ContentsPic3 = props.ContentsPic3
  let ContentsPic3Title = props.ContentsPic3Title
  let ContentsTitle3 = props.ContentsTitle3
  let ContentsText3 = props.ContentsText3

  return (
    <section id="feature" className="bg-light-yellow">
      <div className="section-container">
        <div className="iso-target pt-16 max-w-[500px] mx-auto">
          <h2>
            <KayakContentsHeader
              alt="ツアー内容"
            />
          </h2>
        </div>
        <div className="">
          <div className="lg:flex max-w-[1300px] mx-auto">
            <div className="lg:flex gap-4">
              <div className="iso-target fadein-opacity flex-1 lg:mt-0  lg:pt-[4rem] feature relative px-4 my-12 max-w-[500px] mx-auto">
                <div className="relative shadow-xl">
                  <div className="absolute z-10 text-[4rem] font-medium -top-[3.4rem] right-4 font-zenmaru">
                    <span className="text-yellow px-1">0</span>
                    <span className="text-main-green">1</span>
                  </div>
                  <GatsbyImage
                    image={ContentsPic2}
                    alt={ContentsPic1Title}
                  />
                  <div className="relative">
                    <div className="feature-subtitle absolute -top-8 -left-4 w-full">
                      <div className="triangle"></div>
                      <h3 className="bg-main-green text-white py-4 px-4 font-bold w-[100%]">
                        <ContentsTitle1/>
                      </h3>
                    </div>
                    <ContentsText1/>
                  </div>
                </div>
              </div>
              <div className="iso-target fadein-opacity lg:delay-[300ms] flex-1 lg:mt-0 lg:pt-[2rem] feature relative px-4 my-12 max-w-[500px] mx-auto">
                <div className="relative shadow-xl">
                  <div className="absolute z-10 text-[4rem] font-medium -top-[3.4rem] right-4 font-zenmaru">
                    <span className="text-yellow px-1">0</span>
                    <span className="text-main-green">2</span>
                  </div>
                  <GatsbyImage
                    image={ContentsPic1}
                    alt={ContentsPic2Title}
                  />
                  <div className="relative">
                    <div className="feature-subtitle absolute -top-8 -left-4 w-full">
                      <div className="triangle"></div>
                      <h3 className="bg-main-green text-white py-4 px-4 font-bold w-[100%]">
                        <ContentsTitle2/>
                      </h3>
                    </div>
                    <ContentsText2/>
                  </div>
                </div>
              </div>
              <div className="iso-target fadein-opacity lg:delay-[600ms] flex-1 lg:mt-0  feature relative px-4 my-12 max-w-[500px] mx-auto">
                <div className="relative shadow-xl">
                  <div className="absolute z-10 text-[4rem] font-medium -top-[3.4rem] right-4 font-zenmaru">
                    <span className="text-yellow px-1">0</span>
                    <span className="text-main-green">3</span>
                  </div>
                  <GatsbyImage
                    image={ContentsPic3}
                    alt={ContentsPic3Title}
                  />
                  <div className="relative">
                    <div className="feature-subtitle absolute -top-8 -left-4 w-full">
                      <div className="triangle"></div>
                      <h3 className="bg-main-green text-white py-4 px-4 font-bold w-[100%]">
                        <ContentsTitle3/>
                      </h3>
                    </div>
                    <ContentsText3/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[6rem] relative">
        <Wave
          color = "white"
        />
      </div>
    </section>
  )
}

export default MenuContents
