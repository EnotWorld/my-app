import Post from "./Post/Post";
import classes from "./MyPosts.module.scss";
import React from 'react';
import classNames from "classnames";

const MyPosts = (props) => {

    let postData = props.postsElements.map((e, i) => (
        <Post key={i} message={e.message} likesCount={e.likesCount} id={e.id}/>));

    let newPostsElement = React.createRef()
    let AddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostsElement.current.value;
        props.updateNewPostText(text);
    }


    return (
        <>
            <div className={classNames(classes.posts, 'form-group')}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea className={'form-control'} onChange={onPostChange}
                                  ref={newPostsElement}
                                  value={props.newPostText}/>
                    </div>
                    <button onClick={AddPost}>Add post
                    </button>
                </div>
                <div className={classes.posts_block}>
                    {postData}
                </div>
            </div>
        </>

    )
}

export default MyPosts;