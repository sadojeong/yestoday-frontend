import React from 'react'
import Posts from './Post/Posts';
import axios from 'axios';
import { useState, useEffect, useRef, useCallback } from "react";


const baseUrl = 'http://localhost:8080/follows'


const FindAllPage = props => {

    const [refresh, setRefresh] = useState(1);
    const [feed, setFeed] = useState([]);
    // const [page, setPage] = useState(1); //현재 페이지
    // const [load, setLoad] = useState(false); //로딩 스피너
    // const obsRef = useRef(null); 	//observer Element
    // const preventRef = useRef(true); //옵저버 중복 실행 방지
    // const endRef = useRef(false); //모든 글 로드 확인


    const userId = props.userId;


    useEffect(() => {
        let followPostsList = [];


        const getPosts = async () => {
            const responseMyPost = await axios.get("http://localhost:8080/users/postsinfo/" + userId);
            const myPosts = responseMyPost.data;

            followPostsList = myPosts
            // if (myPosts.length > 1) {
            //     followPostsList = [...followPostsList, ...myPosts];
            // } else {
            //     followPostsList = [...followPostsList, myPosts];
            // }


            const response = await axios.get("http://localhost:8080/users/following-posts/" + userId);
            const follows = response.data;
            console.log(response.data);

            follows.map(follow => {
                const followPosts = follow.followUser.posts;

                followPostsList = [...followPostsList, ...followPosts]
            });


            const orderedPosts = followPostsList.sort((a, b) => new Date(a.postDateTime) - new Date(b.postDateTime)).reverse();
            setFeed(orderedPosts);

        }

        getPosts();


    }, [refresh])




    // useEffect(() => { //옵저버 생성
    //     const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    //     if (obsRef.current) observer.observe(obsRef.current);
    //     return () => { observer.disconnect(); }
    // }, [])


    // useEffect(() => {
    //     getFeeds();
    // }, [page])


    // const obsHandler = ((entries) => { //옵저버 콜백함수
    //     const target = entries[0];
    //     if (!endRef.current && target.isIntersecting && preventRef.current) { //옵저버 중복 실행 방지
    //         preventRef.current = false; //옵저버 중복 실행 방지
    //         setPage(prev => prev + 1); //페이지 값 증가
    //     }
    // })

    // const getFeeds = useCallback(async () => { //글 불러오기  
    //     console.log('고양이 사진 불러오기');
    //     setLoad(true); //로딩 시작
    //     const response = await axios.get(baseUrl)
    //     if (response.data) {
    //         if (response.data.end) { //마지막 페이지일 경우
    //             endRef.current = true;
    //             // noPostShow();
    //         }
    //         setFeeds(prev => [...prev, { ...response.data[0] }]); //리스트 추가
    //         preventRef.current = true;
    //         console.log(response.data);
    //     } else {

    //         console.log(response); //에러
    //     }
    //     setLoad(false); //로딩 종료
    // }, [page]);


    return (

        <div>
            <Posts feed={feed} setRefresh={setRefresh} />
        </div>


    );
}

export default FindAllPage