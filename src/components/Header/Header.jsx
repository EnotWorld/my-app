import classes from './Header.module.scss'
import React from 'react';

const Header = () => {
    return (
        <>
            <header className={classes.header}>
                <img
                    src={`https://is4-ssl.mzstatic.com/image/thumb/Purple125/v4/06/a3/0b/06a30bb8-09b6-ff00-1ac1-c53e4a0912f9/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1024x0w.png`}
                    className={classes.App_logo} alt="logo"/>
            </header>
        </>

    )
}

export default Header;