//The about component

//Imports
import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { AppContext } from '../store/Data'
import { useHistory } from 'react-router-dom'
import back from '../cdn/back.png'
import founder from '../cdn/founder.jpg'
import signature from '../cdn/signature.png'
import cert1 from '../cdn/cert1.png'
import cert2 from '../cdn/cert2.png'
import cert3 from '../cdn/cert3.png'
import cert4 from '../cdn/cert4.png'
import cert5 from '../cdn/cert5.png'
import stroy from '../cdn/story.png'

//Functional component here
const About = () => {
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
        <div className="about">
            <div onClick={() => history.goBack()} className="about__back-icon">
                <img src={back} alt="Go Back" />
                <p>go <br /> back</p>
            </div>
            <div className="about__p1">
                <span className="about__p1__line"></span>
                <p className="about__p1__heading">
                    About Us
                </p>
            </div>
            <div className="about__p2">
                <div className="about__p2__bg-box1"></div>
                <div className="about__p2__bg-box2"></div>
                <div className="about__p2__main">
                    <div className="about__p2__main__image">
                        <img src={founder} alt="Our Founder" />
                    </div>
                    <div className="about__p2__main__details">
                        <p>Story about our hospital</p>
                        <p>Note from our founder</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ex eos sequi nam soluta eaque nobis quos reprehenderit vitae? Qui praesentium similique at blanditiis explicabo voluptatem culpa quas, eaque molestias libero totam, beatae pariatur quia enim? Ipsum, laboriosam obcaecati a quasi temporibus accusantium corrupti consectetur in consequatur porro, saepe delectus? Autem, illum reprehenderit vitae doloremque dolores beatae deleniti maiores laborum libero quam sapiente optio!</p>
                        <div className="about__p2__main__details__signature">
                            <img src={signature} alt="Founder's Signature" />
                        </div>
                        <p className="sign">Mr. Dummy Text, Founder</p>
                    </div>
                </div>
            </div>
            <div className="about__p3">
                <span className="about__p3__line"></span>
                <p className="about__p3__heading">
                    Certifications
                </p>
            </div>
            <div className="about__p4">
                <p> <i>"we are people's favourite when it comes to curing their vision and surprisingly, to several valued organizations as well"</i></p>
                <p>Below are some of the organizations who have certified us with their certifications</p>
                <div className="about__p4__certs">
                    <li className="about__p4__certs__certs">
                        <img src={cert1} alt="Certifications" />
                    </li>
                    <li className="about__p4__certs__certs">
                        <img src={cert2} alt="Certifications" />
                    </li>
                    <li className="about__p4__certs__certs">
                        <img src={cert3} alt="Certifications" />
                    </li>
                    <li className="about__p4__certs__certs">
                        <img src={cert4} alt="Certifications" />
                    </li>
                    <li className="about__p4__certs__certs">
                        <img src={cert5} alt="Certifications" />
                    </li>
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
            <div className="about__p3">
                <span className="about__p3__line"></span>
                <p className="about__p3__heading">
                    Our Vision
                </p>
            </div>
            <div className="about__p5">
                <div className="about__p5__bg-box1"></div>
                <div className="about__p5__bg-box2"></div>
                <div className="about__p5__main">
                    <div className="about__p5__main__image">
                        <img src={stroy} alt="Our Place" />
                    </div>
                    <div className="about__p5__main__details">
                        <p>To help the world see the wonder</p>
                        <p>And we mean every letter of it!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ex eos sequi nam soluta eaque nobis quos reprehenderit vitae? Qui praesentium similique at blanditiis explicabo voluptatem culpa quas, eaque molestias libero totam, beatae pariatur quia enim? Ipsum, laboriosam obcaecati a quasi temporibus accusantium corrupti consectetur in consequatur porro.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

//Export default About
export default About