import './nav-item.css'
import {useState} from "react";
import {Link} from "react-router-dom"


function NavItem({name, link, styling}) {

    // const [isActive, setIsActive] = useState(false);
    // function handleClick(e) {
    //     console.log(active)
    //     setActive(prevState => !prevState)
    // }
    // console.log(styling, 'style')
    // function handleMobileMenuToggle() {
    //     setIsActive(!isActive)
    //     console.log('click')
    // }

    return (
        <Link to={link}>
           <li className={styling}>
               <p className="nav__item-name">{name}</p>
           </li>
        </Link>
    )
}

export default NavItem;