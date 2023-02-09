import React from 'react'
import PostDetailModal from '../Modal/PostDetailModal'
import { useState } from 'react'

const ProfileOnePost = props => {
    const imgSrc = props.imageUrl
    const [modalOpen, setModalOpen] = useState(false);
    const showModal = () => {
        setModalOpen(true);
    }

    return (
        <div className='ml-2 overflow-hidden w-44 h-44'>
            <img className='w-full h-full' src={imgSrc} alt="adgasgsadg" onClick={showModal} />
            {modalOpen && <PostDetailModal setModalOpen={setModalOpen} user={user} like={like} post={props.post} />}
        </div>
    )
}

export default ProfileOnePost