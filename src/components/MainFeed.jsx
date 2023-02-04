import React from 'react'
import Posts from './Post/Posts';
import axios from 'axios';
import { useState, useEffect, useRef, useCallback } from "react";


const baseUrl = 'http://localhost:8080/follows'


const FindAllPage = props => {

    const [feeds, setFeeds] = useState([]);
    const [likes, setLikes] = useState([]);


    const userId = 1;


    useEffect(() => {
        let followFeedsList = [];

        const getfeeds = async () => {
            const response = await axios.get(baseUrl + "/users/" + userId);
            const follows = response.data;

            follows.map(follow => {
                const followFeeds = follow.friend.feeds;

                followFeedsList = [...followFeedsList, ...followFeeds]
            });

            if (follows.length === 0) {
                const response = await axios.get("http://localhost:8080/users/byid/" + userId);
                const myFeeds = response.data.posts;
                console.log(myFeeds);



                if (myFeeds.length > 1) {
                    followFeedsList = [...followFeedsList, ...myFeeds];
                } else {
                    followFeedsList = [...followFeedsList, myFeeds];
                }


            } else {
                followFeedsList = [...followFeedsList, ...follows[0].user.feeds];
            }
            const orderedFeeds = followFeedsList.sort((a, b) => new Date(a.feedDateTime) - new Date(b.feedDateTime)).reverse();
            setFeeds(orderedFeeds);

        }

        getfeeds();

        // const getLikes = async () => {
        //     const responseLikes = await axios.get("http://localhost:8080/likes/" + userID)
        //     setLikes(responseLikes.data);
        // }

        // getLikes();


    }, [])


    // const obsRef = useRef(null); 	//observer Element
    // const [feeds, setFeeds] = useState([]);	//Post List
    // const [page, setPage] = useState(1); //현재 페이지
    // const [load, setLoad] = useState(false); //로딩 스피너
    // const preventRef = useRef(true); //옵저버 중복 실행 방지
    // const endRef = useRef(false); //모든 글 로드 확인

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
            <Posts feeds={feeds} likes={likes} />
        </div>


    );
}

export default FindAllPage