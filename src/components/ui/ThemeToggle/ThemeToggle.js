import React, { Component } from 'react';
import { THEMES, THEME_STORAGE_KEY } from '../../../constants/appConstants';

export class ThemeToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: THEMES.LIGHT
    };
  }

  componentDidMount() {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? THEMES.DARK : THEMES.LIGHT);
    
    this.setState({ theme: initialTheme });
    this.applyTheme(initialTheme);
  }

  toggleTheme = () => {
    const newTheme = this.state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    this.setState({ theme: newTheme });
    this.applyTheme(newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  }

  applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
  }

  render() {
    const { theme } = this.state;
    
    return (
      <button 
        className="theme-toggle"
        onClick={this.toggleTheme}
        aria-label={`Switch to ${theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT} mode`}
        title={`Switch to ${theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT} mode`}
      >
        {theme === THEMES.LIGHT ? (
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        ) : (
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        )}
      </button>
    );
  }
}

export default ThemeToggle;
