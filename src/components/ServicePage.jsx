//This is the holder for the service page
//Imports
import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { AppContext } from '../store/Data'
import { useHistory, withRouter } from 'react-router-dom'
import back from '../cdn/back2.png'
import { Carousel3 } from './Carousel'

//Functional component here
const ServicePage = (props) => {
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
        <div className="servicePage">
            <div onClick={() => history.goBack()} className="about__back-icon2">
                <img src={back} alt="Go Back" />
                <p>go <br /> back</p>
            </div>
            <div className="servicePage__hero">
                <div className="servicePage__hero__p1">
                    <div className="servicePage__hero__p1__image">
                        <img src={props.location.state.initialThumbnail} alt={props.location.state.title} />
                    </div>
                    <div className="servicePage__hero__p1__content">
                        <p>{props.location.state.title}</p>
                        <p>{props.location.state.desc}</p>
                    </div>
                </div>
                <div className="servicePage__hero__p2">
                    <p>Service</p>
                    <p>{props.location.state.title}</p>
                    <p></p>
                </div>
            </div>
            <div className="servicePage__about">
                <div className="servicePage__about__p1">
                    <Carousel3 images={props.location.state.images}></Carousel3>
                </div>
                <div className="servicePage__about__p2">
                    <p className="servicePage__about__p2__title1">{`About ${props.location.state.title}`}</p>
                    <p className="servicePage__about__p2__desc">{props.location.state.detailedDesc}</p>
                    {/* <div className="servicePage__about__p2__line"></div>
                    <p className="servicePage__about__p2__title">Please Note</p>
                    <p className="servicePage__about__p2__desc">{props.location.state.pleaseRead}</p>
                    <div className="servicePage__about__p2__line"></div>
                    <p className="servicePage__about__p2__title">Pricing</p>
                    <p className="servicePage__about__p2__desc">{props.location.state.pricing}</p>
                    <p className="servicePage__about__p2__disc">*Note that the price mentioned above is just a lower bound estimate. Also, prices are bound to change without prior notice.</p> */}
                </div>
            </div>
        </div>
    )
}

export default ServicePage