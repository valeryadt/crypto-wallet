import {Link} from "react-router-dom";
import Btn from "../header/btn/btn";
import './error-page.css'
const ErrorPage = () => {
    return (
        <div className="error">
            <div className="error__info">
                <h1 className="error__info-title">
                    Something went wrong :(
                </h1>
                <h2 className="error__info-description">
                    The page you are looking for was moved, removed, renamed or might never existed.
                </h2>
                <Link to="/">
                    <Btn text="Go home" styling="start btn error__btn"/>
                </Link>
            </div>
            <div className="error__img-container">
                <img src="/img/error.png" alt=""/>
            </div>
        </div>
    )
}

export default ErrorPage;