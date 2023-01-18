import React from 'react'
import { useEffect } from 'react'

const Modal = ( props ) => {

  let modal = props.modal
  let modalState= props.modalState

  function disableScroll(event) {
    event.preventDefault();
  }
  
  useEffect(() => {
    document.querySelector("body").classList.add("overflow-hidden")
    document.addEventListener('touchmove', disableScroll, { passive: false });
    return () => {
      document.querySelector("body").classList.remove("overflow-hidden")
      document.addEventListener('touchmove', disableScroll, { passive: true });
    }
  }, [])

  return (
    modal ? (
      null
    ) : (
      // モーダル表示
      <div className='absolute top-0 bottom-0 left-0 right-0 transition duration-300 ease-in-out z-20'>
        <div 
          onClick={(() => {
            modalState(true)
          })} 
          className='absolute top-0 left-0 right-0 bottom-0 bg-gray-800 opacity-20'
        >
        </div>
        <div className="w-[90%] h-[80vh] bg-white left-[50%] top-[50%] -translate-x-[5%] -translate-y-[46%] sticky z-30 rounded">
          <button 
            onClick={(() => {
              modalState(true)
            })}
            className="top-[2rem] left-[2rem] absolute"
          >
            x
          </button>
        </div>
      </div>
    )
  )
}

export default Modal
