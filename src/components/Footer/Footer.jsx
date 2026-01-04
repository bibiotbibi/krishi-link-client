import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-green-50">
      <div className="mx-auto px-4 py-16">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 ">
              <img src="https://i.ibb.co.com/B5wVXjJR/Logo-design-ideas-to-explore-on-Instagram-for-fresh-inspiration-removebg-preview-1.png" alt="" />
                
              </div>
              <h3 className="text-xl font-bold text-primary">
                KrishiLink
              </h3>
            </div>

            <p className="text-gray-600 max-w-sm mb-6">
              KrishiLink connects farmers and buyers through a smart,
              sustainable agricultural marketplace.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 text-gray-500">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <Facebook className="hover:text-green-700 cursor-pointer" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Twitter className="hover:text-green-700 cursor-pointer" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram className="hover:text-green-700 cursor-pointer" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin className="hover:text-green-700 cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">

              <li>
                <a
                  onClick={() => {
                    const section = document.querySelector("#about");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="hover:underline"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector("#features");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:underline"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector("#pricing");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:underline"
                >
                  Pricing
                </a>
              </li>



            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Resource</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="#blog-section"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector("#blog-section");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:underline"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="#customer-stories"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector("#customer-stories");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:underline"
                >
                  Customer Stories
                </a>
              </li>

              {/* <li><Link to="/payments">Payments</Link></li> */}

            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Help</h4>
            <ul className="space-y-2 text-gray-600">

              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector("#faq");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:underline"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#join"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector("#join");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:underline"
                >
                  Join
                </a>
              </li>
              <li>
                <a
                  href="#help"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector("#help");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:underline"
                >
                  Help Center
                </a>
              </li>


            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 border-t"></div>

        {/* Bottom section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          

          {/* Address */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Address</h4>
            <p className="text-gray-600 text-sm">
              Dhaka, Bangladesh <br />
              Agricultural Market Hub
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Contact</h4>
            <p className="text-gray-600 text-sm mb-2">
              📞 <a href="tel:+8801XXXXXXXXX">+880 1XXX-XXXXXX</a>
            </p>
            <p className="text-gray-600 text-sm">
              ✉️ <a href="mailto:support@krishilink.com">support@krishilink.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 border-t py-4">
        © {new Date().getFullYear()} KrishiLink. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
