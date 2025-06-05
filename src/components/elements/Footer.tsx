import { Container } from "../shared/Container";
import logo from "../../assets/logo.png"
import {NavItems} from "./Navbar"
import { NavItem } from "../shared/NavItem";
import { useThemeStore } from "../../store/Themestore";

export const Footer = () => {
  const { toggleTheme, theme } = useThemeStore();
  return (
    <footer className="bg-gray-500 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
      <Container className="pt-5 pb-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="md:hidden flex items-center px-4 py-3">
            {/* Theme Switch Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-box-border text-black"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="black"
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
                  stroke="black"
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

          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src={logo} className="w-7 h-7" alt=" Logo" />
            <span className="text-lg font-semibold text-heading-1">Sports IITPkd</span>
          </div>

          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-heading-1">
            {NavItems.map((item, key) => (
              <NavItem key={key} href={item.href} text={item.label} />
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}