import React from 'react'
import { useNavigate } from 'react-router-dom';

const Main = props => {
    const navigate = useNavigate();
    const navigateTo = (e) => {
        if (e.target.id === 'logo') {
            navigate("/");
        } else {
            navigate("/profile/" + e.target.id, {
                state: { username: e.target.id }
            })
        }

    }

    return (
        <div className='flex justify-center'>
            <button className='mr-2 border-2 border-black' onClick={navigateTo} id="Lim">Lim</button>
            <button className='mr-2 border-2 border-black' onClick={navigateTo} id="Cho">Cho</button>
            <button className='mr-2 border-2 border-black' onClick={navigateTo} id="Kim">Kim</button>
            <button className='mr-2 border-2 border-black' onClick={navigateTo} id="Jeong">Jeong</button>
        </div>
    )
}

export default Main;
