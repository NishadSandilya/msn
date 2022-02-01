//This is the appointment wrapper
//Imports
import Appointment from "./Appointment"
import cross from '../cdn/cross.png'
import { useContext } from "react"
import { AppContext } from "../store/Data"


//Appointment Wrapper Component
const AppointmentWrapper = () => {

    //Get the Appointment Close Controller
    const [,{AppointmentVisibilityControls}] = useContext(AppContext)

    return (
        <div className="appointment-wrapper">
            <div className="appointment-wrapper__box">
                <div className="appointment-wrapper__box__cross-icon">
                    <img onClick={() => AppointmentVisibilityControls[1](() => false)} src={cross} alt="Close Appointment" />
                </div>
                <div className="appointment-wrapper__box__title">
                    <p>
                        Online Appointment
                    </p>
                </div>
                <div className="appointment-wrapper__box__sub-title">
                    <p>Please click on submit after filling in the form properly. Once done, our associates will get in touch with you shortly</p>
                </div>
                <div className="appointment-wrapper__box__form">
                    <Appointment />
                </div>
            </div>
        </div>
    )
}

//Export default Appointment wrapper
export default AppointmentWrapper