import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MessageCircle,
  Sun,
  Moon,
} from "lucide-react";
import { useDarkMode } from "./context/DarkModeContext";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const { dark, setDark } = useDarkMode();

  return (
    <div className="font-sans bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-30 bg-white dark:bg-gray-800 shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <div className="flex items-center gap-2 text-xl font-semibold">
            <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600" />
            <span>Portify</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Templates</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Dark mode toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile menu */}
            <button className="md:hidden" onClick={() => setMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-800 z-40 shadow-lg p-6 transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          className="absolute top-6 right-6"
          onClick={() => setMenuOpen(false)}
        >
          <X size={26} />
        </button>

        <div className="mt-10 flex flex-col gap-6">
          <div>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex justify-between w-full font-medium"
            >
              Products {productsOpen ? <ChevronUp /> : <ChevronDown />}
            </button>

            {productsOpen && (
              <div className="pl-4 mt-2 flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-300">
                <a href="#">Resume Builder</a>
                <a href="#">CV Builder</a>
                <a href="#">Portfolio Builder</a>
                <a href="#">Cover Letter</a>
              </div>
            )}
          </div>

          <a href="#">Templates</a>
          <a href="#">About Us</a>

          <div className="pt-4 border-t border-gray-300 dark:border-gray-600">
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <div className="flex gap-4">
              <MessageCircle />
              <Mail />
              <Phone />
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-30"
        />
      )}

      {/* ================= HERO ================= */}
      <section className="pt-24 relative">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
          className="w-full h-[380px] object-cover"
        />
        <div className="absolute top-1/3 left-6 text-white max-w-md">
          <h1 className="text-3xl font-bold mb-4">
            The Digital Edge Your Career Needs.
          </h1>
          <div className="flex gap-4">
            <button className="bg-blue-600 px-4 py-2 rounded-md">
              Login
            </button>
            <button className="border px-4 py-2 rounded-md">
              Signup
            </button>
          </div>
        </div>
      </section>

      {/* ================= STEPS ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-20">
        {[
          {
            title: "Step 1. Tell Us About You",
            text: "Upload or enter your experience, skills, and education.",
            img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
          },
          {
            title: "Step 2. Pick Your Design",
            text: "Choose from clean, professional résumé, CV, and cover-letter templates.",
            img: "https://images.unsplash.com/photo-1507668077129-56e32842fceb",
            reverse: true,
          },
          {
            title: "Step 3. Customize Your Design",
            text: "Refine your layout and colors in real-time.",
            img: "https://images.unsplash.com/photo-1581091215367-59ab6b243b4d",
          },
          {
            title: "Step 4. Download & Share",
            text: "Publish and share your portfolio instantly.",
            img: "https://images.unsplash.com/photo-1581091227887-9997d2d19b87",
            reverse: true,
          },
        ].map((step, i) => (
          <div
            key={i}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              step.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p>{step.text}</p>
            </div>
            <img src={step.img} className="rounded-lg" />
          </div>
        ))}
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0B2343] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-xl font-semibold mb-6">
            <div className="w-5 h-5 bg-white" />
            <span>Portify</span>
          </div>
          <div className="text-sm flex flex-wrap gap-6">
            <span>Home</span>
            <span>Products</span>
            <span>Templates</span>
            <span>About Us</span>
            <span>Contact Us</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
