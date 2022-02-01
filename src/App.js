//Acts as the component internal assembler. Don't mess with this file unless you exactly know what you are doing

//Imports
import { useContext } from "react"
import Header from "./components/Header"
import HOCLoader from "./components/HOCLoader"
import Home from "./components/Home"
import { AppContext } from "./store/Data"
import AppointmentWrapper from "./components/AppointmentWrapper"
import { createTheme, ThemeProvider } from '@material-ui/core'
import InfoDisplay from "./components/InfoDisplay"
import { Route, Switch } from 'react-router-dom'
import About from "./components/About"
import ServicePage from "./components/ServicePage"
import DoctorPage from "./components/DoctorPage"

//Create MUI Theme classes
const appTheme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF'
        },
        secondary: {
            main: '#26396D'
        }
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif',
        fontSize: 12,
        fontWeightLight: 300,
        fontWeightMedium: 500,
        fontWeightRegular: 400,
        fontWeightBold: 600
    }
})

//Functional App Component
const App = () => {

    //Get HOCLoaderVisibilityControls from the AppContext
    const [{ HOCLoaderVisibilityControls }, { AppointmentVisibilityControls }, { InfoDisplayControls }] = useContext(AppContext)

    //Return JSX
    return (
        <ThemeProvider theme={appTheme}>
            <div className="App">
                {/* Standalone HOCLoader, controllable by other components in the App */}
                {HOCLoaderVisibilityControls[0] ? <HOCLoader /> : ""}

                {/* Standalone AppointmentWrapper, controllable by other components in the App */}
                {AppointmentVisibilityControls[0] ? <AppointmentWrapper /> : ""}
                {/* Standalone InfoDisplay, controllable by other components in the App */}
                {InfoDisplayControls[0].visible ? <InfoDisplay message={InfoDisplayControls[0].message} /> : ""}

                {/* Get main components here */}

                <Switch>
                    {/* The Home page */}
                    <Route exact path='/' component={Home} />
                    {/* The About Page */}
                    <Route exact path='/about' component={About} />
                    {/* The Service Page */}
                    <Route exact path='/services/:id' component={ServicePage} />
                    {/* The Service Page */}
                    <Route exact path='/doctors/:id' component={DoctorPage} />
                </Switch>
            </div>
        </ThemeProvider>
    )
}

//Export default Component
export default App