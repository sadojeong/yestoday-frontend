import React from 'react'
import Post from './Post';


const Posts = props => {
    console.log("posts post", props.feed);
    let likeResult = false;
    const postList = props.feed.map(post => (
        //    likes.map(like => {
        //     if(like.feedId === feed.feedID){
        //         likeResult = true;
        //     }
        //    });



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