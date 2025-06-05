import { Container } from "../shared/Container";
import logo from "../../assets/logo.png";
import { useThemeStore } from "../../store/Themestore";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";

export const NavItems = [
    {href: '#', label: 'Home'},
    {href: '/about', label: 'About'},
    {href: '/gallery', label: 'Gallery'},
    {href: '/events', label: 'Events'},
    {href: '/bookings', label: 'Bookings'},
    {href: '/contact', label: 'Contact'},
]

export const Navbar = () => {
  const { toggleTheme, theme } = useThemeStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 font-bold text-lg tracking-wide">
            <img src={logo} alt="Sports IITPkd Logo" className="w-8 h-8" />
            <span>Sports IITPKD</span>
            <span className="text-orange-400 text-xl ml-1">⚡</span>
          </a>
          {/* Hamburger for mobile */}
          {/* Theme switch for mobile */}
          <div className="md:hidden flex items-center px-4 py-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-box-border text-heading-2"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"  // Changed stroke color
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"  // Changed stroke color
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
            </button>
          </div>
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-white mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-white mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
          {/* Nav Links */}
          <ul className={`flex-col md:flex-row flex gap-6 md:gap-8 text-base font-medium fixed md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent z-40 transition-all duration-300 ${menuOpen ? "flex" : "hidden md:flex"}`}>
            <li><Link to="/" className="block px-4 py-3 md:p-0">Home</Link></li>
            <li><Link to="/about" className="block px-4 py-3 md:p-0">About</Link></li>
            <li><Link to="/gallery" className="block px-4 py-3 md:p-0">Gallery</Link></li>
            <li><Link to="/events" className="block px-4 py-3 md:p-0">Events</Link></li>
            <li><Link to="/bookings" className="block px-4 py-3 md:p-0">Booking</Link></li>
            <li><Link to="/contact" className="block px-4 py-3 md:p-0">Contact</Link></li>
            <li className="md:hidden"><Link to="/signin" className="block px-4 py-3">Sign In</Link></li>
            <li className="md:hidden"><Link to="/signup" className="block px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-center">Sign Up</Link></li>
          </ul>
          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-box-border text-heading-2"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"  // Changed stroke color
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"  // Changed stroke color
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
            </button>
            <Link to="/signin" className="px-4 py-2 rounded text-sm hover:underline">Sign In</Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold shadow-lg"
              style={{ boxShadow: "0 0 16px 4px #d946ef55" }}
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
};