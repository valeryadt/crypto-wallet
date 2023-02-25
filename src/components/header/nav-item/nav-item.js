import './nav-item.css'
import {useState} from "react";

function NavItem({name}) {

    const [activeState, setActiveState] = useState(false);
    function handleClick(e) {
        setActiveState(prevState => !prevState)
    }

    return (
        <div className={`nav__item ${activeState ? 'nav__item__active' : ''}`} onClick={handleClick}>
           <p className="nav__item-name">{name}</p>
        </div>
    )
}

export default NavItem;