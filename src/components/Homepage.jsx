import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeroImage from "../assets/homepage-hero-image.jpg";

/* ================= ROOT ================= */
export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Sync dark mode with html tag
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Nav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        dark={dark}
        setDark={setDark}
      />

      <Hero />
    </div>
  );
}

/* ================= NAV ================= */
function Nav({ menuOpen, setMenuOpen, dark, setDark }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">Portify</div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Dropdown
            label="Products"
            isOpen={openDropdown === "products"}
            onToggle={() =>
              setOpenDropdown(openDropdown === "products" ? null : "products")
            }
            onClose={() => setOpenDropdown(null)}
          >
            <Link to="/resume">Resume Builder</Link>
            <Link to="/portfolio">Portfolio Builder</Link>
            <Link to="/cover-letters">Cover Letters</Link>
          </Dropdown>

          <Dropdown
            label="Templates"
            isOpen={openDropdown === "templates"}
            onToggle={() =>
              setOpenDropdown(openDropdown === "templates" ? null : "templates")
            }
            onClose={() => setOpenDropdown(null)}
          >
            <Link to="/resume-templates">Resume Templates</Link>
            <Link to="/cv-templates">CV Templates</Link>
            <Link to="/portfolio-templates">Portfolio Templates</Link>
          </Dropdown>

          <Link to="/page">
            <a className="hover:text-blue-600 cursor-pointer">About</a>
          </Link>
          <a className="hover:text-blue-600 cursor-pointer">Contact</a>

          {/* <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Start Building
          </button> */}

          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-5 text-gray-800 dark:text-gray-100">
          {/*X button*/}
          <button onClick={() => setMenuOpen(false)} className="self-end p-2">
            <X size={35} className="text-[#1ABCFE]" />
          </button>

          <MobileDropdown label="Products">
            <Link to="/resume">Resume Builder</Link>
            <Link to="/portfolio">Portfolio Builder</Link>
            <Link to="/cover-letters">Cover Letters</Link>
          </MobileDropdown>

          <MobileDropdown label="Templates">
            <Link to="/resume-templates">Resume Templates</Link>
            <Link to="/cv-templates">CV Templates</Link>
            <Link to="/portfolio-templates">Portfolio Templates</Link>
          </MobileDropdown>

          <a className="cursor-pointer">About Us</a>

          {/* Divider */}
          <div className="border-t border-gray-300 dark:border-gray-600 my-2" />

          {/* Contact */}
          <a className="flex items-center gap-3 cursor-pointer">
            <Phone size={18} />
            <span>Contact Us</span>
          </a>

          <div className="flex gap-4 mt-2">
            <button className="p-2 bg-blue-600 text-white rounded-full">
              <Phone size={16} />
            </button>
            <button className="p-2 bg-green-500 text-white rounded-full">
              <FaWhatsapp size={16} />
            </button>
            <button className="p-2 bg-gray-700 text-white rounded-full">
              <Mail size={16} />
            </button>
          </div>

          {/* CTA */}

          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="mt-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 flex justify-center"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ================= DROPDOWNS ================= */

function Dropdown({ label, isOpen, onToggle, onClose, children }) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center gap-1 hover:text-blue-600"
      >
        {label} <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div
          className="absolute left-0 top-full mt-2 w-48
                     bg-white dark:bg-gray-700
                     rounded-lg shadow-lg p-4
                     flex flex-col gap-2
                     z-50"
          onClick={onClose}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function MobileDropdown({ label, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full"
      >
        {label} <ChevronDown size={16} />
      </button>

      {open && (
        <div className="pl-4 mt-2 flex flex-col gap-2 text-sm">{children}</div>
      )}
    </div>
  );
}

/* ================= HERO ================= 
function Hero() {
  return (
    <section className="pt-28 pb-20 px-6 text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        The Digital Edge Your Career Needs.
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Build beautiful résumés, portfolios, and personal brands with ease.
      </p>

      <div className="flex justify-center gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl">
          Start Building Free
        </button>
        <button className="px-6 py-3 border border-gray-400 dark:border-gray-600 rounded-xl">
          Learn More
        </button>
      </div>
    </section>
  );
}
  */

function Hero() {
  return (
    <section className="relative h-[90vh] w-full">
      <img
        src={HeroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center justify-center px-6">
        <div className="w-full max-w-5xl text-center text-white">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight whitespace-normal md:whitespace-nowrap">
            The Digital Edge Your Career Needs.
          </h1>

          <Link to="/onboarding">
            <button className="px-15 py-3 bg-[#F5F8FA] text-[#1C3B5E] border border-[#1C3B5E] font-semibold text-xl hover:bg-white hover:text-[#1ABCFE] transition rounded-lg">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
