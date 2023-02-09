import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import ModalOneUser from './ModalOneUser';

const FollwerModal = props => {

    const changeFollowerCheck = () => {
        props.setIsFollowerCheck(false);
    };

    const userList = props.followerInfo.map(follower => {
        console.log(follower);

        return <ModalOneUser
            key={follower.id}
            id={follower.id}
            nickname={follower.nickname}
            imageUrl={follower.imageUrl}
        />
    })



    return (
        <Modal id='FollowerModal'
            style={{
                overlay: {
                    backgroundColor: 'rgba(255, 255, 255, 0.5)'
                }
            }}
            isOpen={true} ariaHideApp={false} onRequestClose={changeFollowerCheck}
            className='scrollbar-hide overflow-auto outline-none absolute z-50 p-2 text-center -translate-x-1/3 -translate-y-1/2 bg-white border-2 w-[400px] rounded-2xl h-[650px] top-1/2 left-1/2 h-1/2 max-h-full'>
            <div className='mt-6 ml-6'>
                <ul className='pl-0'>
                    {userList}
                </ul>
                {/* <div className='flex items-center'>
                    <div className='w-12 h-12 overflow-hidden'>
                        <img className='w-full h-full rounded-full' src={imgSrc} alt="sasdg" />
                    </div>
                    <div className='flex w-1/2 ml-6'>
                        sadoJeong
                    </div>
                    <button className='items-center justify-center w-20 rounded-lg bg-slate-200 h-7'>
                        <div className='text-[10px] font-bold'>팔로우</div>
                    </button>
                </div>
                <hr className='mr-6' />
                <div className='flex items-center'>
                    <div className='w-12 h-12 overflow-hidden'>
                        <img className='w-full h-full rounded-full' src={imgSrc} alt="sasdg" />
                    </div>
                    <div className='flex w-1/2 ml-6'>
                        sadoJeong
                    </div>
                    <button className='items-center justify-center w-20 rounded-lg bg-slate-200 h-7'>
                        <div className='text-[10px] font-bold'>팔로우</div>
                    </button>
                </div>
                <hr className='mr-6' />
                <div className='flex items-center'>
                    <div className='w-12 h-12 overflow-hidden'>
                        <img className='w-full h-full rounded-full' src={imgSrc} alt="sasdg" />
                    </div>
                    <div className='flex w-1/2 ml-6'>
                        sadoJeong
                    </div>
                    <button className='items-center justify-center w-20 rounded-lg bg-slate-200 h-7'>
                        <div className='text-[10px] font-bold'>팔로우</div>
                    </button>
                </div>
                <hr className='mr-6' />
                <div className='flex items-center'>
                    <div className='w-12 h-12 overflow-hidden'>
                        <img className='w-full h-full rounded-full' src={imgSrc} alt="sasdg" />
                    </div>
                    <div className='flex w-1/2 ml-6'>
                        sadoJeong
                    </div>
                    <button className='items-center justify-center w-20 rounded-lg bg-slate-200 h-7'>
                        <div className='text-[10px] font-bold'>팔로우</div>
                    </button>
                </div>
                <hr className='mr-6' />
                <div className='flex items-center'>
                    <div className='w-12 h-12 overflow-hidden'>
                        <img className='w-full h-full rounded-full' src={imgSrc} alt="sasdg" />
                    </div>
                    <div className='flex w-1/2 ml-6'>
                        sadoJeong
                    </div>
                    <button className='items-center justify-center w-20 rounded-lg bg-slate-200 h-7'>
                        <div className='text-[10px] font-bold'>팔로우</div>
                    </button>
                </div>
                <hr className='mr-6' />
                <div className='flex items-center'>
                    <div className='w-12 h-12 overflow-hidden'>
                        <img className='w-full h-full rounded-full' src={imgSrc} alt="sasdg" />
                    </div>
                    <div className='flex w-1/2 ml-6'>
                        sadoJeong
                    </div>
                    <button className='items-center justify-center w-20 rounded-lg bg-slate-200 h-7'>
                        <div className='text-[10px] font-bold'>팔로우</div>
                    </button>
                </div>
                <hr className='mr-6' /> */}
            </div>
        </Modal>
    )
}

export default FollwerModal