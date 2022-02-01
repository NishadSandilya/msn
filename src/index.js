//This is the final assembler. Please don't mess with this file unless you know exactly what you are doing.

//Imports
import ReactDOM from 'react-dom'
import App from './App'
import './styles/app.css'
import { HashRouter as Router } from 'react-router-dom'
import { DataProvider } from './store/Data'

ReactDOM.render(
    //The Final Render Components (Nested)
    <Router>
        <DataProvider><App /></DataProvider>
    </Router>
    ,
    //The render target in the DOM
    document.getElementById('root')
)