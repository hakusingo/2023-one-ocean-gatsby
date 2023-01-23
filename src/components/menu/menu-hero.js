import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const MenuHero = ( props ) => {

  let heroImg = props.heroImg
  let heroImgPc = props.heroImgPc
  let heroTitle = props.heroTitle
  let heroSubTitle = props.heroSubTitle
  let color = props.color

  return (
    <section className="w-full relative">
      <div className="h-[340px] relative md:h-[400px] lg:h-[600px]">
        <GatsbyImage
          className="absolute top-0 left-0 right-0 bottom-0 md:hidden"
          image={heroImg}
          alt="メニューヒーロー写真"
        />
        <GatsbyImage
          className="absolute top-0 left-0 right-0 bottom-0 hidden md:block"
          image={heroImgPc}
          alt="メニューPCヒーロー写真"
        />
      </div>
      <div className="absolute w-[92%] h-[94%] border-white border-2 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-[12px] rounded-tr-none"></div>
      <div className={`max-w-[900px] rounded-[12px] w-[80%] absolute text-white bottom-0 left-[50%] -translate-x-[50%] bg-${color}`}>
        <h2 className='relative py-2 text-center text-[1.4rem] md:text-[2rem] font-semibold'>
          <span className='py-1 text-[12px] block font-light md:text-8 md:text-[1rem]'>
            {heroSubTitle}
          </span>
            {heroTitle}
          <div className="absolute rounded-[12px] w-[94%] md:w-[98%] h-[88%] border-white border top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"></div>
        </h2>
      </div>
    </section>
  )
}

export default MenuHero
