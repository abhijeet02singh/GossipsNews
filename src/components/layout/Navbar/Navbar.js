import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { ThemeToggle } from '../../ui/ThemeToggle';
import { APP_NAME } from '../../../constants/appConstants';

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileMenuOpen: false,
      isScrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 50) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({
      isMobileMenuOpen: !prevState.isMobileMenuOpen
    }));
  }

  closeMobileMenu = () => {
    this.setState({ isMobileMenuOpen: false });
  }

  render() {
    const { isMobileMenuOpen, isScrolled } = this.state;
    
    return (
      <nav className={`navbar-modern ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-gradient-border"></div>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link className="navbar-brand-modern" to="/">{APP_NAME}</Link>
            
            <button 
              className="mobile-menu-toggle"
              onClick={this.toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>

            <ul className={`navbar-nav-modern ${isMobileMenuOpen ? 'active' : ''}`}>
              <li className="nav-item">
                <Link className="nav-link-modern" to="/" onClick={this.closeMobileMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link-modern" to="/business" onClick={this.closeMobileMenu}>Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link-modern" to="/entertainment" onClick={this.closeMobileMenu}>Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link-modern" to="/general" onClick={this.closeMobileMenu}>General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link-modern" to="/health" onClick={this.closeMobileMenu}>Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link-modern" to="/science" onClick={this.closeMobileMenu}>Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link-modern" to="/sports" onClick={this.closeMobileMenu}>Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link-modern" to="/technology" onClick={this.closeMobileMenu}>Technology</Link>
              </li>
              <li className="nav-item">
                <span className="search-icon">🔍</span>
              </li>
              <li className="nav-item">
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
