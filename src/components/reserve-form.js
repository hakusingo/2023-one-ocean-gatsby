import React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import ContactComplete from './contact-complete'
import ReserveParticipant from './reserve-participant'

const ReserveForm = () => {
  const [value, setValue] = useState( { menu: "マングローブカヤック" } )
  const [serverResponse, setServerResponse] = useState(``)

  // ラジオボタン
  const [tourMenu, setTourMenu] = useState("マングローブカヤック")

  const TOUR_MENU_RADIO = ["マングローブカヤック", "ター滝アドベンチャー", "親子結プログラム", "オリジナルムイツアー", "その他"]

  // 参加者リストのロジック
  const partList = [
    {
      id: 1,
      name: "",
      age: "",
      sex: "",
      height: "",
      weight: "",
      foot: "",
      eyesight: "",
      glasses: "",
    },
  ]
  const [ participants, setParticipants ] = useState(partList)
  const deleteParticipant = (id) => {
    const newParticipants = participants.filter((participant) => {
      return participant.id !== id
    })
    setParticipants(newParticipants)
  }
  const createParticipant = (participant) => {
    setParticipants([...participants, participant])
  }

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

        {/* form - start */}
        <div className="bg-white border-4 border-main-blue rounded-lg mt-12 items-start max-w-[1000px] mx-auto">

          { serverResponse ? <ContactComplete/> : (
            <form onSubmit={onSubmit}  method="POST" action="/api/send" name="contact" className="max-w-screen-md mx-auto px-4">
              <div className='mt-8'>
                <h3 className='inline-block mb-4 font-semibold text-main-blue text-[1.2rem] md:text-[1.6rem]'>1. ご希望のコース</h3>
                <div className="mb-2">
                  <p className="inline-block mb-2">ご希望コース*</p>
                  {
                    TOUR_MENU_RADIO.map((menu) => {
                      return (
                        <label
                          className='block text-center py-1 px-2'
                          key={menu}
                        >
                          <input
                            id="menu"
                            type="radio"
                            value={menu}
                            name={menu}
                            checked={tourMenu === menu}
                            onChange={ 
                              function(e) {
                                setTourMenu(e.target.value)
                                handleChange(e)
                              }
                            } 
                          />
                          {menu}
                        </label>
                      )
                    })
                  }
                </div>
                <div className="mb-2">
                  <p htmlFor='date1' className='mb-2 col-span-1'>希望日1</p>
                  <div className="grid grid-cols-2 gap-2">
                    <input className='col-span-1 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2' id="date1" type="date"/>
                    <input className='col-span-1 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2' type="time" />
                  </div>
                </div>
                <div className="mb-2">
                  <p htmlFor='date2' className='mb-2 col-span-1'>希望日2</p>
                  <div className="grid grid-cols-2 gap-2">
                    <input className='col-span-1 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2' id="date2" type="date"/>
                    <input className='col-span-1 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2' type="time" />
                  </div>
                </div>
                <div className="mb-2">
                  <p htmlFor='date3' className='mb-2 col-span-1'>希望日3</p>
                  <div className="grid grid-cols-2 gap-2">
                    <input className='col-span-1 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2' id="date3" type="date"/>
                    <input className='col-span-1 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2' type="time" />
                  </div>
                </div>
                <h3 className='mt-8 inline-block mb-4 font-semibold text-main-blue text-[1.2rem] md:text-[1.6rem]'>2. 代表者情報</h3>
                <div className="mb-2">
                  <label htmlFor="formName" className="inline-block mb-2">お名前<span className='text-pink'>*</span></label>
                  <input
                    required
                    type="text"
                    name="formName" 
                    id="formName" 
                    placeholder="例)徳門 正尚"
                    value={value['formName'] || ``}
                    onChange={handleChange}
                    className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
                </div>
                <div className="mb-2">
                  <label htmlFor="formName" className="inline-block mb-2">フリガナ<span className='text-pink'>*</span></label>
                  <input
                    // required
                    type="text"
                    name="furigana" 
                    id="furigana" 
                    placeholder="トクジョウ マサナオ"
                    value={value['furigana'] || ``}
                    onChange={handleChange}
                    className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
                </div>
                <div className="mb-2">
                  <label htmlFor="formEmail" className="inline-block mb-2">メールアドレス<span className='text-pink'>*</span></label>
                  <input
                    required
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
                  <label htmlFor="formEmailConfirm" className="inline-block mb-2">確認用メールアドレス<span className='text-pink'>*</span></label>
                  <input
                    required
                    type="email"
                    id="formEmailConfirm"
                    placeholder='example@mail.com' 
                    value={value['formEmailConfirm'] || ``}
                    onChange={handleChange}
                    name="email" 
                    className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
                </div>
                <div className="mb-2">
                  <label htmlFor="phone" className="inline-block mb-2">電話番号<span className='text-pink'>*</span></label>
                  <input
                    required
                    type="tel"
                    name="phone" 
                    id="phone"
                    value={value['phone'] || ``}
                    onChange={handleChange}
                    className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" 
                  />
                </div>
                <h3 className='mt-8 inline-block mb-4 font-semibold text-main-blue text-[1.2rem] md:text-[1.6rem]'>3. 参加者情報</h3>
                <div className="mb-2">
                  <p>
                    参加人数
                  </p>
                  <div className="mb-2">
                    <label htmlFor='adalt' className="block mb-2 text-right">大人</label>
                    <select id="adalt" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10名以上">10名以上</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <label htmlFor='child' className="block mb-2 text-right">子供</label>
                    <select id="child" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10名以上">10名以上</option>
                    </select>
                  </div>
                </div>
                <div className="mb-2">
                  <p className='mb-2'>
                    参加者情報
                  </p>
                  <p className='text-[14px] text-gray-800'>
                    ※身長、体重、足のサイズ等、前日の電話で対応可能です。
                  </p>
                  <div className="" id="participant">
                    <ReserveParticipant
                      participants={participants}
                      createParticipant={createParticipant}
                      deleteParticipant={deleteParticipant}
                      handleChange={handleChange}
                      value={value}
                    />
                  </div>
                </div>
                <div className='mb-2'>
                  <p className='mb-2'>健康面での不安*</p>
                  <div className="flex justify-around">
                    <label htmlFor="">
                      <input type="radio" />
                      有り
                    </label>
                    <label htmlFor="">
                      <input type="radio" checked/>
                      無し
                    </label>
                  </div>
                </div>
                <div className="mb-2">
                  <label htmlFor='message' className=''>
                    有りの場合は健康面での不安をご記入ください
                    <textarea
                      required
                      id="message"
                      value={value['message'] || ``}
                      onChange={handleChange}
                      name="message" 
                      className="h-[300px] mt-2 w-full bg-white border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" 
                      placeholder='こちらにご記入ください。'
                    />
                  </label>
                </div>
                <div className="mb-2">
                  <label htmlFor="">
                    宿泊先
                    <input
                      required
                      type="text"
                      name="formName" 
                      id="formName" 
                      value={value['formName'] || ``}
                      onChange={handleChange}
                      className="mt-2 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    />
                  </label>
                </div>
                <div className='mb-2'>
                  <label htmlFor="">
                    沖縄ご到着日
                    <input className='mt-2 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2'
                      id="date1" 
                      type="date"
                    />
                  </label>
                </div>
                <div className='mb-2'>
                  <label htmlFor="">
                    沖縄からお帰りになる日
                    <input className='mt-2 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2'
                      id="date1" 
                      type="date"
                    />
                  </label>
                </div>
              </div>
              <h3 className='mt-8 inline-block mb-4 font-semibold text-main-blue text-[1.2rem] md:text-[1.6rem]'>4. ワンオーシャンについて</h3>
              <div className='mb-2'>
                <p>
                  当サイトを何でお知りになりましたか？  
                </p>
                <div className="mx-4 mt-4 my-4">
                  <div>
                    <label htmlFor="">
                      <input className='mr-4' type="checkbox"/>
                      1. YahooやGoogleなどの検索
                    </label>
                  </div>
                  <div>
                    <label htmlFor="">
                    <input className='mr-4' type="checkbox"/>
                      2. 広告
                    </label>
                  </div>
                  <div>
                    <label htmlFor="">
                      <input className='mr-4' type="checkbox"/>
                      3. 紹介
                    </label>
                  </div>
                  <div>
                    <label htmlFor="">
                      <input className='mr-4' type="checkbox"/>
                      4. その他
                    </label>
                  </div>
                </div>
                <label htmlFor="">
                  2.3.4を選択の場合は広告紙名、紹介者名、その他理由をご記入ください
                  <input
                    required
                    onChange={handleChange}
                    className="mt-2 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  />
                </label>
              </div>
              <h3 className='mt-8 inline-block mb-4 font-semibold text-main-blue text-[1.2rem] md:text-[1.6rem]'>5. ご予約に関するご質問・お問い合わせ</h3>
              <div>
                <label htmlFor="">ご予約に関するご質問・お問合わせ
                  <textarea
                    required
                    id="message"
                    value={value['message'] || ``}
                    onChange={handleChange}
                    name="message" 
                    className="h-[300px] mt-2 w-full bg-white border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" 
                    placeholder='こちらにご記入ください。'
                  />
                </label>
              </div>
              <h3 className='mt-8 inline-block mb-4 font-semibold text-main-blue text-[1.2rem] md:text-[1.6rem]'>6. お読みください</h3>
              <div className="">
                <div className="col-span-8">
                  <div className="bg-gray-100 mb-4 p-4 rounded-lg">
                    申込みに関する注意事項
                    ○キャンセルチャージについて
                    　・前日12:00までのキャンセルの場合はキャンセルチャージは発生しません。
                    　・コースご参加前日12:00以降はコース料金の50％、ご連絡無しのキャンセルの場合はコース料金全額お支払いいただきます。
                    ○お支払いは、現地支払いの現金精算のみとなります。
                  </div>
                  <div className="bg-gray-100 mb-4 p-4 rounded-lg">
                    携帯メールアドレスのお客様へ
                    ○メール受信制限設定をされている方は「@one-ocean-toku.com」の受信許可をお願いいたします。
                    予約フォーム送信完了後、送信確認のための自動返信メールを送信しています。
                  </div>
                  <label htmlFor="">
                    <input type="checkbox" />
                    申込みに関する注意事項に同意する
                  </label>
                </div>
              </div>
              {/* お読み下さい */}
              <div className="mt-8">
                <h3 htmlFor="course" className="inline-block mb-4 font-semibold text-main-blue">ご確認</h3>
                <div className="">
                  <input
                    required
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
          ) }
          
        </div>
      </div>
    </div>
  )
}

export default ReserveForm