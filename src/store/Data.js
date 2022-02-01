//This is the data context for the Context API for the entire App

import { createContext, useState } from "react";

//Export context
export const AppContext = createContext()

//export context provider
export const DataProvider = (props) => {
    //List of all data controllers within the App

    //The HOCLoader visibility Controller
    const [isHOCLoaderVisible, setHOCLoaderVisibility] = useState(true)

    //Appointment Visibility Controller
    const [isAppointmentVisible, setAppointmentVisibility] = useState(false)

    //Information Display Visibility Controller
    const [infoDisplay, setInfoDisplay] = useState({
        visible: false,
        message: ""
    })

    //Return the Provider (Wrapper)
    return (
        <AppContext.Provider value={[
            //Providing the HOC Loader Controls
            {
                HOCLoaderVisibilityControls: [isHOCLoaderVisible, setHOCLoaderVisibility]
            },
            {
                AppointmentVisibilityControls: [isAppointmentVisible, setAppointmentVisibility]
            },
            {
                InfoDisplayControls: [infoDisplay, setInfoDisplay]
            }
        ]}>
            {props.children}
        </AppContext.Provider>
    )
}