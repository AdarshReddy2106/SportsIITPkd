import { Container } from "../shared/Container"
import logo from "../../assets/logo.png"

import { useThemeStore } from "../../store/Themestore";
import { Link } from 'react-router-dom';

// const NavItems = [
//     {href: '#', label: 'Home'},
//     {href: '/about', label: 'About'},
//     {href: '/gallery', label: 'Gallery'},
//     {href: '/events', label: 'Events'},
//     {href: '/bookings', label: 'Bookings'},
//     {href: '/contact', label: 'Contact'},
//     // {href: '/login', label: 'Login'},
//     // {href: '/register', label: 'Register'},
//     // {href: '/logout', label: 'Logout'},
// ]

export const Navbar = () => {
  const { toggleTheme, theme } = useThemeStore();

  return (
    <header className="bg-black text-white fixed inset-x-0 top-0 z-50 py-3 shadow">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 font-bold text-lg tracking-wide">
            <img src={logo} alt="Sports IITPkd Logo" className="w-8 h-8" />
            <span>Sports IITPKD</span>
            <span className="text-orange-400 text-xl ml-1">⚡</span>
          </a>
          {/* Nav Links */}
          <ul className="flex gap-8 text-base font-medium">
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#booking">Booking</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          {/* Right Side */}
          <div className="flex items-center gap-3">
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
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
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