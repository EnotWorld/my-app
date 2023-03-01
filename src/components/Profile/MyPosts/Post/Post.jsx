import classes from './Post.module.scss'
import React from 'react';

const Post = (props) => {
    return (
        <>
            <div className={classes.post_item}>
                <img
                    src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"/>
                <h3>{props.message}</h3>
                <span>Like: {props.likesCount}</span>
            </div>
        </>

    )
}
export default Post;