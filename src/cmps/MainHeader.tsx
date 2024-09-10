import { useState } from "react";
import { NavLink } from "react-router-dom";

import { homeIcon, logoImg, messagingIcon, moreIcon, notificationsIcon, searchIcon, userImg } from "../assets/img";

import './../assets/styles/main.scss';

export function MainHeader(): React.ReactElement {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

    function toggleNav() {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <header className="main-header main-container">
            <section className="flex space-between align-center">

                <article className="logo-search-container flex align-center gap12 align-self-start">
                    <img src={logoImg} className="logo" />
                    <div className="search flex align-center">
                        <label htmlFor="search"><img className="icon" src={searchIcon}></img></label>
                        <input type="name" id="search" name="search" placeholder="Search" />
                    </div>
                </article>

                <article className="nav-container flex align-center">
                    <nav className={`flex align-center gap15 ${isNavOpen ? 'open' : ''}`}>
                        <NavLink className='nav-link flex align-center gap10 ' to="/" >
                            <img className="icon" src={homeIcon} />
                            Home
                        </NavLink>

                        <NavLink className='nav-link flex align-center gap10 ' to="/messaging" >
                            <img className="icon" src={messagingIcon} />
                            Messaging
                        </NavLink>

                        <NavLink className='nav-link flex align-center gap10 ' to="/notifications" >
                            <img className="icon" src={notificationsIcon} />
                            Notifications
                        </NavLink>
                    </nav>

                    <div className="more-container flex align-center gap10">
                        <img onClick={toggleNav} className="more-icon icon" src={moreIcon} />
                        <img className="profile-img align-self-start" src={userImg} />
                    </div>

                    <div className="nav-back" onClick={toggleNav}></div>
                </article>
            </section>
        </header>
    )
}