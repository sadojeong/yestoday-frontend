import React from 'react'
import Posts from './Post/Posts';
import axios from 'axios';
import { useState, useEffect, useRef, useCallback } from "react";
import { logDOM } from '@testing-library/react';



const MainFeed = props => {

    const [refresh, setRefresh] = useState(1);
    const [feed, setFeed] = useState([]);

    let obsRef = useRef(null); 	//observer Element
    const [page, setPage] = useState(0); //현재 페이지
    const [load, setLoad] = useState(false); //로딩 스피너
    let preventRef = useRef(true); //옵저버 중복 실행 방지
    let endRef = useRef(false); //모든 글 로드 확인



    const userId = 1;


    // useEffect(() => {


    //     const getPosts = async () => {

    //         const response = await axios.get(`http://localhost:8080/posts/feed/user/${userId}?page=0`);
    //         setFeed(response.data);
    //         console.log(response.data);

    //     }

    //     getPosts();


    // }, [refresh])


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
            const res = await axios({ method: 'GET', url: `http://localhost:8080/posts/feed/user/${userId}?page=${page}` });
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



    return (

        <div>
            <Posts feed={feed} />
            {
                load &&
                <div className="spinner">
                    <img className='w-20 h-10'
                        src="./images/loading_spinner.gif" alt="" />
                </div>
            }
            <div className='' ref={obsRef} />

        </div>


    );
}

export default MainFeed