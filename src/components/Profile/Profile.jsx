import React from 'react'

import { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileBody from './ProfileBody';
import ProfileHeader from './ProfileHeader';
import ProfileBodyTemp from './ProfileBodyTemp';
import { useLocation, useParams } from 'react-router-dom';
import SideBar from '../SideBar';
import SaveModal from '../Modal/SaveModal';
import MyProfileHeader from './MyprofileHeader';

const baseUrl = 'http://localhost:8080';

const Profile = props => {
    const params = useParams();
    const location = useLocation();
    const [user, setUser] = useState({});
    const [followingInfo, setFollowingInfo] = useState([]);
    const [followerInfo, setFollowerInfo] = useState([]);
    const [postInfo, setPostInfo] = useState([]);
    const userName = params.username;
    console.log(userName);

    const [saveIsOpen, setSaveIsOpen] = useState(false);
    const showModal = () => {
        setSaveIsOpen(true);
    }


    // useEffect(() => {
    //     axios.get(baseUrl + '/feeds')
    //         .then(response => response.data)
    //         .then(data => {
    //             console.log(data)
    //             setFeeds(data)
    //         })
    // }, []);

    useEffect(() => {
        const userName = location.state.username;

        axios.get(baseUrl + `/members/byusername/${userName}`)
            .then(response => response.data)
            .then(data => {
                console.log(data);
                setUser(data)
            })
    }, [])


    return (


        <div className='flex justify-center'>
            <div className='hidden border-r-2 sm:hidden md:inline md:w-1/3 lg:w-1/4 xl:w-1/6'>
                <SideBar setSaveIsOpen={setSaveIsOpen}></SideBar>
            </div>
            <div className='md:w-2/3 lg:w-3/4 xl:w-5/6'>
                {user.id === 1 ? <MyProfileHeader user={user} followingInfo={followingInfo} postInfo={postInfo} followerInfo={followerInfo} /> : ''}
                {/* <ProfileHeader user={user} followingInfo={followingInfo} postInfo={postInfo} followerInfo={followerInfo} /> */}
                <ProfileBodyTemp user={user} postInfo={postInfo} />
                {/* <ProfileBody feeds={feeds} /> */}
            </div>


            {saveIsOpen && <SaveModal setSaveIsOpen={setSaveIsOpen} />}

        </div >
    )
}

export default Profile