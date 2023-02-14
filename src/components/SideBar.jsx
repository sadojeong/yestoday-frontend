import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios';


const SideBar = props => {
    const [user, setUser] = useState();

    useEffect(() => {
        axios.get("http://localhost:8080/users/byid/" + 1)
            .then(response => response.data)
            .then(data => {
                setUser(data);
            });
    }, [])

    const navigate = useNavigate();

    const toHome = () => {
        navigate('/', { state: userId });
    }

    const toUsersSearch = () => {
        navigate('/users-search', { state: userId });
    }

    const toCalendar = () => {
        navigate('/calendar', { state: userId });
    }

    const showModal = () => {
        props.setSaveIsOpen(true);
    }



    return (
        <div className='fixed flex flex-col items-center h-screen md:w-1/3 lg:w-1/4 xl:w-1/6 font-nanum'>
            <img className='w-32 mt-3 hover:cursor-pointer' src='https://yestoday.s3.ap-northeast-2.amazonaws.com/logo.png' alt="" onClick={toHome} />


            <div className='flex-col items-center justify-center w-48 pt-3 pb-3 pl-5 pr-5 mt-5 -ml-3 h-28 bg-slate-200 rounded-xl'>
                <div className='flex items-center'>
                    <img className='object-scale-down w-10 h-10 mr-2 bg-white rounded-full'
                        src={user.imageUrl} alt="" />
                    <span className='text-sm font-semibold'>{user.nickname}</span>
                </div>
                <button className='text-sm '>프로필 보러가기</button>

            </div>

            <ul className='mt-20 text-center'>
                <li className='flex w-40 mb-4 ml-4 font-semibold hover:cursor-pointer' onClick={toHome}>
                    <img className='w-6 h-6 mr-4' src='https://yestoday.s3.ap-northeast-2.amazonaws.com/home.png' alt="" />
                    홈</li>
                <li className='flex w-40 mb-4 ml-4 font-semibold hover:cursor-pointer' onClick={toUsersSearch}>
                    <img className='w-6 h-6 mr-4' src='https://yestoday.s3.ap-northeast-2.amazonaws.com/search.png' alt="" />
                    검색</li>
                <li className='flex w-40 mb-4 ml-4 font-semibold hover:cursor-pointer' onClick={toCalendar}>
                    <img className='w-6 h-6 mr-4' src='https://yestoday.s3.ap-northeast-2.amazonaws.com/calendar.png' alt="" />
                    캘린더</li>

            </ul>


            <button className='flex items-center p-2 mt-10 -ml-5 transition duration-200 hover:bg-blue-100 rounded-xl w-44 hover:shadow-lg hover:cursor-pointer font-nanum' onClick={showModal}>
                <img className='w-8 h-8 mr-2 ' src='https://yestoday.s3.ap-northeast-2.amazonaws.com/plus.png' alt="" />
                게시물 등록하기</button>


        </div>
        // <div className='flex justify-center mt-10'>
        //     <button className='p-2 mr-10 bg-slate-200' onClick={showModal}>등록</button>
        //     <button className='p-2 bg-slate-200 ' onClick={toFindAll}>조회</button>
        //     {modalOpen && <SavePage setModalOpen={setModalOpen} />}
        // </div>
    )
}

export default SideBar