import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import IEDCButton from './common/IEDCButton';
import './Navbar.css';
import { useTheme } from '../context/ThemeContext';
import logoBlack from '../assets/SVG/Black Horizontal.svg';
import logoWhite from '../assets/SVG/White Horizontal.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = scrollY > 50;

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">

        {/* Logo */}
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">
            <img
              src={theme === 'dark' ? logoWhite : logoBlack}
              alt="IEDC CCE"
              className="navbar-logo-img"
            />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="nav-links-desktop">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/activities" className="nav-link">Activities</Link>
          <Link to="/ipl" className="nav-link">IPL 2.0</Link>

          {/* Startups Dropdown */}
          <div
            className="nav-item-dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link to="/tbi" className="nav-link dropdown-trigger">
              Startups and Consultancies
            </Link>
            <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              <Link to="/tbi" className="dropdown-item">All Startups (TBI)</Link>
              <Link to="/startups/engravers" className="dropdown-item">Engravers</Link>
              <Link to="/startups/hobbyhub" className="dropdown-item">HobbyHub</Link>
              <Link to="/startups/trawell" className="dropdown-item">Trawell</Link>
              <Link to="/startups/levantate" className="dropdown-item">Levantate Labs</Link>
              <Link to="/startups/learnesta" className="dropdown-item">Learnesta</Link>
            </div>
          </div>

          <Link to="/rules" className="nav-link">Rules and Regulations</Link>
          <Link to="/nisp" className="nav-link">NISP</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </div>

        {/* Desktop Actions */}
        <div className="nav-actions-desktop">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark'
              ? <Sun size={18} color="gold" />
              : <Moon size={18} />}
          </button>

          <IEDCButton to="/contact" size="md" icon={<ArrowUpRight size={15} />}>
            JOIN IEDC
          </IEDCButton>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen
            ? <X size={28} className="nav-icon" />
            : <Menu size={28} className="nav-icon" />}
        </button>

        {/* Mobile Slide-in Menu */}
        <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
          <div className="mobile-nav-links">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/activities" onClick={() => setIsOpen(false)}>Activities</Link>
            <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link>
            <Link to="/ipl" onClick={() => setIsOpen(false)}>IPL 2.0</Link>
            <Link to="/tbi" onClick={() => setIsOpen(false)}>Startups</Link>
            <Link to="/rules" onClick={() => setIsOpen(false)}>Rules</Link>
            <Link to="/nisp" onClick={() => setIsOpen(false)}>NISP</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <div className="mobile-actions">
              <IEDCButton
                to="/contact"
                size="lg"
                icon={<ArrowUpRight size={16} />}
                onClick={() => setIsOpen(false)}
              >
                JOIN IEDC
              </IEDCButton>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
