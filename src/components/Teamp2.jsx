//This is the team p2 section
import doc from '../cdn/doc.jpg'
import docia from '../cdn/docinaction.jpg'
import fb from '../cdn/fb1.png'
import phone from '../cdn/phone2.png'
import mail from '../cdn/mail1.png'
import twitter from '../cdn/twitter1.png'
import hh1 from '../cdn/hh1.jpg'
import hh2 from '../cdn/hh2.jpg'
import hh3 from '../cdn/hh3.jpg'
import hh4 from '../cdn/hh4.jpg'
import hh5 from '../cdn/hh5.jpg'
import hh6 from '../cdn/hh6.jpg'
import hh7 from '../cdn/hh7.jpg'
import hh8 from '../cdn/hh8.jpg'

import { useEffect } from 'react'

const docData = [
    {
        name: "Anamika Deka",
        designation: "OT Staff",
        thumbnail: hh1,
        fb: "https://www.facebook.com",
        twitter: "https://www.facebook.com",
        mail: "dummymail@dummy.com",
        phone: "4523514778",
    },
    {
        name: "Bornali Hazarika",
        designation: "OT Staff",
        thumbnail: hh2,
        fb: "https://www.facebook.com",
        twitter: "https://www.facebook.com",
        mail: "dummymail@dummy.com",
        phone: "4523514778",
    },
    {
        name: "Dimpi Borah",
        designation: "OT Staff",
        thumbnail: hh3,
        fb: "https://www.facebook.com",
        twitter: "https://www.facebook.com",
        mail: "dummymail@dummy.com",
        phone: "4523514778",
    },
    {
        name: "Mahesh Dutta",
        designation: "OT Staff",
        thumbnail: hh4,
        fb: "https://www.facebook.com",
        twitter: "https://www.facebook.com",
        mail: "dummymail@dummy.com",
        phone: "4523514778",
    },
    {
        name: "Pratima Dutta",
        designation: "OT Staff",
        thumbnail: hh5,
        fb: "https://www.facebook.com",
        twitter: "https://www.facebook.com",
        mail: "dummymail@dummy.com",
        phone: "4523514778",
    },
    {
        name: "Anita Dey",
        designation: "Staff",
        thumbnail: hh6,
        fb: "https://www.facebook.com",
        twitter: "https://www.facebook.com",
        mail: "dummymail@dummy.com",
        phone: "4523514778",
    },
    {
        name: "Sibani Sharma",
        designation: "Receptionist",
        thumbnail: hh7,
        fb: "https://www.facebook.com",
        twitter: "https://www.facebook.com",
        mail: "dummymail@dummy.com",
        phone: "4523514778",
    },
    {
        name: "Farida Alam",
        designation: "Receptionist",
        thumbnail: hh8,
        fb: "https://www.facebook.com",
        twitter: "https://www.facebook.com",
        mail: "dummymail@dummy.com",
        phone: "4523514778",
    }
]

function scrollHorizontally(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    var scrollSpeed = 40;
    document.querySelector('.teamp2__box').scrollLeft -= (delta * scrollSpeed);
    document.body.scrollLeft -= (delta * scrollSpeed);
    e.preventDefault();
}

const horizontalScroll = () => {
    document.querySelector('.teamp2__box').addEventListener('mousewheel', scrollHorizontally)
    return () => document.querySelector('.teamp2__box').removeEventListener('mousewheel', scrollHorizontally)
}

const Teamp2 = () => {
    useEffect(() => {
        if (document.querySelector('.teamp2__box')) {
            horizontalScroll()
        }
    }, [])
    return (
        <div className="teamp2">
            <div className="about1__p3">
                <span className="about1__p3__line"></span>
                <p className="about1__p3__heading">
                    Helping Hands
                </p>
            </div>
            <div className="teamp2__box">
                {docData.map((ele, ind) => {
                    return (
                        <div key={ind} className="teamp2__doc-card">
                            <div className="teamp2__doc-card__hero">
                                <img src={ele.thumbnail} alt="Image" />
                            </div>
                            <div className="teamp2__doc-card__details">
                                <p>{ele.name}</p>
                                <p>{ele.designation}</p>
                                <ul className="doctors__doc-card__hero-hover__handles paddingstyle">
                                    {ele.fb ? <li><a target="_blank" href={ele.fb}><img src={fb} alt="fb" /></a></li> : ""}
                                    {ele.twitter ? <li><a target="_blank" href={ele.twitter}><img src={twitter} alt="twitter" /></a></li> : ""}
                                    {ele.mail ? <li><a href={'mailto:' + ele.mail}>
                                        <img src={mail} alt="Mail" />
                                    </a></li> : ""}
                                    <li><a href={'tel:' + ele.phone}><img src={phone} alt="Phone" /></a></li>
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Teamp2