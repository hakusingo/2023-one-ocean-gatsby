import React from 'react'
import { Link } from "gatsby"

import FrontNewsHeader from "../../components/svg/front-news-header"
import NewsTreeTr from "../../components/svg/news-tree-tr"
import NewsTreeBl from "../../components/svg/news-tree-bl"
import Wave from '../svg/wave'

import { BsCaretRightFill } from "react-icons/bs"

const News = () => {

  const newsList = [
    {
      url: "/",
      time: "2022年11月12日",
      timeZone: 2022-11-12,
      text: "最高の天気で、お客様に喜んでもらえました！！"
    },
    {
      url: "/",
      time: "2022年12月12日",
      timeZone: 2022-11-12,
      text: "今週のカヤックは最高の景色が予想されています。"
    },
    {
      url: "/",
      time: "2023年1月12日",
      timeZone: 2022-11-12,
      text: "台風時のご案内"
    }
  ]

  return (
    <section id="front-news" className="bg-light-blue relative">
      <div className="pr-4 pl-4">
        <div className="pt-12 max-w-[500px] mx-auto">
          <h2 className="iso-target">
            <FrontNewsHeader   
              alt="お知らせ News"
            />
          </h2>
        </div>
        <div className="bg-white mt-8 rounded-[12px] relative max-w-[580px] mx-auto">
          <div className="absolute -top-[2rem] -right-[.7rem]">
            <NewsTreeTr/>
          </div>
          <div className="absolute -bottom-[4rem] -left-[1rem]">
            <NewsTreeBl/>
          </div>
          {newsList.map((list, i) => {
            return (
              <Link
                to={list.url}
                key={i}
                className="w-[80%] mx-auto py-6 pb-4 block"
              >
                <time dateTime={list.timeZone} className="text-[12px] font-bold text-main-blue">
                  {list.time}
                </time>
                <p className="py-2 text-center lg:text-[18px]">
                  {list.text}
                </p>
                {i !== 2 && <hr className="w-[80%] mx-auto border-t-2 border-dotted border-gray-400" /> }
              </Link>
            )
          })}
          <hr />
        </div>
      </div>
      <div className="flex justify-center pb-20">
        <Link
          className="flex justify-center items-center news-btn mt-12 py-2 px-8 text-white text-[14px] font-semibold rounded-[22px]"
          to={'/news-list'}
        >
          <span>
            お知らせ一覧
          </span>
          <BsCaretRightFill
            size="1rem"
            className='ml-2'
          />
        </Link>
      </div>
      <Wave
        color = "yellow"
      />
    </section>
  )
}

export default News
