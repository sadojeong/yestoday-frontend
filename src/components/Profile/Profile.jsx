import React from 'react'

import { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileBody from './ProfileBody';
import ProfileHeader from './ProfileHeader';
import ProfileBodyTemp from './ProfileBodyTemp';
import { useLocation } from 'react-router-dom';

const baseUrl = 'http://localhost:8080';

const Profile = props => {
    const location = useLocation();
    const [user, setUser] = useState([]);
    const [feeds, setFeeds] = useState([]);

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
        <div className='bg-white'>
            <ProfileHeader user={user} />
            <ProfileBodyTemp user={user} />
            {/* <ProfileBody feeds={feeds} /> */}
        </div>
    )
}

export default Profile