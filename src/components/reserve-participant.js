import React from 'react'

const ReserveParticipant = ({participants, deleteParticipant, createParticipant, value, handleChange}) => {

  // let partNum = 1
  const addParticipant = (e) => {
    e.preventDefault()
    const newParticipant = {
      id: Math.floor(Math.random() * 1e4),
      name: "",
      age: "",
    }
    console.log(newParticipant)
    createParticipant(newParticipant)
  }
  const deletePart = (id) => {
    deleteParticipant(id)
  }

  return (
    <ol id="decimalList" className='list-decimal'>
      {
        participants.map((part, i) => {
          return(
            <li className='ml-4 mr-4 bg-sky-100 px-2 py-2 my-2 rounded-lg' key={part.id}>
              <div className="py-2">
                <label className='block mb-2'>
                  名前
                  <input
                    type="text"
                    className="mt-2 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    placeholder='お名前'
                    name={`name${i}`}
                    id={`name${i}`}
                    value={value[`name${i}`] || ``}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className='py-2'>
                <label className='block mb-2'>
                  年齢
                  <input
                    className="mt-2 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    type="number"
                    name={`age${i}`}
                    id={`age${i}`}
                    value={value[`age${i}`] || ``}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className='py-2'>
                <label className='block'>
                  性別
                </label>
                <select>
                  <option value=""></option>
                  <option value="男性">男性</option>
                  <option value="女性">女性</option>
                </select>
                  {/* <input
                    className="mt-2 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    type="number"
                    name={`age${i}`}
                    id={`age${i}`}
                    value={value[`age${i}`] || ``}
                    onChange={handleChange}
                  /> */}
              </div>
              <div className='py-2'>
                <label className='block mb-2'>
                  体重
                  <input
                    className="mt-2 w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    type="number"
                    name={`weight${i}`}
                    id={`wight${i}`}
                    value={value[`wight${i}`] || ``}
                    onChange={handleChange}
                  />
                </label>
              </div>
              {
                i === 0 || (
                  <button
                    className='text-gray-600 text-[14px] font-bold text-right block ml-auto'
                    onClick={(e) => {
                      e.preventDefault()
                      deletePart(part.id)
                    }}>削除</button>
                )
              }
            </li>
          )
        })
      }
      <div>
        <button onClick={addParticipant} className='bg-gray-100 py-2 px-4 mx-auto block my-4 border-2 rounded-lg'>入力欄を追加する</button>
      </div>
      {/* <div className="py-2">
        <label className='block mb-2'>なまえ</label>
        <input className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" type="text" />
      </div>
      <div className="py-2">
        <label className="block mb-2">年齢</label>
        <input className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" type="number" />
      </div>
      <div className="py-2">
        <label className="block mb-2">性別</label>
        <select name="" id="" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'>
          <option value="男">男</option>
          <option value="女性">女</option>
        </select>
      </div>
      <div className="py-2">
        <label className="block mb-2">身長</label>
        <input className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" type="number" />
      </div>
      <div className="py-2">
        <label className="block mb-2">体重</label>
        <input className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" type="number" />
      </div>
      <div className="py-2">
        <label className="block mb-2">足のサイズ</label>
        <input className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" type="number" />
      </div>
      <div className="py-2">
        <label className="block mb-2">視力</label>
        <input className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" type="number" />
      </div>
      <div className="py-2">
        <label className="block mb-2">コンタクト・メガネ</label>
        <input className="w-full text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" type="number" />
      </div> */}
    </ol>
  )
}

export default ReserveParticipant
