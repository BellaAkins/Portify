// Updated Landing Page with Working Dark Mode + Dropdown Nav
// React + TailwindCSS + Lucide-react

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Sync dark mode with the <html> tag (Tailwind uses this)
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

/* ----------------------- NAVBAR ----------------------- */
function Nav({ menuOpen, setMenuOpen, dark, setDark }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-gray-800 fixed top-0 left-0 w-full z-50">
      <div className="text-2xl font-bold">Portify</div>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-6">
        <NavLinks
          dropdownOpen={dropdownOpen}
          setDropdownOpen={setDropdownOpen}
        />

        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Start Building
        </button>

        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      {/* Mobile */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-4">
          <NavLinks
            mobile
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
          />

          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg w-full">
            Start Building
          </button>

          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 w-full flex justify-center"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ----------------------- NAV LINKS (with dropdown) ----------------------- */
function NavLinks({ mobile, dropdownOpen, setDropdownOpen }) {
  const linkClass = mobile
    ? "block py-2 text-lg"
    : "hover:text-blue-600 flex items-center gap-1 cursor-pointer";

  return (
    <>
      <div className="relative">
        <button
          className={linkClass}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          Products <ChevronDown size={16} />
        </button>

        {dropdownOpen && (
          <div
            className={`absolute mt-2 bg-white dark:bg-gray-700 shadow-lg rounded-lg p-4 w-40 ${
              mobile ? "static" : ""
            }`}
          >
            <a className="block py-1 hover:text-blue-600">Resume Builder</a>
            <a className="block py-1 hover:text-blue-600">Portfolio Builder</a>
            <a className="block py-1 hover:text-blue-600">Templates</a>
          </div>
        )}
      </div>

      <a className={linkClass}>Templates</a>
      <a className={linkClass}>About Us</a>
      <a className={linkClass}>Contact</a>
    </>
  );
}

/* ----------------------- HERO ----------------------- */
function Hero() {
  return (
    <section className="pt-28 pb-20 px-6 text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
        The Digital Edge Your Career Needs.
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Build beautiful résumés, portfolios, and personal brands with ease.
      </p>

      <div className="flex justify-center gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl">
          Start Building Free
        </button>
        <button className="px-6 py-3 border border-gray-400 rounded-xl dark:border-gray-600">
          Learn More
        </button>
      </div>

      <img
        src="https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg"
        className="mt-12 rounded-xl shadow-lg w-full max-w-3xl mx-auto"
      />
    </section>
  );
}

/* ----------------------- STEPS ----------------------- */
function Steps() {
  const steps = [
    {
      title: "Tell Us About You",
      desc: "Upload or enter your experience, skills, and education.",
      img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg",
    },
    {
      title: "Pick Your Design",
      desc: "Choose from clean, professional templates.",
      img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    },
    {
      title: "Customize",
      desc: "Fine‑tune your layout, colors, and typography.",
      img: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg",
    },
    {
      title: "Download & Share",
      desc: "Publish your portfolio instantly.",
      img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12">
        Designed for Modern Creatives
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <div key={i} className="flex gap-6 items-start">
            <img src={s.img} className="w-32 h-32 rounded-lg object-cover" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------- FEATURED ----------------------- */
function FeaturedTemplates() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Featured Templates</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="bg-gray-200 dark:bg-gray-700 h-48 rounded-xl shadow"
          />
        ))}
      </div>

      <button className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-xl">
        Start Building Free
      </button>
    </section>
  );
}

/* ----------------------- TESTIMONIALS ----------------------- */
function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-10">What People Say About Us</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          {
            name: "Rita",
            text: "This tool helped me create a résumé in under 10 minutes.",
          },
          {
            name: "Susan",
            text: "Thanks to Portify, I finally have a portfolio recruiters love!",
          },
          {
            name: "Jamal",
            text: "This is the first builder that's actually simple.",
          },
        ].map((t, i) => (
          <div
            key={i}
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow"
          >
            <p className="mb-4 text-gray-700 dark:text-gray-300">“{t.text}”</p>
            <p className="font-semibold">– {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------- FOOTER ----------------------- */
function Footer() {
  return (
    <footer className="py-10 px-6 bg-gray-900 text-gray-300 text-center">
      <div className="font-bold text-xl mb-4">Portify</div>

      <div className="flex justify-center gap-6 mb-4">
        <a>Home</a>
        <a>Products</a>
        <a>Templates</a>
        <a>About Us</a>
        <a>Contact Us</a>
      </div>

      <p className="text-sm">© 2025 Portify. All rights reserved.</p>
    </footer>
  );
}
