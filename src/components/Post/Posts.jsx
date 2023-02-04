import React from 'react'
import Post from './Post';


const Posts = props => {

    let likeResult = false;
    const postList = props.feeds.map(feed => (
        //    likes.map(like => {
        //     if(like.feedId === feed.feedID){
        //         likeResult = true;
        //     }
        //    });


        <Post
            key={feed.feedId}
            feed={feed}

        />
    ));

    return (
        <ul >
            {postList}
        </ul>
    )
}


export default Posts