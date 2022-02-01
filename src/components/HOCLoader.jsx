//The HOC Loader component

//Imports
import reactDom from "react-dom"
import Loader from "react-loader-spinner"

//HOCLoader Component
const HOCLoader = () => {
    return reactDom.createPortal((
        <div className="hoc-loader">
            <Loader className = "hoc-loader__spinner" type="ThreeDots" color="#152146" height={60} width={60} />
        </div>
    ), document.getElementById('portal'))
}

//Export default Component
export default HOCLoader