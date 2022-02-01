//This is a simple react carousel for the application. This holds all defined types of Carousels for the application

//Imports
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import c1 from '../cdn/c1.jpg'
import c2 from '../cdn/c2.jpg'
import c3 from '../cdn/c3.jpg'
import c4 from '../cdn/c4.jpg'
import c5 from '../cdn/c5.jpg'
import c6 from '../cdn/c6.jpg'
import c7 from '../cdn/c7.jpg'
import c8 from '../cdn/c8.jpg'
import c9 from '../cdn/c9.jpg'
import c10 from '../cdn/c10.jpg'
import c11 from '../cdn/c11.jpg'
import employees1 from '../cdn/employees1.jpg'
import employees2 from '../cdn/employees2.jpg'
import employees3 from '../cdn/employees3.jpg'

//Carousel1 component
const Carousel1 = () => {
    const slides = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11];

    return (
        <div className="carousel1">
            <Slider touchDisabled = {true} autoplay = {2000} infinite={true} className = "carousel1__slider">
                {slides.map((slide, index) => <div className='carousel1__slider__items' key={index}>
                    <div className="carousel1__slider__items__image">
                        <img src={slide} alt="Image" />
                    </div>
                    {/* <div className="carousel1__slider__items__details">
                        <p>{slide.title}</p>
                        <p>{slide.description}</p>
                    </div> */}
                </div>)}
            </Slider>
        </div>
    )
}
//Carousel2 component
const Carousel2 = () => {
    const slides = [
        { image: employees1},
        { image: employees2},
        { image: employees3},
    ];

    return (
        <div className="carousel2">
            <Slider touchDisabled = {false} autoplay = {2000} infinite={true} className = "carousel2__slider">
                {slides.map((slide, index) => <div className='carousel2__slider__items' key={index}>
                    <div className="carousel2__slider__items__image">
                        <img src={slide.image} alt="Carousel Image" />
                    </div>
                </div>)}
            </Slider>
        </div>
    )
}
//Carousel3 component
const Carousel3 = (props) => {
    return (
        <div className="carousel2">
            <Slider touchDisabled = {false} autoplay = {2000} infinite={true} className = "carousel2__slider">
                {props.images.map((image, index) => <div className='carousel2__slider__items' key={index}>
                    <div className="carousel2__slider__items__image">
                        <img src={image} alt="Carousel Image" />
                    </div>
                </div>)}
            </Slider>
        </div>
    )
}

//Export all Carousels
export { Carousel1, Carousel2, Carousel3 }