import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SideBar = props => {

    const navigate = useNavigate();

    const toHome = () => {
        navigate('/');
    }

    const showModal = () => {
        props.setSaveIsOpen(true);
    }

    return (
        <div className='fixed flex flex-col items-center h-screen md:w-1/3 lg:w-1/4 xl:w-1/6 '>
            <img className='w-40 mt-3 ml-8' src="images/logo.png" alt="" onClick={toHome} />
            {/* <div className='flex pt-10 pb-10 pl-5 pr-5 bg-slate-200 rounded-xl w-50 y-30'>
                <img className='w-7 h-7 '
                    src="https://yestoday.s3.ap-northeast-2.amazonaws.com/user.png" alt="" />
                <span></span>
            </div> */}

            <ul className='mt-20'>
                <li className='flex w-40 m-5 font-semibold' onClick={toHome}>
                    <img className='w-6 h-6 mr-4' src="images/home.png" alt="" />
                    홈</li>
                <li className='flex w-40 m-5 font-semibold '>
                    <img className='w-6 h-6 mr-4' src="images/bell.png" alt="" />
                    알림</li>
                <li className='flex w-40 m-5 font-semibold'>
                    <img className='w-6 h-6 mr-4' src="images/search.png" alt="" />
                    검색</li>
                <li className='flex w-40 m-5 font-semibold'>
                    <img className='w-6 h-6 mr-4' src="images/calendar.png" alt="" />
                    캘린더</li>
                <li className='flex items-center w-40 mt-20 hover:cursor-pointer font-Nanum_Gothic_Bold' onClick={showModal}>
                    <img className='w-8 h-8 mr-2 ' src="images/plus.png" alt="" />
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