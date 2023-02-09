import React from 'react'

const ModalOneUser = props => {
  const imgSrc = '/images/french-bulldog-gd966262cf_1920.jpg'

  return (
    <>
      <div className='flex items-center'>
        <a href={props.nickname} className='flex items-center w-full h-full text-black no-underline'>
          <div className='w-12 h-12 overflow-hidden'>
            <img className='w-full h-full rounded-full' src={props.imageUrl} alt="sasdg" />
          </div>
          <div className='flex w-1/2 ml-6'>
            {props.nickname}
          </div>
        </a>
        <button className='items-center justify-center w-20 rounded-lg bg-slate-200 h-7'>
          <div className='text-[10px] font-bold'>팔로우</div>
        </button>
      </div>
      <hr className='mr-6' />
    </>
  )
}

export default ModalOneUser