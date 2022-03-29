//This is the fully featured single, all in one page of the entire site

//Imports
import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import logo from '../cdn/logo.png'
import { AppContext } from '../store/Data'
import menu from '../cdn/menu.png'
import cross from '../cdn/cross.png'
import time from '../cdn/time1.png'
import phone from '../cdn/phone1.png'
import mail from '../cdn/mail1.png'
import fb from '../cdn/fb1.png'
import insta from '../cdn/insta1.png'
import twitter from '../cdn/twitter1.png'
import care from '../cdn/care.png'
import appointment from '../cdn/appointment.png'
// import video from '../cdn/video.mp4'
import about from '../cdn/aboutExp.jpg'
import { Link } from 'react-router-dom'
import Header from './Header'
import { Carousel1, Carousel2, Carousel3 } from './Carousel'
import recruiter from '../cdn/recruiter.jpg'
import benefits1 from '../cdn/benefits1.png'
import benefits2 from '../cdn/benefits2.png'
import benefits3 from '../cdn/benefits3.png'
import benefits4 from '../cdn/benefits4.png'
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Appointment2 from './Appointment2'
import Services from './Services'
import Doctors from './Doctors'
import Teamp1 from './Teamp1'
import Teamp2 from './Teamp2'
import Facilities from './Facilities'
import heroPic1 from '../cdn/heroPic1.jpg'
import heroPic2 from '../cdn/heroPic2.jpg'
import heroPic3 from '../cdn/heroPic3.jpg'
import heroPic4 from '../cdn/heroPic4.jpg'

const images = [
    heroPic1, heroPic2, heroPic3, heroPic4
]


