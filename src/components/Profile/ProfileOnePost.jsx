import React from 'react'
import PostDetailModal from '../Modal/PostDetailModal'
import { useState, useEffect } from 'react'
import axios from 'axios'


const ProfileOnePost = props => {
    const imgSrc = props.imageUrl
    const [modalOpen, setModalOpen] = useState(false);
    const [like, setLike] = useState(false);
    const [likeId, setLikeId] = useState(0);
    const user = props.post.user;
    const userId = 1;

    const showModal = () => {
        setModalOpen(true);
    }

    useEffect(() => {

        const getLike = async () => {
            const response = await axios.get("http://localhost:8080/likes/users/" + user.id + "/posts/" + props.post.id);
            if (response.data) {
                setLike(true);
                setLikeId(response.data.id);
            } else {
                setLike(false);
            }

        }

        getLike();



    }, [props])

    return (
        <div className='ml-2 w-44 min-w-[176px] h-44'>
            <img className='w-full h-full' src={imgSrc} alt="adgasgsadg" onClick={showModal} />
            {modalOpen && <PostDetailModal setModalOpen={setModalOpen} user={props.user} like={like} likeId={likeId} post={props.post} />}
        </div>
    )
}

export default ProfileOnePost