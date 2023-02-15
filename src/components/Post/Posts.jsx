import React from 'react'
import Post from './Post';


const Posts = props => {

    const postList = props.feed.map(post => (

        <Post
            key={post.id}
            post={post}


        />
    ));

    return (
        <ul >
            {postList}
        </ul>
    )
}


export default Posts