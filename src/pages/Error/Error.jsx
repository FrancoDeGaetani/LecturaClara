import { Link } from "react-router-dom"

import "./Error.css"
import error from '../../assets/imgs/error.png'

function Error(){

    return(
        <div className="error-container">
            <img src={error} alt="" />
            <div className="error-container-text">
                <h1>Error 404!</h1>
                <p>Biblioteca no encontrada!</p>
                <Link to='/'>Volver al inicio</Link>
            </div>
        </div>
    )
}

export default Error