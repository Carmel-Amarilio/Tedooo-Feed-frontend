import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import logoImg from "../assets/img/logo.svg"
import searchIcon from "../assets/img/icons/search.svg"
import homeIcon from '../assets/img/icons/home.svg';
import messagingIcon from "../assets/img/icons/messaging.svg"
import notificationsIcon from "../assets/img/icons/notifications.svg"
import userImg from "../assets/img/user.svg"
import moreIcon from "../assets/img/icons/more.png"

export function MainHeader(): React.ReactElement {
    const location = useLocation()
    const [route, setRoute] = useState<string>('')
    const [isNav, setIsNav] = useState<boolean>(false)

    useEffect(() => {
        const route = location.pathname.split('/')[0]
        setRoute(route ? route : 'home');
    }, [])

    return (
        <header className="main-header main-container">
            <section className="flex space-between align-center">

                <article className="flex align-center gap12 align-self-start">
                    <img src={logoImg} className="logo" />
                    <div className="search flex align-center">
                        <label htmlFor="search"><img className="icon" src={searchIcon}></img></label>
                        <input type="name" id="search" name="search" placeholder="Search" />
                    </div>
                </article>

                <article className="nav-container flex align-center">
                    <nav className={`flex align-center gap15 ${!isNav ? 'not-active' : ''}`}>
                        <div className={`flex align-center gap10 ${route === 'home' ? 'select' : ''}`}>
                            <img className="icon" src={homeIcon} />
                            <p>Home</p>
                        </div>

                        <div className={`flex align-center gap10 ${route === 'messaging' ? 'select' : ''}`}>
                            <img className="icon" src={messagingIcon} />
                            <p>Messaging</p>
                        </div>

                        <div className={`flex align-center gap10 ${route === 'notifications' ? 'select' : ''}`}>
                            <img className="icon" src={notificationsIcon} />
                            <p>Notifications</p>
                        </div>
                    </nav>

                    <div className="more-container flex align-center gap10">
                        <img onClick={() => setIsNav(!isNav)} className="more-icon icon" src={moreIcon} />
                        <img className="profile-img align-self-start" src={userImg} />
                    </div>
                </article>
            </section>
        </header>
    )
}