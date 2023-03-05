import classes from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";
import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classNames from "classnames";


const Profile = (props) => {

    return (
        <>
            <div className={classNames(classes.profile, 'card border-success mb-3')}>
                <ProfileInfo/>
                <MyPosts postsElements={props.postsElements}
                         addPost={props.addPost}
                         newPostText={props.newPostText}
                         updateNewPostText={props.updateNewPostText}
                />
            </div>
        </>

    )
}

export default Profile;