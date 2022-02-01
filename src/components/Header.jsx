//This is the top header component.

//Imports
import time from '../cdn/time.png'
import phone from '../cdn/phone.png'
import mail from '../cdn/mail.png'
import fb from '../cdn/fb.png'
import insta from '../cdn/insta.png'
import twitter from '../cdn/twitter.png'

//Header Component
const Header = () => {
    return (
        <div className="header">
            <div className="header__important-info">
                <ul className="header__important-info__list">
                    <li className="header__important-info__list-items">
                        <span className="header__important-info__list-items__image">
                            <img src={time} alt={"Visiting Hours"} />
                        </span>
                        <p className="header__important-info__list-items__text">
                            Mon-Sat, 8am-4pm
                        </p>
                    </li>
                    <a href="tel:8486887503" className="header__important-info__list__links">
                        <li className="header__important-info__list-items">
                            <span className="header__important-info__list-items__image">
                                <img src={phone} alt={"Phone Number"} />
                            </span>
                            <p className="header__important-info__list-items__text">
                                8486887503
                            </p>
                        </li>
                    </a>
                    <a href="mailto:msncataractiolhospital@gmail.com" className="header__important-info__list__links">
                        <li className="header__important-info__list-items">
                            <span className="header__important-info__list-items__image">
                                <img src={mail} alt={"Email Address"} />
                            </span>
                            <p className="header__important-info__list-items__text">
                                msncataractiolhospital@gmail.com
                            </p>
                        </li>
                    </a>
                </ul>
            </div>
            <div className="header__social">
                <ul className="header__social__list">
                    <a target="_blank" rel='noreferrer' href="https://www.facebook.com" className="header__social__list__links">
                        <li className="header__social__list-items">
                            <span className="header__social__list-items__image">
                                <img src={fb} alt={"Facebook"} />
                            </span>
                        </li>
                    </a>
                    <a target="_blank" rel='noreferrer' href="https://www.instagram.com" className="header__social__list__links">
                        <li className="header__social__list-items">
                            <span className="header__social__list-items__image">
                                <img src={insta} alt={"Instagram"} />
                            </span>
                        </li>
                    </a>
                    <a target="_blank" rel='noreferrer' href="https://www.twitter.com" className="header__social__list__links">
                        <li className="header__social__list-items">
                            <span className="header__social__list-items__image">
                                <img src={twitter} alt={"Twitter"} />
                            </span>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    )
}

//Default export Header
export default Header