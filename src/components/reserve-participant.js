import React from 'react'

const ReserveParticipant = () => {

  let partNum = 1

  return (
    <div className='bg-sky-100 px-2 py-2 my-2 rounded-lg'>
      <div className="py-2">
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
      </div>
    </div>
  )
}

export default ReserveParticipant
