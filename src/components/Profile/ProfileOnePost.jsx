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
            const response = await axios.get("http://54.92.33.225:8080/likes/users/" + user.id + "/posts/" + props.post.id);
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
        <div className='relative w-56 h-56 mt-10 ml-5'>
            <img className='w-full h-full bg-white hover:opacity-30' src={imgSrc} alt="adgasgsadg" onClick={showModal} />
            <div className="absolute flex justify-center -translate-y-full bg-opacity-0 opacity-0 place-items-center w-44 h-44 hover:bg-opacity-60 hover:opacity-100 bg-neutral-400">
                <p className="text-2xl font-semibold shadow-2xl via-black w-fit h-fit">대림창고</p>
            </div>
            {modalOpen && <PostDetailModal setModalOpen={setModalOpen} user={props.user} like={like} likeId={likeId} post={props.post} />}
        </div>
    )
}

export default ProfileOnePost