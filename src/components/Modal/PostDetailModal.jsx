import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import UpdateModal from './UpdateModal';
import TodoModal from './TodoModal';

const PostDetailModal = props => {
    console.log(props.post);
    console.log("date", props.post.postDateTime);
    const userId = 1
    const [like, setLike] = useState(props.like);
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [refresh, setRefresh] = useState(1);
    const [settingIsOpen, setSettingIsOpen] = useState(false);
    const [updateIsOpen, setUpdateIsOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const isMine = (props.user.id === userId) ? true : false;


    const closeModal = () => {
        props.setModalOpen(false);
    };

    const likeHandler = () => {
        setLike(!like);
    }

    useEffect(() => {
        const getComments = async () => {
            const response = await axios.get("http://localhost:8080/comments/posts/" + props.post.id);

            setComments(response.data);

        }
        getComments();
    }, [refresh])

    const commentDeleteHandler = (comment) => {
        if (comment.userId === userId) {
            if (window.confirm("댓글을 삭제하시겠습니까?")) {
                alert("댓글이 삭제되었습니다.")
            }
        }
    }

    console.log(comments);

    const commentsList = comments.map((comment, index) => (
        <li className='flex justify-between mb-4 h-fit' key={index} >
            <div className='flex w-16 mr-1'>
                <img className='w-6 h-6' src={comment.user.imageUrl}></img>
                <span className='mt-1 text-xs'>{comment.user.nickname}</span>
            </div>
            <span className='w-1/2 text-sm text-left break-all h-fit ' >{comment.commentDesc}</span>
            <span className='text-xs text-slate-500'>{comment.commentDateTime.substr(0, 10)}</span>
        </li >

    ));
    const saveComment = async () => {
        await axios.post('http://localhost:8080/comments', {
            postId: props.post.id,
            userId: 1,
            commentDesc: commentText,
            commentDateTime: new Date(Date.now())

        })
    }
    const clickHandler = (event) => {
        if (isValid) {
            saveComment();
            alert("댓글 작성 완료");
            setRefresh(refresh => refresh * -1)
        } else {
            alert("댓글 내용을 작성해주세요")
        }


        setCommentText('');

    }

    const deleteFeed = async () => {
        await axios.delete('http://localhost:8080/posts/' + props.post.id);
    }

    const deleteHandler = () => {
        setSettingIsOpen(false);
        if (window.confirm("게시물을 삭제하시겟습니까?")) {
            deleteFeed();
            alert('게시물이 삭제되었습니다.')
            closeModal();
        } else {
        }
    }


    const updateHandler = () => {
        setUpdateIsOpen(true)
        setSettingIsOpen(false);
    }



    return (
        <Modal className='outline-none flex fixed z-auto text-center -translate-x-1/2 -translate-y-1/2 bg-white border-2 w-[800px] rounded-2xl h-[650px] top-1/2 left-1/2'
            isOpen={true} onRequestClose={closeModal} ariaHideApp={false}>
            <div className='w-3/5 p-1 border-r-2'>
                <div className='flex justify-between h-12 m-2'>
                    <div className='flex w-fit' onClick={() => setIsClicked(true)}>
                        <img src={props.user.imageUrl}></img>
                        <span className='mt-3 ml-1'>{props.user.nickname}</span>
                    </div>
                    {isClicked && <TodoModal setIsClicked={setIsClicked} post={props.post} user={props.user} />}

                    {isMine && <img className='w-6 h-6 mt-2 ' src='images/more.png' onClick={() => setSettingIsOpen(true)}></img>}


                    <Modal
                        style={{
                            overlay: {
                                backgroundColor: 'rgba(255, 255, 255, 0)'
                            }
                        }}
                        className='absolute w-32 h-20 bg-white border-2 outline-none rounded-xl top-20 left-1/2'
                        isOpen={settingIsOpen} onRequestClose={() => setSettingIsOpen(false)} ariaHideApp={false}>
                        <button className='w-full text-sm h-1/2' onClick={updateHandler}>게시물 수정</button>
                        <hr></hr>
                        <button className='w-full text-sm h-1/2' onClick={deleteHandler}>게시물 삭제</button>
                    </Modal>

                </div>
                <div className='flex justify-center'>
                    <img className='h-[500px] object-scale-down bg-slate-200 w-full' src={props.post.imageUrl} alt="" />
                </div>

                <div className='flex mt-2'>
                    <img className='h-4'
                        src="https://yestoday.s3.ap-northeast-2.amazonaws.com/check-mark-black.png" alt="" />
                    <p className='text-lg font-bold'>
                        {props.post.todoName}
                    </p>
                </div>
                <div className='text-sm text-right text-slate-400'>{props.post.postDateTime.substr(0, 10)}</div>

            </div>

            <div className='w-2/5 h-full '>
                <div className='flex justify-between w-full h-20 mt-5 text-left'>

                    <span className='w-full h-20 text-left'>{props.post.context}</span>

                    <img className='h-12 m-2 transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '
                        src={like ? "https://yestoday.s3.ap-northeast-2.amazonaws.com/yes.png" : "https://yestoday.s3.ap-northeast-2.amazonaws.com/yes-black.png"} alt="" onClick={likeHandler} />

                </div>
                <p className='p-1 mb-2 font-semibold text-left'>댓글 {comments.length}개</p>
                <ul className='p-2 overflow-y-scroll border-2 h-3/5' >
                    {commentsList}
                </ul>

                <div className='w-full p-2 border-2'>
                    <input className='w-5/6 mr-2 outline-none placeholder:font-sm placeholder:text-slate-300'
                        placeholder='댓글 작성하기' type="text" onChange={e => { setCommentText(e.target.value) }}
                        onKeyUp={e => { e.target.value.length > 0 ? setIsValid(true) : setIsValid(false) }}
                        value={commentText} />
                    <button className='p-1 text-sm border-2 rounded-lg bg-slate-300' onClick={clickHandler}>등록</button>
                </div>

            </div>
            {updateIsOpen && <UpdateModal setModalOpen={props.setModalOpen} setUpdateIsOpen={setUpdateIsOpen} post={props.post} user={props.user} ></UpdateModal>}


        </Modal>
    )
}

export default PostDetailModal