import React from 'react'
import { HashLink as Link} from "react-router-hash-link";


const Nav = () => {

    const navlist = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About",
            href: "/about"
        },
        {
            name: "Contact",
            href: "/contact"
        },
    ]

    return (
        <div className='Nav'>
            <div className="logo">Rikodev</div>
            <div className="hamburger">X</div>
            <ul className="navlinks">
               {navlist.map((link) => {
                   return(
                       <li>
                           <Link className="link" smooth to={link.href}>{link.name}</Link>
                       </li>
                   )
               })}
            </ul>
        </div>
    )
}

export default Nav
