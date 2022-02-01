//This is the DOctors component, displaying pages as well as elements in the home page

//Imports
import doc from '../cdn/doc.jpg'
import docia from '../cdn/docinaction.jpg'
import fb from '../cdn/fb1.png'
import phone from '../cdn/phone2.png'
import mail from '../cdn/mail1.png'
import twitter from '../cdn/twitter1.png'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const docData = [
    {
        name: "Dr. Lorem Ipsum",
        designation: "Lorem Ipsumist",
        thumbnail: doc,
        docInAction: docia,
        fb: "https://www.facebook.com",
        twitter: "https://www.facebook.com",
        mail: "dummymail@dummy.com",
        phone: "4523514778",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit fugiat aut tempore perferendis assumenda mollitia, corrupti quod odit aperiam!",
        address: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, fugiat.",
        specialities: ["Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing."],
        memberships: ["Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing."],
        daysAvailable: ["Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing."],
        biography: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ex ea ratione dolorem cum ab maxime repellendus labore corrupti modi consectetur eum sint quibusdam aperiam maiores tempore expedita eligendi ipsam, eveniet beatae non, laborum vel odit dolor. Neque iure, est ipsam inventore doloribus quibusdam, odio tenetur libero cumque vero voluptatum perspiciatis saepe perferendis quisquam optio veritatis deleniti nulla nobis eaque blanditiis rerum dolore. Vel doloribus laboriosam, sit quae earum temporibus. Eaque voluptatibus veritatis eveniet possimus non eius. Quos ipsa minima voluptatum omnis hic. Laborum pariatur eius a placeat error eos ipsam vel minus. Rerum repudiandae commodi aperiam. Nulla, optio quis.",
        education: ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ex ea ratione dolorem cum ab maxime", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ex ea ratione dolorem cum ab maxime", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ex ea ratione dolorem cum ab maxime"],
        awards: ["Lorem ipsum dolor sit, amet consectetur", "met consectetur adipisicing elit.", "Natus ex ea ratione dolorem cum ab maxime"],
        skills: ["loremipsum", "loremipsum", "loremipsum"],
        slug: "doc-dum-1"
    },
    {
        name: "Dr. Lorem Ipsum",
        designation: "Lorem Ipsumist",
        thumbnail: doc,
        docInAction: docia,
        fb: "https://www.facebook.com",
        twitter: "https://www.facebook.com",
        mail: "dummymail@dummy.com",
        phone: "4523514778",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit fugiat aut tempore perferendis assumenda mollitia, corrupti quod odit aperiam!",
        address: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, fugiat.",
        specialities: ["Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing."],
        memberships: ["Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing."],
        daysAvailable: ["Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing."],
        biography: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ex ea ratione dolorem cum ab maxime repellendus labore corrupti modi consectetur eum sint quibusdam aperiam maiores tempore expedita eligendi ipsam, eveniet beatae non, laborum vel odit dolor. Neque iure, est ipsam inventore doloribus quibusdam, odio tenetur libero cumque vero voluptatum perspiciatis saepe perferendis quisquam optio veritatis deleniti nulla nobis eaque blanditiis rerum dolore. Vel doloribus laboriosam, sit quae earum temporibus. Eaque voluptatibus veritatis eveniet possimus non eius. Quos ipsa minima voluptatum omnis hic. Laborum pariatur eius a placeat error eos ipsam vel minus. Rerum repudiandae commodi aperiam. Nulla, optio quis.",
        education: ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ex ea ratione dolorem cum ab maxime", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ex ea ratione dolorem cum ab maxime", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ex ea ratione dolorem cum ab maxime"],
        awards: ["Lorem ipsum dolor sit, amet consectetur", "met consectetur adipisicing elit.", "Natus ex ea ratione dolorem cum ab maxime"],
        skills: ["loremipsum", "loremipsum", "loremipsum"],
        slug: "doc-dum-1"
    },
    {
        name: "Dr. Lorem Ipsum",
        designation: "Lorem Ipsumist",
        thumbnail: doc,
        docInAction: docia,
        fb: "https://www.facebook.com",
        twitter: "https://www.facebook.com",
        mail: "dummymail@dummy.com",
        phone: "4523514778",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit fugiat aut tempore perferendis assumenda mollitia, corrupti quod odit aperiam!",
        address: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, fugiat.",
        specialities: ["Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing."],
        memberships: ["Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing."],
        daysAvailable: ["Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing."],
        biography: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ex ea ratione dolorem cum ab maxime repellendus labore corrupti modi consectetur eum sint quibusdam aperiam maiores tempore expedita eligendi ipsam, eveniet beatae non, laborum vel odit dolor. Neque iure, est ipsam inventore doloribus quibusdam, odio tenetur libero cumque vero voluptatum perspiciatis saepe perferendis quisquam optio veritatis deleniti nulla nobis eaque blanditiis rerum dolore. Vel doloribus laboriosam, sit quae earum temporibus. Eaque voluptatibus veritatis eveniet possimus non eius. Quos ipsa minima voluptatum omnis hic. Laborum pariatur eius a placeat error eos ipsam vel minus. Rerum repudiandae commodi aperiam. Nulla, optio quis.",
        education: ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ex ea ratione dolorem cum ab maxime", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ex ea ratione dolorem cum ab maxime", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ex ea ratione dolorem cum ab maxime"],
        awards: ["Lorem ipsum dolor sit, amet consectetur", "met consectetur adipisicing elit.", "Natus ex ea ratione dolorem cum ab maxime"],
        skills: ["loremipsum", "loremipsum", "loremipsum"],
        slug: "doc-dum-1"
    },
    {
        name: "Dr. Lorem Ipsum",
        designation: "Lorem Ipsumist",
        thumbnail: doc,
        docInAction: docia,
        fb: "https://www.facebook.com",
        twitter: "https://www.facebook.com",
        mail: "dummymail@dummy.com",
        phone: "4523514778",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit fugiat aut tempore perferendis assumenda mollitia, corrupti quod odit aperiam!",
        address: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, fugiat.",
        specialities: ["Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing."],
        memberships: ["Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing."],
        daysAvailable: ["Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing."],
        biography: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ex ea ratione dolorem cum ab maxime repellendus labore corrupti modi consectetur eum sint quibusdam aperiam maiores tempore expedita eligendi ipsam, eveniet beatae non, laborum vel odit dolor. Neque iure, est ipsam inventore doloribus quibusdam, odio tenetur libero cumque vero voluptatum perspiciatis saepe perferendis quisquam optio veritatis deleniti nulla nobis eaque blanditiis rerum dolore. Vel doloribus laboriosam, sit quae earum temporibus. Eaque voluptatibus veritatis eveniet possimus non eius. Quos ipsa minima voluptatum omnis hic. Laborum pariatur eius a placeat error eos ipsam vel minus. Rerum repudiandae commodi aperiam. Nulla, optio quis.",
        education: ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ex ea ratione dolorem cum ab maxime", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ex ea ratione dolorem cum ab maxime", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ex ea ratione dolorem cum ab maxime"],
        awards: ["Lorem ipsum dolor sit, amet consectetur", "met consectetur adipisicing elit.", "Natus ex ea ratione dolorem cum ab maxime"],
        skills: ["loremipsum", "loremipsum", "loremipsum"],
        slug: "doc-dum-1"
    },
    {
        name: "Dr. Lorem Ipsum",
        designation: "Lorem Ipsumist",
        thumbnail: doc,
        docInAction: docia,
        fb: "https://www.facebook.com",
        twitter: "https://www.facebook.com",
        mail: "dummymail@dummy.com",
        phone: "4523514778",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit fugiat aut tempore perferendis assumenda mollitia, corrupti quod odit aperiam!",
        address: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, fugiat.",
        specialities: ["Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing."],
        memberships: ["Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing."],
        daysAvailable: ["Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing.", "Lorem, ipsum dolor sit amet consectetur adipisicing."],
        biography: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ex ea ratione dolorem cum ab maxime repellendus labore corrupti modi consectetur eum sint quibusdam aperiam maiores tempore expedita eligendi ipsam, eveniet beatae non, laborum vel odit dolor. Neque iure, est ipsam inventore doloribus quibusdam, odio tenetur libero cumque vero voluptatum perspiciatis saepe perferendis quisquam optio veritatis deleniti nulla nobis eaque blanditiis rerum dolore. Vel doloribus laboriosam, sit quae earum temporibus. Eaque voluptatibus veritatis eveniet possimus non eius. Quos ipsa minima voluptatum omnis hic. Laborum pariatur eius a placeat error eos ipsam vel minus. Rerum repudiandae commodi aperiam. Nulla, optio quis.",
        education: ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ex ea ratione dolorem cum ab maxime", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ex ea ratione dolorem cum ab maxime", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ex ea ratione dolorem cum ab maxime"],
        awards: ["Lorem ipsum dolor sit, amet consectetur", "met consectetur adipisicing elit.", "Natus ex ea ratione dolorem cum ab maxime"],
        skills: ["loremipsum", "loremipsum", "loremipsum"],
        slug: "doc-dum-1"
    },
]

