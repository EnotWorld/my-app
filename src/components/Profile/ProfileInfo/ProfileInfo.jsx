import React from 'react';
import classes from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
    return (

        <div>
            <div>
                <img
                    src={`https://wp-s.ru/wallpapers/15/16/434830943707071/zelenaya-uzorchataya-malaxitovaya-tekstura.jpg`}
                    alt={''} width={'900px'}/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;