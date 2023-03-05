import React from 'react';
import classes from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
    return (

        <div className={classes.profileInfo}>
            <div className={classes.profileInfo__img}>
                <img
                    src={`https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg`}
                    alt={''}/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;