const feature = () => {
    const elements = document.getElementsByClassName('doctors__doc-card__hero')
    Array.from(elements).forEach(ele => {
        ele.addEventListener('mouseover', () => ele.childNodes[1].classList.add('hero-hover--off'))
        ele.addEventListener('mouseout', () => ele.childNodes[1].classList.remove('hero-hover--off'))
    })
    return () => {
        Array.from(elements).forEach(ele => {
            ele.removeEventListener('mouseover', () => ele.childNodes[1].classList.add('hero-hover--off'))
            ele.removeEventListener('mouseout', () => ele.childNodes[1].classList.remove('hero-hover--off'))
        })
    }
}

//Functional Component here
const Doctors = () => {

    useEffect(() => {
        if (document.querySelector('.doctors__doc-card')) {
            feature()
        }
    }, [])

    return (
        <div className="doctors">
            {docData.map((ele, ind) => {
                return (
                    <div key={ind} className="doctors__doc-card">
                        <div className="doctors__doc-card__hero">
                            <img src={ele.thumbnail} alt="Image" />
                            <div className="doctors__doc-card__hero-hover">
                                <Link to={{
                                    pathname: `${'doctors/' + ele.slug}`,
                                    state: ele
                                }}>
                                    <p className="doctors__doc-card__hero-hover__title">{ele.name}</p>
                                </Link>
                                <ul className="doctors__doc-card__hero-hover__handles">
                                    {ele.fb ? <li><a target="_blank" href={ele.fb}><img src={fb} alt="fb" /></a></li> : ""}
                                    {ele.twitter ? <li><a target="_blank" href={ele.twitter}><img src={twitter} alt="twitter" /></a></li> : ""}
                                    {ele.mail ? <li><a href={'mailto:' + ele.mail}>
                                        <img src={mail} alt="Mail" />
                                    </a></li> : ""}
                                    <li><a href={'tel:' + ele.phone}><img src={phone} alt="Phone" /></a></li>
                                </ul>
                                <p className="doctors__doc-card__hero-hover__desc">{ele.desc}</p>
                            </div>
                        </div>
                        <div className="doctors__doc-card__details">
                            <Link to={{
                                pathname: `${'doctors/' + ele.slug}`,
                                state: ele
                            }}>
                                <p>{ele.name}</p>
                            </Link>
                            <p>{ele.designation}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

//Default export Doctors
export default Doctors
