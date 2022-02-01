//This is the doctors page with unique id

//Imports
import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { AppContext } from '../store/Data'
import { useHistory, withRouter } from 'react-router-dom'
import back from '../cdn/back2.png'
import back2 from '../cdn/back.png'
import fb from '../cdn/fb.png'
import twitter from '../cdn/twitter.png'
import phone from '../cdn/phone.png'
import mail from '../cdn/mail.png'
import address from '../cdn/address.png'

//Functional component
const DoctorPage = (props) => {
    const [{ HOCLoaderVisibilityControls }, { AppointmentVisibilityControls }] = useContext(AppContext)
    const history = useHistory()
    history.listen((location, action) => {
        window.scrollTo(0, 0)
    })

    useEffect(() => {
        //Remove the spinner once the page stops loading
        window.addEventListener('load', () => {
            HOCLoaderVisibilityControls[1](() => false)
        })
        return () => window.removeEventListener('load', () => {
            HOCLoaderVisibilityControls[1](() => false)
        })
    }, [HOCLoaderVisibilityControls])
    return (
        <div className="doctorPage">
            <div onClick={() => history.goBack()} className="about__back-icondocdark">
                <img src={back} alt="Go Back" />
                <p>go <br /> back</p>
            </div>
            <div onClick={() => history.goBack()} className="about__back-icondoclight">
                <img src={back2} alt="Go Back" />
                <p>go <br /> back</p>
            </div>
            <div className="doctorPage__hero" style={{
                backgroundImage: `url(${props.location.state.docInAction})`
            }}>
                <p>{props.location.state.name}</p>
                <p>{props.location.state.designation}</p>
            </div>
            <div className="doctorPage__details">
                <div className="doctorPage__details__p1">
                    <div className="doctorPage__details__p1__image">
                        <img src={props.location.state.thumbnail} alt="Image" />
                    </div>
                    <div className="doctorPage__details__p1__details">
                        <ul className="doctors__doc-card__hero-hover__handles">
                            {props.location.state.fb ? <li><a target="_blank" href={props.location.state.fb}><img src={fb} alt="fb" /></a></li> : ""}
                            {props.location.state.twitter ? <li><a target="_blank" href={props.location.state.twitter}><img src={twitter} alt="twitter" /></a></li> : ""}
                            {props.location.state.mail ? <li><a href={'mailto:' + props.location.state.mail}>
                                <img src={mail} alt="Mail" />
                            </a></li> : ""}
                            <li><a href={'tel:' + props.location.state.phone}><img src={phone} alt="Phone" /></a></li>
                        </ul>
                        <p className="doctorPage__details__p1__details__name">{props.location.state.name}</p>
                        <p className="doctorPage__details__p1__details__desc">{props.location.state.desc}</p>
                        <ul className="doctorPage__details__p1__details__contact">
                            <a href={`tel:${props.location.state.phone}`}>
                                <li >
                                    <span >
                                        <img src={phone} alt={"Phone Number"} />
                                    </span>
                                    <p>
                                        {props.location.state.phone}
                                    </p>
                                </li>
                            </a>
                            <a href={`mailto:${props.location.state.mail}`}>
                                <li >
                                    <span >
                                        <img src={mail} alt={"Email Address"} />
                                    </span>
                                    <p>
                                        {props.location.state.mail}
                                    </p>
                                </li>
                            </a>
                            <li>
                                <span>
                                    <img src={address} alt={"Visiting Hours"} />
                                </span>
                                <p>
                                    {props.location.state.address}
                                </p>
                            </li>
                        </ul>
                        <div className="servicePage__about__p2__line"></div>
                        <p className="doctorPage__details__p1__details__speciality">Specialities</p>
                        <ul className="doctorPage__details__p1__details__speciality-content">
                            {props.location.state.specialities.map((ele, ind) => {
                                return (
                                    <li key={ind}><p>{ele}</p></li>
                                )
                            })}
                        </ul>
                        <div className="servicePage__about__p2__line"></div>
                        <p className="doctorPage__details__p1__details__speciality">Doctor's Schedule</p>
                        <ul className="doctorPage__details__p1__details__speciality-content">
                            {props.location.state.daysAvailable.map((ele, ind) => {
                                return (
                                    <li key={ind}><p>{ele}</p></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="doctorPage__details__p2">
                    <p className="doctorPage__details__p2__title1">Biography</p>
                    <p className="doctorPage__details__p2__title1-content">{props.location.state.biography}</p>
                    <div className="servicePage__about__p2__line"></div>
                    <p className="doctorPage__details__p2__title">Education</p>
                    <ul className="doctorPage__details__p2__list">
                        {props.location.state.education.map((ele, ind) => {
                            return (
                                <li key={ind}><p>{ele}</p></li>
                            )
                        })}
                    </ul>
                    <div className="servicePage__about__p2__line"></div>
                    <p className="doctorPage__details__p2__title">Skills</p>
                    <ul className="doctorPage__details__p2__list">
                        {props.location.state.skills.map((ele, ind) => {
                            return (
                                <li key={ind}><p>{ele}</p></li>
                            )
                        })}
                    </ul>
                    <div className="servicePage__about__p2__line"></div>
                    <p className="doctorPage__details__p2__title">Awards</p>
                    <ul className="doctorPage__details__p2__list">
                        {props.location.state.awards.map((ele, ind) => {
                            return (
                                <li key={ind}><p>{ele}</p></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

//export default page
export default DoctorPage