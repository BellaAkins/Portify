import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";

/* ================= ROOT ================= */
export default function LandingPage() {
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
      <Features />
      <FeaturedTemplates />
      <Testimonials />
      <Footer />
    </div>
  );
}

/* ================= NAV ================= */
function Nav({ menuOpen, setMenuOpen, dark, setDark }) {
  const [productsOpen, setProductsOpen] = useState(false);
  const [templatesOpen, setTemplatesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">Portify</div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Dropdown
            label="Products"
            open={productsOpen}
            setOpen={setProductsOpen}
          >
            <a>Resume Builder</a>
            <a>Portfolio Builder</a>
            <a>Cover Letters</a>
          </Dropdown>

          <Dropdown
            label="Templates"
            open={templatesOpen}
            setOpen={setTemplatesOpen}
          >
            <a>Resume Templates</a>
            <a>CV Templates</a>
            <a>Portfolio Templates</a>
          </Dropdown>

          <a className="hover:text-blue-600 cursor-pointer">About</a>
          <a className="hover:text-blue-600 cursor-pointer">Contact</a>

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
        <div className="p-6 flex flex-col gap-4">
          <button onClick={() => setMenuOpen(false)} className="self-end p-2">
            <X size={28} />
          </button>

          <MobileDropdown
            label="Products"
            open={productsOpen}
            setOpen={setProductsOpen}
          >
            <a>Resume Builder</a>
            <a>Portfolio Builder</a>
            <a>Cover Letters</a>
          </MobileDropdown>

          <MobileDropdown
            label="Templates"
            open={templatesOpen}
            setOpen={setTemplatesOpen}
          >
            <a>Resume Templates</a>
            <a>CV Templates</a>
            <a>Portfolio Templates</a>
          </MobileDropdown>

          <a>About</a>
          <a>Contact</a>

          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
            Start Building
          </button>

          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 flex justify-center"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ================= DROPDOWNS ================= */
function Dropdown({ label, open, setOpen, children }) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 hover:text-blue-600">
        {label} <ChevronDown size={16} />
      </button>

      {open && (
        <div className="absolute top-full mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4 flex flex-col gap-2">
          {children}
        </div>
      )}
    </div>
  );
}

function MobileDropdown({ label, open, setOpen, children }) {
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

/* ================= HERO ================= */
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

/* ================= STEPS ================= */
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

/* ================= FEATURES ================= */
function Features() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose Portify?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
          Fast & Easy Setup
        </div>
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
          Professional Templates
        </div>
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
          Recruiter-Ready Designs
        </div>
      </div>
    </section>
  );
}

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

/* ================= TESTIMONIALS ================= */
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
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="py-10 px-6 bg-gray-900 text-gray-300 text-center">
      <div className="font-bold text-xl mb-4">Portify</div>
      <p className="text-sm">© 2025 Portify. All rights reserved.</p>
    </footer>
  );
}
