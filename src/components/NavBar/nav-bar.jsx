
import { Link } from 'react-router-dom'
import { FaAnglesDown } from "react-icons/fa6";
import { useState, useRef  } from 'react';


import logo from '../../assets/imgs/logo.png';
import './nav-bar.css'




function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const navBarRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(prev => {
            const newState = !prev;
            if (navBarRef.current) {
                navBarRef.current.classList.toggle("nav-bar-open", newState);
                navBarRef.current.classList.toggle("nav-bar-close", !newState);
            }
            return newState;
        });
    };

    return(
        <nav className='nav-bar' id='nav-bar' ref={navBarRef}>
            <Link to='/'><img src={logo} className='nav-bar-logo'></img></Link>
            <div className='nav-links'>
                <Link to='Biblioteca' className='nav-link'>Biblioteca</Link>
                <Link to='tu-biblioteca' className='nav-link'>Tu Biblioteca</Link>
            </div>
            <button className='nav-button' onClick={toggleMenu}  id='nav-button'><FaAnglesDown /></button>
        </nav>
    )
}

export default NavBar;