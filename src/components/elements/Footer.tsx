import { Container } from "../shared/Container";
import logo from "../../assets/logo.png"
import { NavItems } from "./Navbar"

import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-500 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-8">
      <Container className="pt-5 pb-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex items-center gap-3 mb-4 md:mb-0">
            <img src={logo} className="w-7 h-7" alt="Logo" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Sports IITPkd</span>
          </Link>

          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
              {NavItems.map((item, index) => (
                <li key={index} className="w-full sm:w-auto text-center">
                  <Link 
                    to={item.href}
                    className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
};