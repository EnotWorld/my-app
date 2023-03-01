import Post from "./Post/Post";
import classes from "./MyPosts.module.scss";
import React from 'react';

const MyPosts = () => {
    return (
        <>
            <div className={classes.posts}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <button>Add post</button>
                </div>
                <div className={classes.posts_block}>
                    <Post message={'Hi world'} likesCount={20}/>
                    <Post message={'Mistery'} likesCount={321}/>
                    <Post message={'Ssshhh'} likesCount={3434}/>
                </div>
            </div>
        </>

    )
}

export default MyPosts;