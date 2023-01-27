import * as React from "react"
import { Link } from "gatsby"

import FooterLogo from "./svg/footer-logo"
import "./footer.scss"
import FooterLogoPc from "./svg/footer-logo-pc"

const Footer = () => (
  <footer className="bg-main-blue md:bg-white relative z-10">
    <div id="footer-sp" className="text-white md:hidden">
      <h3 className="text-[1.4rem] font-serif font-semibold text-center pt-[2rem]">
        沖縄貸切自然体験<br/>
        アドベンチャーツアー
        <span className="font-zenmaru text-[2.4rem] block font-medium">
          OneOcean
        </span>
        <Link
          to={`/`}
          className="inline-block mx-auto mt-6">
          <FooterLogo/>
        </Link>
      </h3>
      <div className="">
        <ul>
          <li>
            <Link
              to={'/'}
            >
              ホーム
            </Link>
          </li>
          <li>
            <Link
              to={'/kayak'}
            >
              マングローブカヤック
            </Link>
          </li>
          <li>
            <Link
              to={'/trekking'}
            >
              トレッキング
            </Link>
          </li>
          <li>
            <Link
              to={'/yui'}
            >
              結プログラム
            </Link>
          </li>
          <li>
            <Link
              to={'/mui'}
            >
              オリジナルムイツアー
            </Link>
          </li>
          <li>
            <Link
              to={'/blog'}
            >
              ブログ
            </Link>
          </li>
          <li>
            <Link
              to={'/reserve'}
            >
              ご予約
            </Link>
          </li>
          <li>
            <Link
              to={'/contact'}
            >
              お問合わせ
            </Link>
          </li>
          <li>
            <Link
              to={'/notes'}
            >
              注意事項
            </Link>
          </li>
          <li>
            <Link
              to={'/policy'}
            >
              プライバシーポリシー
            </Link>
          </li>
        </ul>
      </div>
      <div className="font-zenmaru text-[32px] font-semibold flex justify-center">
        <a href="tel:080-3968-0313" className="inline-block border-[3px] rounded-[28px] pb-1 px-8 mb-8">
          Tel.090-4471-7311
        </a>
      </div>
      <div className="text-[12px] text-center font-semibold py-2">
        © {new Date().getFullYear()} &middot; one-ocean-toku.com All Rights reserved.
      </div>
    </div>

    <div id="footer-pc" className="hidden md:block overflow-x-hidden">
      <div className="py-8 grid grid-cols-12 px-[80px] max-w-[1500px] mx-auto">
        <div className="col-span-4 max-w-[420px]">
          <Link
            to={`/`}
          >
            <FooterLogoPc/>
          </Link>
          <div className="">
            <h3 className="pt-4 text-main font-semibold">
              沖縄自然体験アドベンチャーツアー
              ワンオーシャン
            </h3>
            <div className="pt-2">
              〒904-2312 沖縄県うるま市勝連平安名1199<br/>
              E-mail:info@one-ocean-toku.com<br/>
              Tel:090-4471-7311
            </div>
          </div>
        </div>
        <div className="footer-pc-right col-span-8 px-4">
          <ul className="lg:text-center flex flex-wrap justify-center">
            <li>
              <Link
                to={'/'}
              >     
                ホーム
              </Link>
            </li>
            <li>
              <Link
                to={'/kayak'}
              >
                カヤック
              </Link>
            </li>
            <li>
              <Link
                to={'/trekking'}
              >
                トレッキング
              </Link>
            </li>
            <li>
              <Link
                to={'/yui'}
              >
                結プログラム
              </Link>
            </li>
            <li>
              <Link
                to={'/mui'}
              >
                ムイツアー
              </Link>
            </li>
            <li>
              <Link
                to={'/reserve'}
              >
                ご予約
              </Link>
            </li>
            <li>
              <Link
                to={'/contact'}
              >
                お問合わせ
              </Link>
            </li>
            <li>
              <Link
                to={'/notes'}
              >
                注意事項
              </Link>
            </li>
            <li>
              <Link
                to={'/policy'}
              >
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link
                to={'/blog-list'}
              >
                ブログ
              </Link>
            </li>
          </ul>
          <p>
            ワンオーシャンでは、お客様一組一組に心から楽しんでツアーに参加して頂きたいと思っています。<br />
            ご要望・お問合せなどございましたら、ご遠慮無く、是非お気軽にご連絡くださいませ。
          </p>
        </div>
      </div>
    <div className="footer-pc-border w-full h-[14px]"></div>
    </div>
  </footer>
)

export default Footer
