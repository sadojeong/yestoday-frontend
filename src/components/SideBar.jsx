import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import home from '../images/home.png'
import search from '../images/search.png'
import bell from '../images/bell.png'
import calendar from '../images/calendar.png'
import plus from '../images/plus.png'


const SideBar = props => {
    console.log(props.userId + 'sidebaruserId');
    const userId = props.userId;
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
        <div className='fixed flex flex-col items-center h-screen md:w-1/3 lg:w-1/4 xl:w-1/6 '>
            <img className='w-40 mt-3 ml-8 hover:cursor-pointer' src={logo} alt="" onClick={toHome} />
            {/* <div className='flex pt-10 pb-10 pl-5 pr-5 bg-slate-200 rounded-xl w-50 y-30'>
                <img className='w-7 h-7 '
                    src="https://yestoday.s3.ap-northeast-2.amazonaws.com/user.png" alt="" />
                <span></span>
            </div> */}

            <ul className='mt-32'>
                <li className='flex w-40 mb-4 ml-4 font-semibold hover:cursor-pointer' onClick={toHome}>
                    <img className='w-6 h-6 mr-4' src={home} alt="" />
                    홈</li>
                <li className='flex w-40 mb-4 ml-4 font-semibold hover:cursor-pointer'>
                    <img className='w-6 h-6 mr-4' src={bell} alt="" />
                    알림</li>
                <li className='flex w-40 mb-4 ml-4 font-semibold hover:cursor-pointer' onClick={toUsersSearch}>
                    <img className='w-6 h-6 mr-4' src={search} alt="" />
                    검색</li>
                <li className='flex w-40 mb-4 ml-4 font-semibold hover:cursor-pointer' onClick={toCalendar}>
                    <img className='w-6 h-6 mr-4' src={calendar} alt="" />
                    캘린더</li>
                <li className='flex items-center p-2 mt-20 -ml-5 hover:bg-blue-100 rounded-xl w-44 hover:shadow-lg hover:cursor-pointer font-Nanum_Gothic_Bold' onClick={showModal}>
                    <img className='w-8 h-8 mr-2 ' src={plus} alt="" />
                    게시물 등록하기</li>
            </ul>

        </div>
        // <div className='flex justify-center mt-10'>
        //     <button className='p-2 mr-10 bg-slate-200' onClick={showModal}>등록</button>
        //     <button className='p-2 bg-slate-200 ' onClick={toFindAll}>조회</button>
        //     {modalOpen && <SavePage setModalOpen={setModalOpen} />}
        // </div>
    )
}

export default SideBar