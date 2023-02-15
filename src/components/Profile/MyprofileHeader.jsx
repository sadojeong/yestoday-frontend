import React from 'react'
import Modal from 'react-modal'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import FollowerModal from '../Modal/FollowerModal'
import FollowingModal from '../Modal/FollowingModal'
import axios from 'axios'

const MyProfileHeader = props => {
    const [isFollowingCheck, setIsFollowingCheck] = useState(false);
    const [isFollowerCheck, setIsFollowerCheck] = useState(false);

    const changeFollowerCheck = () => {
        setIsFollowerCheck(true);
    };


    const navigate = useNavigate();

    const clickButtonHandler = () => {
        navigate(`/profile-edit/${props.user.nickname}`, { state: props.user })
    }

    const changeFollowingCheck = () => {
        setIsFollowingCheck(true);
    };

    return (
        <>
            <div className='flex justify-center w-full mr-7 h-[155px]'>
                <div className='flex mt-8'>
                    <div>
                        <div className='w-36 h-36'>
                            <img className='object-cover w-full h-full rounded-full' src={props.user.imageUrl} alt="sasdg" />
                        </div>
                    </div>
                    <section className='w-2/3 ml-14'>
                        <div className='flex'>
                            <h2>
                                <div>{props.user.nickname}</div>
                            </h2>
                            <div className='flex ml-1'>
                                <div className='flex'>
                                    <button className={`flex items-center justify-center w-20 ml-2 rounded-lg bg-slate-200`} onClick={clickButtonHandler}>
                                        <div className='text-[10px] font-bold'>프로필 편집</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-3'>
                            <ul className='flex w-full'>
                                <li className='w-1/3'>
                                    <div className='flex text-[9px]'>
                                        게시물 <span className='ml-1 font-bold'>{props.postInfo.length}</span>
                                    </div>
                                </li>
                                <li className='w-1/3 ml-2'>
                                    <a href onClick={changeFollowerCheck} className='text-black no-underline'>
                                        <div className='flex text-[9px]'>
                                            팔로워 <span className='ml-1 font-bold'>{props.followerInfo.length}</span>
                                        </div>
                                    </a>
                                </li>
                                <li className='w-1/3 ml-2'>
                                    <a href role="link" onClick={changeFollowingCheck} className='text-black no-underline'>
                                        <div className='flex text-[9px]'>
                                            팔로우 <span className='ml-1 font-bold'>{props.followingInfo.length}</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='flex mt-3'>
                            <span className='text-[9px] font-bold'>
                                {props.user.description}
                            </span>
                        </div>
                    </section>
                </div>
            </div>

            {isFollowerCheck && <FollowerModal setIsFollowerCheck={setIsFollowerCheck} followerInfo={props.followerInfo} user={props.user} />}
            {isFollowingCheck && <FollowingModal setIsFollowingCheck={setIsFollowingCheck} followingInfo={props.followingInfo} user={props.user} />}
        </>
    )
}

export default MyProfileHeader