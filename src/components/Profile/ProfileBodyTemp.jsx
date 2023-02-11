import React from 'react'
import ProfileOnePost from './ProfileOnePost'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import HorizontalScroll from 'react-scroll-horizontal'


const ProfileBodyTemp = props => {
    const postList = props.postInfo.map(post => (
        <ProfileOnePost
            key={post.id}
            user={props.user}
            imageUrl={post.imageUrl}
            content={post.content}
            post={post}
        />
    ))
    return (
        <div className='mt-14'>
            <div className='flex justify-center overflow-hidden border-t-2'>
                <div className='w-3/5 mt-4'>
                    <div className='flex flex-wrap w-full ml-16'>
                        {postList}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileBodyTemp