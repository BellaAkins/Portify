import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeroImage from "../assets/hero.jpg";
import Keyboard from "../assets/keyboard.jpg";
import Pick from "../assets/finger.jpg";
import Create from "../assets/create.jpg";
import Gethired from "../assets/gethired.jpg";
import AvatarRita from "../assets/avatar-rita.jpg";
import Avatarsusan from "../assets/avatar-susan.jpg";
import Avatarjamal from "../assets/avatar-jamal.jpg";

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
      <Steps />
      <FeaturedTemplates />
      <Testimonials />
      <Footer />
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

          <a className="hover:text-blue-600 cursor-pointer">About</a>
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
      {/* Background Image */}
      <img
        src={HeroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay 
      <div className="absolute inset-0 bg-black/50" />
      */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
        <div className="max-w-xl text-left text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Digital Edge <br /> Your Career Needs.
          </h1>

          <div className="flex gap-4">
            <Link to="/login">
              <button className="px-8 py-3 bg-[#1ABCFE] hover:bg-white hover:text-[#1ABCFE] transition rounded-lg font-medium">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="px-8 py-3 border border-[#1ABCFE] text-[#1ABCFE] bg-white hover:bg-[] hover:text-[#1ABCFE] transition rounded-lg font-medium">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= STEPS ================= 
function Steps() {
  const steps = [
    ["Tell Us About You", "Upload your details"],
    ["Pick Your Design", "Choose a template"],
    ["Customize", "Edit colors & layout"],
    ["Download & Share", "Publish instantly"],
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {steps.map(([title, desc], i) => (
          <div
            key={i}
            className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow"
          >
            <h3 className="font-semibold text-xl mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
*/
/*STEPS*/
function Steps() {
  const steps = [
    {
      title: "Step 1. Tell Us About You",
      desc: "Upload or enter your experience, skills, and education.",
      img: Keyboard,
    },
    {
      title: "Step 2. Pick Your Design",
      desc: "Choose from clean, professional résumé, CV, and cover-letter templates.",
      img: Pick,
    },
    {
      title: "Step 3. Customize Your Design",
      desc: "Refine your work instantly using the visual editor to switch templates and adjust colors and fine-tune your layout in real-time",
      img: Create,
    },
    {
      title: "Step 4. Download & Share",
      desc: "Publish your portfolio to a custom URL and share it instantly. Every portfolio is fully ATS optimized automatically",
      img: Gethired,
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-800 font-pd">
      <h2 className="text-3xl font-bold font-pd text-center mb-20">
        Designed for Modern Creative
      </h2>

      <div className="max-w-6xl mx-auto space-y-24">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text */}
            <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
              {/*<p className="text-sm font-semibold text-blue-600 mb-2">
                Step {i + 1}
              </p> */}
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-md">
                {step.desc}
              </p>
            </div>

            {/* Image */}
            <div
              className={`${
                i % 2 !== 0 ? "md:order-1" : ""
              } rounded-xl overflow-hidden shadow-lg`}
            >
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= FEATURES ================= */

/* ================= TEMPLATES ================= */
function FeaturedTemplates() {
  return (
    <section className="py-20 px-6 text-center bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-10">Featured Templates</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="h-48 bg-gray-300 dark:bg-gray-700 rounded-xl"
          />
        ))}
      </div>
    </section>
  );
}

/* ================= TESTIMONIALS ================= 
function Testimonials() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">What People Say</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {["Rita", "Susan", "Jamal"].map((name, i) => (
          <div
            key={i}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow"
          >
            “Portify helped me stand out instantly.”
            <div className="mt-4 font-semibold">– {name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}*/

function Testimonials() {
  const testimonials = [
    {
      name: "Rita",
      text: "This tool helped me create a professional résumé in under 10 minutes — and I landed interviews immediately",
      avatar: AvatarRita,
    },
    {
      name: "Susan",
      text: "Thanks to Portify, I finally have a portfolio I’m proud to share with recruiters.",
      avatar: Avatarsusan,
    },
    {
      name: "Jamal",
      text: "I’ve tried many résumé builders, but this is the first one that actually made the process simple",
      avatar: Avatarjamal,
    },
  ];

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">What People Say</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="p-6 bg-[#1C3B5E] dark:bg-gray-800 text-white rounded-xl shadow flex flex-col items-center"
          >
            {/* Avatar */}
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-4 object-cover"
            />

            {/* Testimonial text */}
            <p className=" dark:text-gray-200">“{testimonial.text}”</p>

            {/* Name */}
            <div className="mt-4 font-semibold dark:text-gray-100">
              – {testimonial.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="bg-[#0f2f4f] text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded-sm" />
          <span className="text-xl font-semibold">Portify</span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">
            Home
          </a>
          <a href="#" className="hover:text-white transition">
            Products
          </a>
          <a href="#" className="hover:text-white transition">
            Templates
          </a>
          <a href="#" className="hover:text-white transition">
            About Us
          </a>
          <a href="#" className="hover:text-white transition">
            Contact Us
          </a>
        </nav>
      </div>

      {/* Bottom section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-gray-400">
          <span>Terms of Services</span>
          <span className="mx-2">|</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
