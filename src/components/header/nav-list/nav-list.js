import './nav-list.css'
import NavItem from "../nav-item/nav-item";
import {useState} from "react";
import {navLinks} from "../constants/constants";

function NavList() {

    const [isActive, setIsActive] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsActive(!isActive);
        console.log(isActive)
        console.log('tatatat')
    };

    // console.log(isActive)

    // function handleMobileMenuToggle() {
    //    console.log('click')
    //     setIsActive(!isActive);
    // }


    return (
        <ul className="flex flex-row gap-8 w-full">
            {navLinks.map(item => {
               return <NavItem
                   name={item.name}
                   link={item.linkTo}
                   // onClick={() => setActive(item.title)}
                   onClick={handleMobileMenuToggle}
                   styling={ isActive ? 'text-black' : 'text-white'}
                   key={item.id}  />
            })}
        </ul>
    )
}

export default NavList;