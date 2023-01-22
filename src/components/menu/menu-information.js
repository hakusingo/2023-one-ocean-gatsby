import React from 'react'
import { Link } from 'gatsby'

import MenuInfoHeader from "../svg/menu-info-header"

const MenuInformation = () => {
  return (
    <section id="menu-info" className=''>
      <div className="section-container">
        <div className="pt-16 max-w-[500px] mx-auto">
          <h2 className='iso-target'>
            <MenuInfoHeader
              alt="ツアー内容"
            />
          </h2>
          <p className='fadein-opacity mt-8 w-[80%] mx-auto text-[14px] mx-w-[400px]'>
            ワンオーシャンでは、お客様のご要望に答えるツアーもご用意しております。<br />
            自然相手のツアーでもありますので、安心安全なツアーにするために、時間的な変更もございます。<br />
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
                      className='font-semibold rounded-[12px] whitespace-nowrap block bg-main-green text-[12px] text-white my-2 p-2'
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
                      className='font-semibold rounded-[12px] whitespace-nowrap inline-block bg-main-green text-[12px] text-white my-2 py-2 px-6'
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
                      className='font-semibold rounded-[12px] whitespace-nowrap block bg-main-green text-[12px] text-white my-2 py-2 px-6'
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
      <div className='mt-[6rem] relative pb-[6rem]'>
        <svg
          className='absolute bottom-0 z-20 h-auto w-full sm:hidden'
          alt="波"
          xmlns="http://www.w3.org/2000/svg" 
          xmlnsXlink="http://www.w3.org/1999/xlink" 
          width={549} height={48} viewBox="0 0 549 48"><defs><clipPath id="a"><rect width={549} height={48} transform="translate(-19574 -3692)" fill="#F9FAFB" /></clipPath></defs><g transform="translate(19574 3692)" clipPath="url(#a)"><path d="M22225,5434.506v-27.423c34.15,0,34.15-20.082,68.3-20.082s34.15,20.082,68.307,20.082,34.145-20.082,68.3-20.082,34.145,20.082,68.295,20.082,34.15-20.082,68.3-20.082,34.148,20.082,68.3,20.082S22668.945,5387,22703.1,5387s34.15,20.082,68.3,20.082,34.15-20.082,68.3-20.082,34.15,20.082,68.3,20.082v27.423Z" transform="translate(-41799 -9078.582)" fill="#F9FAFB" /></g>
        </svg>
        <svg
          className="absolute bottom-0 z-20 left-0 right-0 hidden sm:block lg:hidden"
          xmlns="http://www.w3.org/2000/svg" width="978.225" height="47.507" viewBox="0 0 978.225 47.507"><path d="M978.225,20.3V47.507H0V20.082C48.913,20.082,48.913,0,97.826,0s48.913,20.082,97.827,20.082S244.563,0,293.474,0s48.909,20.082,97.818,20.082S440.2,0,489.112,0s48.91,20.082,97.82,20.082S635.842,0,684.751,0s48.911,20.082,97.821,20.082S831.486,0,880.4,0s48.912,20.082,97.826,20.082Z" transform="translate(0)" fill="#F9FAFB"/>
        </svg>
        <svg
          className="absolute bottom-0 z-20 left-0 right-0 hidden lg:block xl:hidden"
          xmlns="http://www.w3.org/2000/svg" width="1366" height="47.507" viewBox="0 0 1366 47.507"><g transform="translate(0 -1483.493)"><path d="M22908,5434.508v-27.426c34.156,0,34.156-20.081,68.309-20.081s34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.152-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081S23488.543,5387,23522.7,5387s34.148,20.081,68.3,20.081v27.426Zm-683,0v-27.426c34.152,0,34.152-20.081,68.3-20.081s34.152,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.152-20.081,68.3-20.081,34.152,20.081,68.3,20.081v27.426Z" transform="translate(-22225 -3903.508)" fill="#F9FAFB"/></g>
        </svg>
        <svg
          className="absolute bottom-0 z-20 left-0 right-0 hidden xl:block"
          xmlns="http://www.w3.org/2000/svg" width="2732" height="47.507" viewBox="0 0 2732 47.507"><g transform="translate(24900 6539.033)"><path d="M22908,5434.508v-27.426c34.156,0,34.156-20.081,68.309-20.081s34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.152-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081S23488.543,5387,23522.7,5387s34.148,20.081,68.3,20.081v27.426Zm-683,0v-27.426c34.152,0,34.152-20.081,68.3-20.081s34.152,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.152-20.081,68.3-20.081,34.152,20.081,68.3,20.081v27.426Z" transform="translate(-47125 -11926.034)" fill="#F9FAFB"/><path d="M22908,5434.508v-27.426c34.156,0,34.156-20.081,68.309-20.081s34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.152-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081S23488.543,5387,23522.7,5387s34.148,20.081,68.3,20.081v27.426Zm-683,0v-27.426c34.152,0,34.152-20.081,68.3-20.081s34.152,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.148-20.081,68.3-20.081,34.148,20.081,68.3,20.081,34.152-20.081,68.3-20.081,34.152,20.081,68.3,20.081v27.426Z" transform="translate(-45759 -11926.034)" fill="#F9FAFB"/></g>
        </svg>
      </div>
    </section>
  )
}

export default MenuInformation
