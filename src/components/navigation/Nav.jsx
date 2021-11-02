import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './nav.css'
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand" >
        <Link to='/' className='nav-link'>  Sandbox Full O' Hooks</Link>
        </div>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggle}
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item ">
                <Link to='/' className='nav-link'> useState( )</Link>
            </li>
            <li className="nav-item">
                <Link to='/effect' className='nav-link'> useEffect( )</Link>
            </li>
            <li className="nav-item">
                <Link to='/ref' className='nav-link'> useRef( )</Link>
            </li>
            <li className="nav-item">
            <Link to='/memo' className='nav-link'> useMemo ( )</Link>
            </li>
            </ul>
        </div>
        </nav>
    );
    }
    export default Nav;