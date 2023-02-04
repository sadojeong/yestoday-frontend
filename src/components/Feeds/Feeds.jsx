import React from 'react'
import Feed from './Feed'

const Feeds = props => {

    console.log(props.feeds, 'fds');

    const feedList = props.feeds.map(feed => (
        <Feed
            key={feed.id}
            content={feed.content}
        />
    ))


    return (
        <ul>
            {feedList}
        </ul>
    )
}

export default Feeds