import React from 'react';
import style from './header.css'
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sideNav';

const Header = (props) => {


    const navBars = () => (
        <div className={style.bars}>
            <FontAwesome name="bars"
                onClick={props.onOpenNav}
                style={{
                    color:'#dfdfdf',
                    padding:'10px',
                    cursor:'pointer',
                    fontSize: '25px',
                }}
            />
        </div>
    )

    const logo = () => (
        <Link to="/" className={style.logo}>
            <img alt="Chelsea logo" src="/images/chelsea-fc-logo-preview.png"/>
        </Link>
    )
    

    return (
        <header className={style.header}>
            <SideNav {...props}/>
            <div className={style.headerOpt}>
                {navBars()}
                <div className={style.header_main}>
                    {logo()}
                    <div className={style.header_title}>
                        <h2>Chelsea FC</h2>
                    </div>
                </div>
            </div>
        </header>
    )


}

export default Header;