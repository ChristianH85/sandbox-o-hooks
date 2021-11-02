import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './nav.css'
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <nav className="navbar navbar-expand-lg" id ='navB'>
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
            <span className="navbar-toggler-icon" id='icon'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav" >
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
            <li className="nav-item">
            <Link to='/props' className='nav-link'> Props</Link>
            </li>
            </ul>
        </div>
        </nav>
    );
    }
    export default Nav;