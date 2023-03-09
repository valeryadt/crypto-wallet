import './header.css';
import Logotype from "../logotype/logotype";
import Btn from "./btn/btn";
import LangToggle from "./lang-toggle/lang-toggle";
import NavItem from "./nav-item/nav-item";

function Header() {

    return (
        <div className="header">
            <div>
                <Logotype/>
            </div>
            <div className="nav">
                <NavItem name="Home"  />
                <NavItem name="Contact Us" />
                <NavItem name="Cryptocurrencies" />
                <NavItem name="Trending" />
                <NavItem name="Crypto News" />
            </div>
            <div className={"panel"}>
                <LangToggle lang="English" />
                <Btn text="Sign up" styling="btn registration"/>
                <Btn text="Login" styling="btn login"/>
            </div>
        </div>
    )
}

export default Header;