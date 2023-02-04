import React from 'react'

const ProfileHeader = props => {
    return (
        <div className='flex justify-center w-full mr-7 h-2/6'>
            <div className='flex mt-8'>
                <div className='overflow-hidden w-28 h-28'>
                    <img className='w-full h-full rounded-full' src="\images\duck-g83dee728b_1920.jpg" alt="sasdg" />
                </div>
                <section className='w-2/3 ml-8'>
                    <div className='flex'>
                        <h2>
                            <a href="">{props.user.username}</a>
                        </h2>
                        <div className='flex ml-1'>
                            <div className='flex'>
                                <button className='flex items-center justify-center w-20 ml-2 rounded-lg bg-slate-200'>
                                    <div className='text-[10px] font-bold'>팔로우</div>
                                </button>
                                <button className='flex items-center justify-center w-20 ml-2 rounded-lg bg-slate-200'>
                                    <div className='text-[10px] font-bold'>메시지 보내기</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex mt-3'>
                        <ul className='flex w-full'>
                            <li className='w-1/3'>
                                <div className='flex text-[9px]'>
                                    게시물 <span className='ml-1 font-bold'>8902</span>
                                </div>
                            </li>
                            <li className='w-1/3 ml-2'>
                                <div className='flex text-[9px]'>
                                    팔로워 <span className='ml-1 font-bold'>26.2만</span>
                                </div>
                            </li>
                            <li className='w-1/3 ml-2'>
                                <div className='flex text-[9px]'>
                                    팔로우 <span className='ml-1 font-bold'>3</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='flex mt-3'>
                        <span className='text-[9px] font-bold'>
                            SHOEPRIZE | 슈프라이즈
                        </span>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProfileHeader