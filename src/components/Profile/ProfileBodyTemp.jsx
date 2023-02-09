import React from 'react'
import ProfileOnePost from './ProfileOnePost'

const ProfileBodyTemp = props => {
    console.log(props);
    props.postInfo.map(post => { console.log(post); })
    const postList = props.postInfo.map(post => (
        <ProfileOnePost
            key={post.id}
            imageUrl={post.imageUrl}
            content={post.content}
        />
    ))
    return (
        <div className='mt-14'>
            <div className='flex justify-center border-t-2'>
                <div className='w-3/4 mt-4'>
                    <div className='flex'>
                        {postList}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileBodyTemp