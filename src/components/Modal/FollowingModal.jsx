import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import ModalOneUser from './ModalOneUser';

const FollowingModal = props => {
    const userId = 1;

    const changeFollowingCheck = () => {
        props.setIsFollowingCheck(false);
    };



    const userList = props.followingInfo.map(following => {
        console.log(following);

        return <ModalOneUser
            key={following.id}
            id={following.id}
            user={props.user}
            nickname={following.nickname}
            imageUrl={following.imageUrl}
        />
    })

    return (
        <Modal id='FollowingModal'
            style={{
                overlay: {
                    backgroundColor: 'rgba(255, 255, 255, 0.5)'
                }
            }}
            isOpen={true} ariaHideApp={false} onRequestClose={changeFollowingCheck}
            className='scrollbar-hide overflow-auto outline-none absolute z-50 p-2 text-center -translate-x-1/3 -translate-y-1/2 bg-white border-2 w-[400px] rounded-2xl h-[650px] top-1/2 left-1/2 h-1/2'>
            <div className='mt-6 ml-6'>
                <ul className='pl-0'>
                    {userList}
                </ul>
            </div>
        </Modal>
    )
}

export default FollowingModal