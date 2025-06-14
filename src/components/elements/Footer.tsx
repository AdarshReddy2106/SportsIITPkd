import { Container } from "../shared/Container";
import logo from "../../assets/logo.png";
import { NavItems } from "./Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      const htmlElement = document.documentElement;
      const isDarkMode = htmlElement.classList.contains('dark') || 
                        window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(isDarkMode);
    };

    checkDarkMode();
    
    // Listen for changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkDarkMode);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', checkDarkMode);
    };
  }, []);

  const footerClasses = `relative z-10 overflow-hidden py-10 border-t ${
    isDark 
      ? 'bg-gray-900 border-gray-700' 
      : 'bg-gray-50 border-gray-200'
  }`;

  const logoTextClasses = `text-2xl font-bold tracking-wide transition-colors duration-300 ${
    isDark ? 'text-white' : 'text-gray-900'
  }`;

  const linkClasses = `relative inline-block px-3 py-1.5 transition-all duration-300 group ${
    isDark 
      ? 'text-gray-200 hover:text-purple-400' 
      : 'text-gray-700 hover:text-purple-600'
  }`;

  const underlineClasses = `absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:left-0 ${
    isDark ? 'bg-purple-400' : 'bg-purple-600'
  }`;

  const copyrightClasses = `mt-10 pt-6 text-center text-sm border-t ${
    isDark 
      ? 'text-gray-300 border-gray-600' 
      : 'text-gray-600 border-gray-300'
  }`;

  return (
    <footer className={footerClasses}>
      {/* Background gradient and glow */}
      <div className={`absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 blur-3xl ${
        isDark ? 'opacity-10' : 'opacity-5'
      }`}></div>

      <Container className="relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} className="w-9 h-9 drop-shadow-md transition-transform duration-300 group-hover:scale-110" alt="Logo" />
            <span className={logoTextClasses}>
              Sports IITPkd
            </span>
          </Link>

          {/* Navigation */}
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end gap-5 text-base font-medium">
              {NavItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.href} className={linkClasses}>
                    {item.label}
                    <span className={underlineClasses}></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider + copyright */}
        <div className={copyrightClasses}>
          © {new Date().getFullYear()} Sports Council, IIT Palakkad. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};