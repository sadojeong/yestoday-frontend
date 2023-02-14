import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PostDetailModal from '../Modal/PostDetailModal';
import ProfileTodoModal from '../Modal/ProfileTodoModal';
// import { Link } from 'react-router-dom';


const baseUrl = 'http://localhost:8080/users'

const Post = props => {
    // const feedDate = props.feedDate.substr(0, 10);
    // const [user, setUser] = useState();
    const [like, setLike] = useState(false);
    const [likeId, setLikeId] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    const user = props.post.user;
    const userId = 1;

    const [modalOpen, setModalOpen] = useState(false);
    const showModal = () => {
        setModalOpen(true);
    }

    useEffect(() => {

        const getLike = async () => {

            const response = await axios.get("http://localhost:8080/likes/users/" + userId + "/posts/" + props.post.id);
            if (response.data) {
                setLike(true);
                setLikeId(response.data.id);
            } else {
                setLike(false);
            }

        }

        getLike();



    }, [])

    const addLike = async () => {
        const response = await axios.post("http://localhost:8080/likes", {
            "postId": props.post.id,
            "userId": userId
        })
        setLike(true);
        setLikeId(response.data[0].id);
    }

    const deleteLike = async () => {
        const response = await axios.delete("http://localhost:8080/likes/" + likeId);
        setLike(false);
        setLikeId(0);
    }

    const likeHandler = () => {
        if (like === false) {
            addLike();
        } else {
            deleteLike();
        }
    }


    return (
        <div className='h-[580px] p-2 m-5 border-2 w-96 rounded-2xl'>
            <header className='flex justify-between w-full pb-2 pl-1 m-1 '>
                <div className='flex cursor-pointer' onClick={() => setIsClicked(true)} >
                    <img className='object-scale-down w-12 h-12 mr-3 rounded-full'
                        src={user.imageUrl} alt="" />
                    <span className='flex items-center text-sm'>{user.nickname}</span>

                </div>
                {isClicked && <ProfileTodoModal setIsClicked={setIsClicked} user={user} />}

                {/* <span className='text-xs text-slate-500 '>{feedDate}</span> */}
            </header>
            <div className='relative flex justify-center overflow-hidden transition-all duration-500 h-80 group bg-slate-100'>

                <img className='object-scale-down transition-all duration-500 '
                    src={props.post.imageUrl} alt=""
                />
                <div className='absolute flex p-4 transition-all duration-500 bg-white rounded shadow opacity-80 -bottom-52 group-hover:bottom-2 right-2 left-2 dark:bg-slate-900 dark:shadow-gray-700'
                >
                    <img className='h-5 '
                        src="https://yestoday.s3.ap-northeast-2.amazonaws.com/check-mark-black.png" alt="" />
                    <p className='font-bold break-all'>{props.post.todoName}</p>
                </div>

            </div>
            <div className='flex justify-end '>
                {/* <div className='flex mt-2 text-left h-fit'>
                    <img className='h-5 '
                        src="https://yestoday.s3.ap-northeast-2.amazonaws.com/check-mark-black.png" alt="" />
                    <p className='text-lg font-bold break-all w-80'>
                        {props.post.todoName}
                    </p>
                </div> */}
                <div className='mt-3 mb-1 h-9 '>
                    <img className='h-full transition duration-300 ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110 '
                        src={like ? "https://yestoday.s3.ap-northeast-2.amazonaws.com/yes.png" : "https://yestoday.s3.ap-northeast-2.amazonaws.com/yes-black.png"} alt="" onClick={likeHandler} />
                </div>

            </div>

            <p className='h-20 text-sm text-left break-all'>{props.post.content}</p>
            <p className='h-10 text-sm text-left cursor-pointer text-slate-500 line' onClick={showModal}>댓글 모두보기</p>
            {modalOpen && <PostDetailModal setModalOpen={setModalOpen}
                user={user} like={like} likeId={likeId} post={props.post}
                setLike={setLike} setLikeId={setLikeId} />}

        </div>

    )
}

export default Post