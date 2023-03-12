import './header.css';
import Logotype from "../logotype/logotype";
import Btn from "./btn/btn";
import LangToggle from "./lang-toggle/lang-toggle";
import NavItem from "./nav-item/nav-item";
import {Link} from "react-router-dom"

function Header() {

    return (
        <div className="header">
            <div>
                <Logotype/>
            </div>
            <div className="nav">
                <Link to="/">
                    <NavItem name="Home"/>
                </Link>
                <Link to="/contact">
                    <NavItem name="Contact Us"/>
                </Link>
                <Link to="/cryptocurrencies">
                    <NavItem name="Cryptocurrencies"/>
                </Link>
                <Link to="/cryptonews">
                    <NavItem name="Crypto News"/>
                </Link>
            </div>
            <div className={"panel"}>
                <LangToggle lang="English"/>
                <Link to="/registration">
                    <Btn text="Sign up" styling="btn registration"/>
                </Link>
                <Link to="/authorization">
                    <Btn text="Login" styling="btn login"/>
                </Link>
            </div>
        </div>
    )
}

export default Header;