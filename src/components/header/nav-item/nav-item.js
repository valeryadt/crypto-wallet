import './nav-item.css'
import {useState} from "react";

function NavItem({name}) {

    const [activeState, setActiveState] = useState(false);
    function handleClick(e) {
        setActiveState(prevState => !prevState)
    }

    return (
        <div className={`nav__item ${activeState ? 'nav__item__active' : ''}`} onClick={handleClick}>
            {name}
        </div>
    )
}

export default NavItem;