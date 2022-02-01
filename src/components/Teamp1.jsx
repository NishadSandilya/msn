//This is the DOctors component, displaying pages as well as elements in the home page

//Imports
import doc from '../cdn/doc.jpg'
import fb from '../cdn/fb.png'
import phone from '../cdn/phone.png'
import mail from '../cdn/mail.png'
import twitter from '../cdn/twitter.png'
import { useEffect } from 'react'
import o1 from '../cdn/o1.jpg'
import o2 from '../cdn/o2.jpg'
import o3 from '../cdn/o3.jpg'

const docData = [
    {
        name: "Optom. Ratan Kalita",
        designation: "Elite School of Optometry, Chennai",
        thumbnail: o3,
        fb: "https://www.facebook.com",
        twitter: "https://www.facebook.com",
        mail: "dummymail@dummy.com",
        phone: "4523514778",
    },
    {
        name: "Optom. Bedanta Bora",
        designation: "Ridley College of Optometry, Jorhat",
        thumbnail: o2,
        fb: "https://www.facebook.com",
        twitter: "https://www.facebook.com",
        mail: "dummymail@dummy.com",
        phone: "4523514778",
    },
    {
        name: "Optom. Amiyama Das",
        designation: "Ridley College of Optometry, Jorhat",
        thumbnail: o1,
        fb: "https://www.facebook.com",
        twitter: "https://www.facebook.com",
        mail: "dummymail@dummy.com",
        phone: "4523514778",
    },
]

//Functional Component here
const Teamp1 = () => {
    return (
        <div className="teamp1">
            <div className="about1__p3">
                <span className="about1__p3__line"></span>
                <p className="about1__p3__heading">
                    Optometrists
                </p>
            </div>
            {docData.map((ele, ind) => {
                return (
                    <div key={ind} className="teamp1__doc-card">
                        <div className="teamp1__doc-card__hero">
                            <img src={ele.thumbnail} alt="Image" />
                        </div>
                        <div className="teamp1__doc-card__details">
                            <p>{ele.name}</p>
                            <p>{ele.designation}</p>
                            <ul className="doctors__doc-card__hero-hover__handles">
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
    )
}

//Default export Doctors
export default Teamp1
