import * as React from "react"
import FooterLogo from "./svg/footer-logo"
import { Link } from "gatsby"
import "./footer.scss"
// import FooterPcLogo from "./svg/footer-pc-logo"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
  <footer className="bg-main-blue md:bg-white">
    <div id="footer-sp" className="text-white md:hidden">
      <h3 className="text-[1.4rem] font-serif font-semibold text-center pt-[2rem]">
        沖縄貸切自然体験<br/>
        アドベンチャーツアー
        <span className="font-zenmaru text-[2.4rem] block font-medium">
          OneOcean
        </span>
        <div className="inline-block mx-auto mt-6">
          <FooterLogo/>
        </div>
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
              to={'/contact'}
            >
              お問合わせ
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

    <div id="footer-pc" className="hidden md:block overflow-x-hidden pl-[60px] pr-[60px]">
      <div className="py-8 flex">
        <div className="flex-1 pl-4 pr-4 max-w-[420px]">
          <StaticImage
            src="../images/footer/footer-pc-logo.png"
            alt="ワンオーシャンロゴマーク"
            quality={90}
          />
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
        <div className="footer-pc-right flex-1 px-4">
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
                to={'/contact'}
              >
                お問合わせ
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
