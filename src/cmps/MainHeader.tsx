import logoImg from "../assets/img/logo.svg"
import searchIcon from "../assets/img/icons/search.svg"
import homeIcon from '../assets/img/icons/home.svg';
import messagingIcon from "../assets/img/icons/messaging.svg"
import notificationsIcon from "../assets/img/icons/notifications.svg"
import userImg from "../assets/img/user.svg"

export const MainHeader: React.FC = () => {
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

                <article className="flex align-center">
                    <nav className="flex align-center gap15">
                        <div className="flex align-center gap10 select">
                            <img className="icon" src={homeIcon} />
                            <p>Home</p>
                        </div>

                        <div className="flex align-center gap10">
                            <img className="icon" src={messagingIcon} />
                            <p>Messaging</p>
                        </div>

                        <div className="flex align-center gap10">
                            <img className="icon" src={notificationsIcon} />
                            <p>Notifications</p>
                        </div>
                    </nav>

                    <img className="user-img align-self-start" src={userImg} />
                </article>
            </section>
        </header>
    )
}