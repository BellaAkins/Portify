import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-sm bg-white sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 bg-gray-300 rounded-sm" />
          <span className="text-lg font-semibold">Portify</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-gray-700">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Templates</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>

        {/* MOBILE ICON */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* MOBILE SLIDE-IN MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg p-6 z-50 transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6"
          onClick={() => setMenuOpen(false)}
        >
          <X size={26} />
        </button>

        <div className="mt-10 flex flex-col gap-6 text-gray-800">

          {/* PRODUCTS DROPDOWN */}
          <div>
            <button
              className="flex items-center justify-between w-full text-left"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              <span className="font-medium">Products</span>
              {productsOpen ? <ChevronUp /> : <ChevronDown />}
            </button>

            {productsOpen && (
              <div className="pl-4 mt-2 flex flex-col gap-2 text-gray-600">
                <a href="#">Resume Builder</a>
                <a href="#">CV Builder</a>
                <a href="#">Portfolio Builder</a>
                <a href="#">Cover Letter</a>
              </div>
            )}
          </div>

          <a href="#">Templates</a>
          <a href="#">About Us</a>

          {/* CONTACT */}
          <div className="pt-4 border-t">
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <div className="flex gap-4">
              <MessageCircle />
              <Mail />
              <Phone />
            </div>
          </div>
        </div>
      </div>

      {/* BACKDROP when menu is open */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* HERO SECTION */}
      <header className="relative">
        <img
          src="/hero.jpg"
          className="w-full h-[350px] object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-16">
          <h1 className="text-white text-3xl md:text-4xl font-bold max-w-xl">
            The Digital Edge Your Career Needs.
          </h1>

          <div className="mt-6 flex gap-4">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow">
              Login
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 rounded-lg shadow">
              Signup
            </button>
          </div>
        </div>
      </header>

      {/* 4 STEPS SECTION */}
      <section className="py-16 px-6">
        <h2 className="text-center text-2xl font-bold mb-12">
          Designed for Modern Creative
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Step 1 */}
          <div>
            <img src="/step1.png" className="rounded-md mb-4" />
            <h3 className="font-semibold text-lg">Step 1. Tell Us About You</h3>
            <p className="text-gray-600">
              Upload your experience, skills, and education.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <img src="/step2.png" className="rounded-md mb-4" />
            <h3 className="font-semibold text-lg">Step 2. Pick Your Design</h3>
            <p className="text-gray-600">
              Choose from clean, professional résumé, CV, and cover-letter templates.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <img src="/step3.png" className="rounded-md mb-4" />
            <h3 className="font-semibold text-lg">Step 3. Customize Your Design</h3>
            <p className="text-gray-600">
              Refine your work instantly using our visual editor.
            </p>
          </div>

          {/* Step 4 */}
          <div>
            <img src="/step4.png" className="rounded-md mb-4" />
            <h3 className="font-semibold text-lg">Step 4. Download & Share</h3>
            <p className="text-gray-600">
              Every portfolio is ATS optimized automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="bg-[#11243A] text-white py-16">
        <h2 className="text-center text-2xl font-bold mb-10">Featured Templates</h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="bg-gray-300 h-40 rounded-md" />
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-6">
          <button className="bg-blue-400 px-6 py-2 rounded-md">
            Start building Free
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6">
        <h2 className="text-center text-2xl font-bold mb-12">
          What People Say About Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Rita", msg: "This tool helped me create a résumé in under 10 minutes!" },
            { name: "Susan", msg: "Thanks to Portify, I have a portfolio I'm proud to share." },
            { name: "Jamal", msg: "The first builder that made résumé creation simple." },
          ].map((t, index) => (
            <div key={index} className="p-6 shadow rounded-xl bg-white">
              <div className="h-14 w-14 rounded-full bg-gray-300 mx-auto mb-4" />
              <p className="text-center text-gray-700 mb-2">"{t.msg}"</p>
              <p className="text-center font-semibold">– {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#11243A] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-gray-300 rounded-sm" />
            <span className="text-xl font-semibold">Portify</span>
          </div>

          <div className="flex flex-col md:flex-row gap-6 text-gray-300">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Templates</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </div>
        </div>

        <p className="mt-6 text-center text-gray-400 text-sm">
          Terms of Service | Privacy Policy
        </p>
      </footer>
    </div>
  );
}
