import { useState } from "react";
import { ChevronDown, ChevronUp, X, Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [templatesOpen, setTemplatesOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-white">
        <h1 className="text-xl font-semibold">Portify</h1>

        {/* Hamburger Menu */}
        <button onClick={() => setOpen(true)}>
          <Menu size={28} />
        </button>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SLIDE-OUT MENU */}
      <div
        className={`fixed right-0 top-0 h-full w-72 bg-white shadow-lg z-50 p-6 
        transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button className="absolute right-4 top-4" onClick={() => setOpen(false)}>
          <X size={26} />
        </button>

        {/* MENU CONTENT */}
        <div className="mt-10 space-y-6">

          {/* PRODUCTS DROPDOWN */}
          <div>
            <button
              className="flex justify-between w-full text-left text-lg font-medium"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Products
              {productsOpen ? <ChevronUp /> : <ChevronDown />}
            </button>

            {productsOpen && (
              <div className="mt-2 ml-4 space-y-2 text-gray-600 text-sm">
                <p className="cursor-pointer hover:text-blue-500">Resume Builder</p>
                <p className="cursor-pointer hover:text-blue-500">CV Builder</p>
                <p className="cursor-pointer hover:text-blue-500">Portfolio Builder</p>
                <p className="cursor-pointer hover:text-blue-500">Cover Letter</p>
              </div>
            )}
          </div>

          {/* TEMPLATES DROPDOWN */}
          <div>
            <button
              className="flex justify-between w-full text-left text-lg font-medium"
              onClick={() => setTemplatesOpen(!templatesOpen)}
            >
              Templates
              {templatesOpen ? <ChevronUp /> : <ChevronDown />}
            </button>

            {templatesOpen && (
              <div className="mt-2 ml-4 space-y-2 text-gray-600 text-sm">
                <p className="cursor-pointer hover:text-blue-500">Resume Templates</p>
                <p className="cursor-pointer hover:text-blue-500">Portfolio Templates</p>
                <p className="cursor-pointer hover:text-blue-500">Cover Letter Templates</p>
              </div>
            )}
          </div>

          {/* SIMPLE LINKS */}
          <p className="text-lg font-medium cursor-pointer hover:text-blue-500">
            About Us
          </p>

          {/* CONTACT SECTION */}
          <div className="pt-6 border-t">
            <h3 className="text-lg font-medium mb-3">Contact Us</h3>
            <div className="flex gap-4 text-blue-600 text-xl">
              <i className="fa-brands fa-whatsapp cursor-pointer"></i>
              <i className="fa-brands fa-instagram cursor-pointer"></i>
              <i className="fa-solid fa-envelope cursor-pointer"></i>
              <i className="fa-solid fa-phone cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
