import React from "react";
import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
const LINKS = [
  {
    title: "Company",
    items: [
      { name: "About", path: "/about" },
      { name: "Our Work", path: "/work" },
      { name: "Clients", path: "/clients" },
    ],
  },
  {
    title: "Services",
    items: [
      { name: "Branding", path: "/services" },
      { name: "Marketing", path: "/services" },
      { name: "Advertising", path: "/services" },
    ],
  },
  {
    title: "Contact",
    items: [
      { name: "Get in Touch", path: "/contact" },
      { name: "Careers", path: "/contact" },
    ],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white">
      <div className="mx-auto w-full max-w-7xl px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Typography as={NavLink} to="/" className="cursor-pointer">
            <img src="/IMG2.png" className="h-28 w-44" alt="Yas Agency" />
          </Typography>
          <div className="grid grid-cols-3 gap-6">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  className="mb-3 font-medium opacity-60 uppercase"
                >
                  {title}
                </Typography>

                {items.map(({ name, path }) => (
                  <li key={name}>
                    <NavLink
                      to={path}
                      className="block py-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-6">
          <Typography variant="small" className="mb-4 md:mb-0 text-gray-400">
            &copy; {currentYear}{" "}
            <a
              href="https://material-tailwind.com/"
              className="hover:text-white"
            ></a>
            Yas Agency — All Rights Reserved
          </Typography>

          <div className="flex gap-5">
            {/* Facebook */}
            <Typography
              as="a"
              href="https://www.facebook.com/share/16RtHP6VJz/"
              target="_blank"
              className="text-gray-400 hover:text-[#1877F2] transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </Typography>

            {/* LinkedIn */}
            <Typography
              as="a"
              href="https://www.linkedin.com/company/yas-agency-advertising/"
              target="_blank"
              className="text-gray-400 hover:text-[#0A66C2] transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.85-3.037-1.851 0-2.134 1.445-2.134 2.939v5.667H9.99V9h3.112v1.561h.044c.434-.823 1.494-1.691 3.074-1.691 3.29 0 3.896 2.164 3.896 4.977v6.605zM5.337 7.433a1.805 1.805 0 110-3.61 1.805 1.805 0 010 3.61zM6.956 20.452H3.718V9h3.238v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
