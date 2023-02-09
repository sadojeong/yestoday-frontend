import React from 'react'

const ProfileOnePost = props => {
    const imgSrc = props.imageUrl

    return (
        <div className='ml-2 overflow-hidden w-44 h-44'>
            <img className='w-full h-full' src={imgSrc} alt="adgasgsadg" />
        </div>
    )
}

export default ProfileOnePost