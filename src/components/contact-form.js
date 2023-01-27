import React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import ContactComplete from './contact-complete'

const ContactForm = () => {

  const [value, setValue] = useState({})
  const [serverResponse, setServerResponse] = useState(``)

  // フォームの入力内容をリアルタイムでリッスンし仮保存しておく関数②.
  function handleChange(e) {
      value[e.target.id] = e.target.value
      setServerResponse(``)
      setValue({ ...value })
  }

  // フォームが送信されたら、送信処理のために
  // 入力内容（values）をapi/send.jsに送る関数①.
  async function onSubmit(e) {
      e.preventDefault()
      const response = await window
      .fetch(`/api/send`, {
          method: `POST`,
          headers: {
          "content-type": "application/json",
          },
          body: JSON.stringify(value),
      })
      .then(res => res.json())
      setServerResponse(response)
      setValue(``) // フォームの入力内容をカラにする.
      console.log("送信完了")
  }

  return (
    <div className="pt-12 md:pt-[8rem]">
      <div className="max-w-screen-2xl mx-auto">
        {/* text - start */}
        <div className="mb-10 md:mb-16 w-[80%] mx-auto max-w-xl">
          <h2 className="text-main-blue text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">お問合わせフォーム</h2>
          <p className='max-w-[400px] mx-auto'>
            お急ぎの場合はお手数ですがお電話にてお問い合わせください。<br />
            なお、ツアー催行中などで電話に出られない場合は、こちらから折り返しご連絡させていただきます。
            <span className="max-w-screen-md text-gray-500 mx-auto block">*は記入必須です。</span>
          </p>
        </div>
        {/* text - end */}

        { serverResponse ? <ContactComplete/> : null }

        {/* form - start */}
        <div className="bg-white border-4 border-main-blue rounded-lg mt-12 lg:flex items-start max-w-[1000px] mx-auto">


          <form className="max-w-screen-md mx-auto px-4" method="POST" action="/api/send" name="contact">
            <div className='mt-8'>
              <h3 className='inline-block mb-4 font-semibold text-main-blue text-[1.2rem] md:text-[1.6rem]'>ご質問者様の情報記入</h3>
              <div className="mb-2">

                <label htmlFor="formName" className="inline-block mb-2">お名前</label>
                <input
                  type="text"
                  name="formName" 
                  id="formName" 
                  placeholder="例)徳門 正尚"
                  value={value['formName'] || ``}
                  onChange={handleChange}
                  className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
              </div>
              <div className="mb-2">
                <label htmlFor="formEmail" className="inline-block mb-2">メールアドレス*</label>
                <input 
                  type="email"
                  name="formEmail" 
                  id="formEmail"
                  placeholder='example@mail.com' 
                  value={value['formEmail'] || ``}
                  onChange={handleChange}
                  className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="formEmailConfirm" className="inline-block mb-2">確認用メールアドレス*</label>
                <input
                  type="email"
                  id="formEmailConfirm"
                  placeholder='example@mail.com' 
                  value={value['formEmailConfirm'] || ``}
                  onChange={handleChange}
                  name="email" 
                  className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
              </div>
              <div className="mb-2">
                <label htmlFor="phone" className="inline-block mb-2">電話番号*</label>
                <input
                  type="tel"
                  name="phone" 
                  id="phone"
                  value={value['phone'] || ``}
                  onChange={handleChange}
                  className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" 
                />
              </div>
              <div className="">
                <label htmlFor='message' className=''>
                  ご予約に関するご質問・お問い合わせをご記入ください*
                  <textarea
                    id="message"
                    value={value['message'] || ``}
                    onChange={handleChange}
                    name="message" 
                    className="h-[300px] mt-2 w-full bg-white border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" 
                    placeholder='こちらにお問い合わせ内容をご記入ください。'
                  />
                </label>
              </div>
            </div>
            {/* お読み下さい */}
            <div className="mt-8">
              <h3 htmlFor="course" className="inline-block mb-4 font-semibold text-main-blue">ご確認</h3>
              <div className="">
                <input 
                  id="course"
                  className='mr-2' 
                  type="checkbox"
                />
                <label>
                  お問い合わせの内容はこちらでよろしいですか？
                  よろしければチェックを入れて送信ボタンをクリックしてください。
                </label>
              </div>
            </div>
            <hr className='my-4'/>
            <div className="flex justify-center">
              <button
                type="submit"
                className='inline-block border font-semibold bg-main-blue text-white py-1 px-4 rounded'
              >
                送信する
              </button>
            </div>
            <p className="text-gray-400 text-xs mt-12 text-center pb-2">当サイトのプライバシーポリシー 
              <Link to="/policy" className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Privacy Policy</Link>.
            </p>
          </form>
          {/* form - end */}


        </div>
      </div>
    </div>
  )
}

export default ContactForm