const scrollToDiv = (div, offset) => {
    const element = document.querySelector(div)
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}
//Home component
const Home = () => {
    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoibmlzaGFkc2FuZGlseWEiLCJhIjoiY2t4azI1eHNqM2h4ZDJ1bzFhZzF4NnI0OCJ9.qNPM-t_88BDLn2Lvd7aShw'
    });

    //Get HOCLoader Controls first from store
    const [{ HOCLoaderVisibilityControls }, { AppointmentVisibilityControls }] = useContext(AppContext)

    //Add a simple scroll listener on page load
    useEffect(() => {

        //Remove the spinner once the page stops loading
        window.addEventListener('load', () => {
            HOCLoaderVisibilityControls[1](() => false)
        })
        return () => {
            window.removeEventListener('load', () => {
                HOCLoaderVisibilityControls[1](() => false)
            })
        }
    }, [HOCLoaderVisibilityControls])

    const [dim, setDim] = useState({
        width: window.innerWidth, height: window.innerHeight
    })

    useEffect(() => {
        window.addEventListener('resize', () => {
            setDim(() => {
                return ({
                    width: window.innerWidth,
                    height: window.innerHeight
                })
            })
        })
        return () => {
            window.removeEventListener('resize', () => {
                setDim(() => {
                    return ({
                        width: window.innerWidth,
                        height: window.innerHeight
                    })
                })
            })
        }
    }, [])

    // console.log(dim)
    const CondHere = () => {
        if (dim.width < 480 || dim.height < 480) {
            return (
                <ul className="nav__top-bar__nav-bar__list">
                    <li onClick={() => {
                        scrollToDiv('.home', 0); hideMenu()
                    }} className="nav__top-bar__nav-bar__list-items">Home</li>
                    <li onClick={() => { scrollToDiv('.home__about', 40); hideMenu() }} className="nav__top-bar__nav-bar__list-items">About Us</li>
                    <li onClick={() => { scrollToDiv('.home__services', 40); hideMenu() }} className="nav__top-bar__nav-bar__list-items">Services</li>
                    <li onClick={() => { scrollToDiv('.home__facilities', 40); hideMenu() }} className="nav__top-bar__nav-bar__list-items">Facilities</li>
                    <li onClick={() => { scrollToDiv('.home__doctors', 40); hideMenu() }} className="nav__top-bar__nav-bar__list-items">Doctors</li>
                    <li onClick={() => { scrollToDiv('.home__team', 40); hideMenu() }} className="nav__top-bar__nav-bar__list-items">Team</li>
                    <li onClick={() => { scrollToDiv('.home__community__about', 40); hideMenu() }} className="nav__top-bar__nav-bar__list-items">Community Services</li>
                    <li onClick={() => { scrollToDiv('.home__careers', 40); hideMenu() }} className="nav__top-bar__nav-bar__list-items">Careers</li>
                    <li onClick={() => { scrollToDiv('.home__contact-us', 40); hideMenu() }} className="nav__top-bar__nav-bar__list-items">Contact Us</li>
                </ul>
            )
        }
        else {
            return (
                <ul className="nav__top-bar__nav-bar__list">
                    <li onClick={() => {
                        scrollToDiv('.home', 0); hideMenu()
                    }} className="nav__top-bar__nav-bar__list-items">Home</li>
                    <li onClick={() => { scrollToDiv('.home__about', 0); hideMenu() }} className="nav__top-bar__nav-bar__list-items">About Us</li>
                    <li onClick={() => { scrollToDiv('.home__services', 0); hideMenu() }} className="nav__top-bar__nav-bar__list-items">Services</li>
                    <li onClick={() => { scrollToDiv('.home__facilities', 0); hideMenu() }} className="nav__top-bar__nav-bar__list-items">Facilities</li>
                    <li onClick={() => { scrollToDiv('.home__doctors', 0); hideMenu() }} className="nav__top-bar__nav-bar__list-items">Doctors</li>
                    <li onClick={() => { scrollToDiv('.home__team', 0); hideMenu() }} className="nav__top-bar__nav-bar__list-items">Team</li>
                    <li onClick={() => { scrollToDiv('.home__community__about', 0); hideMenu() }} className="nav__top-bar__nav-bar__list-items">Community Services</li>
                    <li onClick={() => { scrollToDiv('.home__careers', 0); hideMenu() }} className="nav__top-bar__nav-bar__list-items">Careers</li>
                    <li onClick={() => { scrollToDiv('.home__contact-us', 0); hideMenu() }} className="nav__top-bar__nav-bar__list-items">Contact Us</li>
                </ul>
            )
        }
    }
    //Add a simple scroll listener to control the navbar

    const navScroll = () => {
        if (window.scrollY >= 350 && window.innerWidth >= 480 && window.innerHeight >= 480) document.querySelector('.nav__top-bar__nav-bar').classList.add('sticky-nav')
        else document.querySelector('.nav__top-bar__nav-bar').classList.remove('sticky-nav')
    }

    useLayoutEffect(() => {
        if (document.querySelector('.nav__top-bar__nav-bar')) {
            window.addEventListener('scroll', navScroll)
            return () => window.removeEventListener('scroll', navScroll)
        }
    }, [])

    //Function to control menu collapse
    const showMenu = () => {
        document.querySelector('.nav__top-bar__nav-bar').classList.add('menu-transition')
    }
    const hideMenu = () => {
        document.querySelector('.nav__top-bar__nav-bar').classList.remove('menu-transition')
    }

    return (
        <div className="home">
            <Header></Header>
            <div className="nav">
                <div className="nav__top-bar">
                    <div className="nav__top-bar__branding">
                        <div className="nav__top-bar__branding__logo">
                            <img src={logo} alt="MSN Eye Hospital" />
                        </div>
                        <p>MSN Cataract & <br /> IOL Hospital</p>
                    </div>
                    <div onClick={() => showMenu()} className="nav__top-bar__menu-icon">
                        <img src={menu} alt="Menu" />
                    </div>
                    <div className="nav__top-bar__nav-bar">
                        <div className="nav__top-bar__nav-bar__cross-icon">
                            <div className="nav__top-bar__nav-bar__cross-icon__btn">
                                <button onClick={() => { AppointmentVisibilityControls[1](() => true); hideMenu() }}>Appointment</button>
                            </div>
                            <div className="nav__top-bar__nav-bar__cross-icon__image">
                                <img onClick={() => hideMenu()} src={cross} alt="Menu" />
                            </div>
                        </div>
                        <CondHere></CondHere>
                        <div className="nav__top-bar__nav-bar__extended-header">
                            <div className="nav__top-bar__nav-bar__extended-header__important-info">
                                <ul className="nav__top-bar__nav-bar__extended-header__important-info__list">
                                    <li className="nav__top-bar__nav-bar__extended-header__important-info__list-items">
                                        <span className="nav__top-bar__nav-bar__extended-header__important-info__list-items__image">
                                            <img src={time} alt={"Visiting Hours"} />
                                        </span>
                                        <p className="nav__top-bar__nav-bar__extended-header__important-info__list-items__text">
                                            Mon-Sat, 8am-4pm
                                        </p>
                                    </li>
                                    <a href="tel:8486887503" className="nav__top-bar__nav-bar__extended-header__important-info__list__links">
                                        <li className="nav__top-bar__nav-bar__extended-header__important-info__list-items">
                                            <span className="nav__top-bar__nav-bar__extended-header__important-info__list-items__image">
                                                <img src={phone} alt={"Phone Number"} style={{
                                                    transform: `rotateZ(180deg) rotateY(180deg)`
                                                }} />
                                            </span>
                                            <p className="nav__top-bar__nav-bar__extended-header__important-info__list-items__text">
                                                8486887503
                                            </p>
                                        </li>
                                    </a>
                                    <a href="mailto:msncataractiolhospital@gmail.com" className="nav__top-bar__nav-bar__extended-header__important-info__list__links">
                                        <li className="nav__top-bar__nav-bar__extended-header__important-info__list-items">
                                            <span className="nav__top-bar__nav-bar__extended-header__important-info__list-items__image">
                                                <img src={mail} alt={"Email Address"} />
                                            </span>
                                            <p className="nav__top-bar__nav-bar__extended-header__important-info__list-items__text">
                                                msncataractiolhospital@gmail.com
                                            </p>
                                        </li>
                                    </a>
                                </ul>
                            </div>
                            <div className="nav__top-bar__nav-bar__extended-header__social">
                                <ul className="nav__top-bar__nav-bar__extended-header__social__list">
                                    <a target="_blank" rel='noreferrer' href="https://www.facebook.com" className="nav__top-bar__nav-bar__extended-header__social__list__links">
                                        <li className="nav__top-bar__nav-bar__extended-header__social__list-items">
                                            <span className="nav__top-bar__nav-bar__extended-header__social__list-items__image">
                                                <img src={fb} alt={"Facebook"} />
                                            </span>
                                        </li>
                                    </a>
                                    <a target="_blank" rel='noreferrer' href="https://www.instagram.com" className="nav__top-bar__nav-bar__extended-header__social__list__links">
                                        <li className="nav__top-bar__nav-bar__extended-header__social__list-items">
                                            <span className="nav__top-bar__nav-bar__extended-header__social__list-items__image">
                                                <img src={insta} alt={"Instagram"} />
                                            </span>
                                        </li>
                                    </a>
                                    <a target="_blank" rel='noreferrer' href="https://www.twitter.com" className="nav__top-bar__nav-bar__extended-header__social__list__links">
                                        <li className="nav__top-bar__nav-bar__extended-header__social__list-items">
                                            <span className="nav__top-bar__nav-bar__extended-header__social__list-items__image">
                                                <img src={twitter} alt={"Twitter"} />
                                            </span>
                                        </li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav__bottom-bar">
                    <button onClick={() => AppointmentVisibilityControls[1](() => true)}>Appointment</button>
                </div>
            </div>
            <div className="home__hero">
                <div className="home__hero__box1">
                    <div className="home__hero__box1__icon">
                        <img src={care} alt="Get in Touch" />
                    </div>
                    <div className="home__hero__box1__title">
                        <p>
                            You are important to us
                        </p>
                    </div>
                    <div className="home__hero__box1__details">
                        <p>
                            Kindly, use the below buttons to get in
                            touch with us. You can either call or
                            walk-in directly. You will be given foremost
                            priority, in case of an emergency
                        </p>
                    </div>
                    <div className="home__hero__box1__btn1">
                        <a href="tel:8486887503">
                            <button>Call Us</button>
                        </a>
                    </div>
                    <div className="home__hero__box1__btn2">
                        <a href="https://www.google.com/maps/place/MSN+Cataract+And+IOL+Hospital./@26.3536986,92.6562026,13z/data=!4m18!1m12!4m11!1m3!2m2!1d92.6917365!2d26.3545446!1m6!1m2!1s0x37452797b67d0c2f:0x92fc9c505d835863!2smsn+cataract+and+iol+hospital!2m2!1d92.6912222!2d26.3536259!3m4!1s0x37452797b67d0c2f:0x92fc9c505d835863!8m2!3d26.3536259!4d92.6912222">
                            <button>Locate Us</button>
                        </a>
                    </div>
                </div>
                <div className="home__hero__box2">
                    <div className="home__hero__box2__icon">
                        <img src={appointment} alt="Online Appointment" />
                    </div>
                    <div className="home__hero__box2__title">
                        <p>
                            Book an Appointment Online
                        </p>
                    </div>
                    <div className="home__hero__box2__details">
                        <p>
                            Now, you can book an online appointment,
                            by clicking the button below. Please note
                            that, online appointment is available only
                            from 4pm to 5pm on week-days
                        </p>
                    </div>
                    <div className="home__hero__box2__btn1">
                        <button onClick={() => AppointmentVisibilityControls[1](() => true)}>Book Now</button>
                    </div>
                </div>
            </div>
            <div className="home__video-hero">
                {/* <video src={video} autoPlay loop muted /> */}
                <Carousel3 images = {images}></Carousel3>
                <div className="home__video-hero__details-box">
                    <div className="home__video-hero__details-box__details">
                        <p className="home__video-hero__details-box__details__title">
                            Welcome to MSN Cataract & IOL Hospital, Nagaon
                        </p>
                        <p className="home__video-hero__details-box__details__details">
                            Welcome to One of Asia's best Eye Care Clinic. Situated in, Nagaon, Assam, this eye care clinic offers best in class service
                            when it comes to taking care of your eyes. Made possible only with the collaborative efforts of skilled doctors and
                            a very diligent, we are able to treat every eye care patient that chooses us, always leaving a smile on their faces post treatment
                        </p>
                        <Link to='/about'><button>Read More</button></Link>
                    </div>
                </div>
            </div>
            <div className="home__video-hero-mobile">
                <p className="home__video-hero-mobile__title">
                    Welcome to MSN Cataract & IOL Hospital, Nagaon
                </p>
                <p className="home__video-hero-mobile__details">
                    Welcome to One of Asia's best Eye Care Clinic. Situated in, Nagaon, Assam, this eye care clinic offers best in class service
                    when it comes to taking care of your eyes. Made possible only with the collaborative efforts of skilled doctors and
                    a very diligent, we are able to treat every eye care patient that chooses us, always leaving a smile on their faces post treatment
                </p>
                <Link to='/about'><button>Read More</button></Link>
            </div>
            <div className="home__about">
                <div className="home__about__p1">
                    <p className="home__about__p1__light-text">
                        Who We Are?
                    </p>
                    <p className="home__about__p1__bold-text">
                        About Us
                    </p>
                </div>
                <div className="home__about__p2">
                    <div className="home__about__p2__image">
                        <img src={about} alt="About Us" />
                    </div>
                    <div className="home__about__p2__details-box">
                        <p>Get to know us better</p>
                        <p>The incidence of preventable blindness
                            is very high in Assam. Blindness is more
                            prevalent among the economically
                            underprivileged section of the society.
                            A large number of eye patients continue
                            to suffer either for non-availability of
                            appropriate treatment or for economic
                            reasons. This has also resulted in an exodus
                            of patients to different states/country
                            for treatment.</p>
                        <div className="home__about__p2__details-box__button">
                            <Link to='/about'><button>Read More</button></Link>
                        </div>
                    </div>
                </div>
                <div className="home__about__p3">
                    <div className="home__about__p3__info-box">
                        <p>5</p>
                        <p>Doctors</p>
                    </div>
                    <div className="home__about__p3__info-box">
                        <p>10000+</p>
                        <p>Happy Patients</p>
                    </div>
                    <div className="home__about__p3__info-box">
                        <p>5000+</p>
                        <p>Surgeries</p>
                    </div>
                    <div className="home__about__p3__info-box">
                        <p>50+</p>
                        <p>Community <br /> Services</p>
                    </div>
                </div>
            </div>
            <div className="home__services">
                <div className="home__community__about__p1">
                    <p className="home__community__about__p1__light-text">
                        Services we Provide
                    </p>
                    <p className="home__community__about__p1__bold-text">
                        Services
                    </p>
                </div>
                <Services></Services>
            </div>
            <div className="home__facilities">
                <div className="home__about__p1">
                    <p className="home__about__p1__light-text">
                        Why Choose Us?
                    </p>
                    <p className="home__about__p1__bold-text">
                        Facilities
                    </p>
                </div>
                <Facilities></Facilities>
            </div>
            <div className="home__doctors">
                <div className="home__community__about__p1">
                    <p className="home__community__about__p1__light-text">
                        Know our Doctors
                    </p>
                    <p className="home__community__about__p1__bold-text">
                        Doctors
                    </p>
                </div>
                <Doctors></Doctors>
            </div>
            <div className="home__team">
                <div className="home__about__p1">
                    <p className="home__about__p1__light-text">
                        Know our Team
                    </p>
                    <p className="home__about__p1__bold-text">
                        Team
                    </p>
                </div>
                <Teamp1></Teamp1>
                <Teamp2></Teamp2>
            </div>
            <div className="home__community__about">
                <div className="home__community__about__p1">
                    <p className="home__community__about__p1__light-text">
                        Community Services
                    </p>
                    <p className="home__community__about__p1__bold-text">
                        Giving Back
                    </p>
                </div>
                <div className="home__community__about__p2">
                    <div className="home__community__about__p2__hero">
                        <p>We do whatever we can for the Community</p>
                        <p>Volunteering time to support a cause we truely are passionate about. Giving out to you guys, the community makes us happy. You trust us with all your heart and we truely appreciate it. Keep supporting. Here are a bunch of photos of our previous Community Services that you can go through.</p>
                    </div>
                    <Carousel1></Carousel1>
                </div>
            </div>

            <div className="home__careers">
                <div className="home__careers__p1">
                    <p>Careers</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, est earum officia et amet cupiditate neque, dolore labore, velit minima molestiae repudiandae quo aperiam itaque obcaecati modi facilis cum rerum!</p>
                    <p>Please click on the below button to enquire about vacancies now</p>
                    <a href="mailto:msncataractiolhospital@gmail.com">
                        <button>Enquire Now</button>
                    </a>
                </div>
                <div className="home__careers__p2">
                    <div className="home__careers__p2__p1">
                        <div className="home__careers__p2__p1__vacancies">
                            <p>Vacancies</p>
                            <p>We currently have no active vacancies. Please check our site later for more info about vacancies. Meanwhile you can enquire about one if you would like to</p>
                        </div>
                        <div className="home__careers__p2__p1__why-us">
                            <p>Why work with us?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda unde possimus deleniti quo, architecto, molestiae, in vel ducimus nemo harum vitae. Maxime ratione a nobis sint eaque eos ut.</p>
                        </div>
                    </div>
                    <div className="home__careers__p2__p2">
                        <div className="home__careers__p2__p2__benefits">
                            <div className="home__careers__p2__p2__benefits__p1">
                                <p>Gereral Perks</p>
                            </div>
                            <div className="home__careers__p2__p2__benefits__p2">
                                <div className="home__careers__p2__p2__benefits__p2__box">
                                    <div className="home__careers__p2__p2__benefits__p2__box__image">
                                        <img src={benefits1} alt="Health and Wellness" />
                                    </div>
                                    <div className="home__careers__p2__p2__benefits__p2__box__details">
                                        <p>Health & Wellness</p>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore hic rem quibusdam quidem aliquam. Sint repellendus accusantium et quidem assumenda.</p>
                                    </div>
                                </div>
                                <div className="home__careers__p2__p2__benefits__p2__box">
                                    <div className="home__careers__p2__p2__benefits__p2__box__image">
                                        <img src={benefits2} alt="Time for Rejuvination" />
                                    </div>
                                    <div className="home__careers__p2__p2__benefits__p2__box__details">
                                        <p>Time for Rejuvination</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perferendis recusandae omnis nam, unde atque cum maxime aperiam quaerat quia!</p>
                                    </div>
                                </div>
                                <div className="home__careers__p2__p2__benefits__p2__box">
                                    <div className="home__careers__p2__p2__benefits__p2__box__image">
                                        <img src={benefits3} alt="Development Skill Improvement" />
                                    </div>
                                    <div className="home__careers__p2__p2__benefits__p2__box__details">
                                        <p>Skills Improvement</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis sapiente sit blanditiis expedita minima voluptatum praesentium animi aut! Voluptates?</p>
                                    </div>
                                </div>
                                <div className="home__careers__p2__p2__benefits__p2__box">
                                    <div className="home__careers__p2__p2__benefits__p2__box__image">
                                        <img src={benefits4} alt="Career Planning" />
                                    </div>
                                    <div className="home__careers__p2__p2__benefits__p2__box__details">
                                        <p>Future Career Planning</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex sed beatae, nam obcaecati consequuntur magni id ad accusamus veniam autem.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home__careers__p2__p2__photos">
                            <Carousel2></Carousel2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__contact-us">
                <div className="home__contact-us__p1">
                    <p>Contact Us</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, est earum officia et amet cupiditate neque, dolore labore, velit minima molestiae repudiandae quo aperiam itaque obcaecati modi facilis cum rerum!</p>
                </div>
                <div className="home__contact-us__p2">
                    <div className="home__contact-us__p2__p1">
                        <div className="home__contact-us__p2__p1__vacancies">
                            <p>MSN Cataract IOL Hospital</p>
                            <p><b>Full Address: </b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia suscipit recusandae quasi adipisci, harum ad?</p>
                            <p><b>P/O Box: </b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia suscipit recusandae quasi adipisci, harum ad?</p>
                        </div>
                        <div className="home__contact-us__p2__p1__why-us">
                            <p>Important Details</p>
                            <p><b>Office Telephone Number: </b>0367255684</p>
                            <p><b>Primary Phone Number: </b>(+91)8486887503</p>
                            <p><b>Emergency Number: </b>(+91)8486887503</p>
                            <p><b>Official Mail ID: </b>msncataractiolhospital@gmail.com</p>
                            <p><b>Official twitter handle: </b>@msneyehospital</p>
                        </div>
                    </div>
                    <div className="home__contact-us__p2__p2">
                        <div className="home__contact-us__p2__p2__benefits">
                            {/* Appointment wrapper 2 here */}
                            <Appointment2></Appointment2>
                        </div>
                        <div className="home__contact-us__p2__p2__photos">
                            <Map
                                style="mapbox://styles/mapbox/streets-v9"
                                containerStyle={{
                                    height: '100%',
                                    width: '100%'
                                }}
                                center={[92.69122152044845, 26.354236971341905]}
                            >
                                <Marker coordinates={[92.69122152044845, 26.354236971341905]}
                                    anchor="bottom">
                                    <img src={logo} width={32} alt="Location" />
                                </Marker>
                            </Map>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__footer">
                <p>@2022 MSN Cataract & IOL Hospital, All rights reserved</p>
                <p>Powered by <a href="https://www.erida.in"><b>erida</b></a></p>
            </div>
        </div>
    )
}

//Default export Home
export default Home