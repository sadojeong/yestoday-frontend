import React from 'react'

import { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileBody from './ProfileBody';
import ProfileHeader from './ProfileHeader';
import ProfileBodyTemp from './ProfileBodyTemp';
import { useLocation, useParams } from 'react-router-dom';
import SideBar from '../SideBar';
import SaveModal from '../Modal/SaveModal';

const baseUrl = 'http://localhost:8080';

const Profile = props => {
    const params = useParams();
    const [user, setUser] = useState([]);
    const [userId, setUserId] = useState([]);
    const [followingInfo, setFollowingInfo] = useState([]);
    const [followerInfo, setFollowerInfo] = useState([]);
    const [postInfo, setPostInfo] = useState([]);
    const userName = params.username;

    const testApiCall = async () => {
        try {
            const response = await axios.get(baseUrl + `/users/bynickname/${userName}`)
            const userId = response.data.id
            // setUserId(response.data.id)
            setUser(response.data);

            const response2 = await axios.get(baseUrl + `/users/following-members/${userId}`)
            setFollowingInfo(response2.data)
            console.log(followingInfo);

            const response3 = await axios.get(baseUrl + `/users/postsinfo/${userId}`)
            setPostInfo(response3.data)
            console.log(postInfo);

            const response4 = await axios.get(baseUrl + `/users/follower-members/${userId}`)
            setFollowerInfo(response4.data)
            console.log(followerInfo);
        }
        catch (err) {
            console.log(err);
        }
    }

    const [saveIsOpen, setSaveIsOpen] = useState(false);

    useEffect(() => {
        testApiCall();
        console.log(userId);
    }, [])



    return (


        <div className='flex justify-center'>
            <div className='hidden border-r-2 sm:hidden md:inline md:w-1/3 lg:w-1/4 xl:w-1/6'>
                <SideBar setSaveIsOpen={setSaveIsOpen}></SideBar>
            </div>
            <div className='md:w-2/3 lg:w-3/4 xl:w-5/6'>
                <ProfileHeader user={user} followingInfo={followingInfo} postInfo={postInfo} followerInfo={followerInfo} />
                <ProfileBodyTemp user={user} postInfo={postInfo} />
                {/* <ProfileBody feeds={feeds} /> */}
            </div>


            {saveIsOpen && <SaveModal setSaveIsOpen={setSaveIsOpen} />}

        </div >
    )
}

export default Profile