import { useContext, useState } from 'react';
import './Navbar.css'
import { ThemeContext } from '../../theme/Theme';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    const { darkTheme, toggleTheme } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo"> Fashion Hub</div>

                <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`} >
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/newArrival">New Arrival</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
                <div className="navbar-right">
                    <button className="hamburger" onClick={toggleMenu}>
                        <span className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></span>
                    </button>
                    <div className="theme-switch">
                        <label className="switch">
                            <input type="checkbox" checked={darkTheme} onChange={toggleTheme} />
                            <span className="slider round"></span>
                        </label>
                        <span className="theme-label">
                            {darkTheme ? "Dark" : "Light"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;