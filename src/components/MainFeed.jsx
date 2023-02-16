import React from 'react'
import Posts from './Post/Posts';
import axios from 'axios';
import { useState, useEffect, useRef, useCallback } from "react";
import { logDOM } from '@testing-library/react';
import jwt_decode from 'jwt-decode';



const MainFeed = props => {

    const [refresh, setRefresh] = useState(1);
    const [feed, setFeed] = useState([]);


    let obsRef = useRef(null); 	//observer Element
    const [page, setPage] = useState(0); //현재 페이지
    const [load, setLoad] = useState(false); //로딩 스피너
    let preventRef = useRef(true); //옵저버 중복 실행 방지
    let endRef = useRef(false); //모든 글 로드 확인


    const token = localStorage.getItem('accessToken')
    const userId = jwt_decode(token).sub

    useEffect(() => { //옵저버 생성

        const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
        if (obsRef.current) observer.observe(obsRef.current);
        return () => { observer.disconnect(); }
    }, [refresh])


    useEffect(() => {
        getPosts();
    }, [page])


    const obsHandler = ((entries) => { //옵저버 콜백함수
        console.log("옵저버 콜백");
        const target = entries[0];
        if (!endRef.current && target.isIntersecting && preventRef.current) { //옵저버 중복 실행 방지
            preventRef.current = true; //옵저버 중복 실행 방지
            setPage(prev => prev + 1); //페이지 값 증가
        }
    })

    const getPosts = useCallback(async () => { //글 불러오기  
        setLoad(true); //로딩 시작
        try {
            const res = await axios({ method: 'GET', url: `http://54.248.66.164:8080/posts/feed/user/${userId}?page=${page}` });
            console.log(res.data);
            setFeed(prev => [...prev, ...res.data.content]); //리스트 추가
            if (res.data.last) { //마지막 페이지일 경우
                console.log("last", res.data);
                endRef.current = true;
                // noPostShow();
                // setFeed(prev => [...prev, ...res.data.content]); //리스트 추가
                // prevent_duple.current = true;
            }
        } catch (e) {
            console.error(e)
        } finally {
            setLoad(false); //로딩 종료      
        }
    }, [page]);



    const showModal = () => {
        props.setSaveIsOpen(true);
    }

    return (

        <div>

            <button className='fixed items-center float-right font-semibold bottom-7 lg:right-1/3 xl:right-1/3 md:right-5 right-5 hover:cursor-pointer' >
                <img className='w-[80px] h-[80px] ' src='https://yestoday.s3.ap-northeast-2.amazonaws.com/plus2.png' alt=""
                    onClick={showModal} /></button>
            {feed.length === 0 ?
                <div className='mt-20 text-xl font-bold text-slate-700' >
                    <div className='flex items-center mb-3'>
                        <img className='w-8 h-8 mr-1' src="https://yestoday.s3.ap-northeast-2.amazonaws.com/one.png" alt="" />
                        <span > 오늘의 Todo를 입력하세요</span>
                        <img className='w-5 h-5 ml-1' src="https://yestoday.s3.ap-northeast-2.amazonaws.com/pencil.png" alt="" />
                    </div>
                    <div className='flex items-center mb-3'>
                        <img className='w-8 h-8 mr-1' src="https://yestoday.s3.ap-northeast-2.amazonaws.com/two.png" alt="" />
                        <span >Todo를 완료하면 게시물을 올려 주세요</span>
                        <img className='w-6 h-6 ml-1' src="https://yestoday.s3.ap-northeast-2.amazonaws.com/checked.png" alt="" />
                    </div>
                    <div className='flex items-center'>
                        <img className='w-8 h-8 mr-1' src="https://yestoday.s3.ap-northeast-2.amazonaws.com/three.png" alt="" />
                        <span >다른 사용자를 팔로우 해 피드를 꾸며보세요</span>
                        <img className='ml-1 w-7 h-7' src="https://yestoday.s3.ap-northeast-2.amazonaws.com/pretty-star.png" alt="" />
                    </div>


                </div>
                : <Posts feed={feed} />}
            {
                load &&
                <div className="flex justify-center spinner">
                    <img className='w-10 h-10 duration-150 animate-spin-slow'
                        src="https://yestoday.s3.ap-northeast-2.amazonaws.com/loading.png" alt="" />
                </div>
            }

            <div className='' ref={obsRef} />

        </div>


    );
}

export default MainFeed