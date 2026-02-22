import { NavLink } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Home, User, Briefcase, Layers, Users, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Services", path: "/services", icon: Layers },
    { name: "Our Work", path: "/work", icon: Briefcase },
    { name: "Clients", path: "/clients", icon: Users },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const navList = (
    <ul className="flex flex-col lg:flex-row gap-6">
      {navItems.map(({ name, path, icon: Icon }) => (
        <li key={path}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-2 text-xs uppercase tracking-[0.2em]
               transition-colors duration-300
               hover:text-white
               ${isActive ? "text-white" : "text-gray-400"}`
            }
          >
            <Icon size={16} />
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-10 w-full bg-black text-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Typography as="a" href="#" className="cursor-pointer font-medium">
          <img src="/IMG2.png" className="h-24 w-44" />
        </Typography>

        {/* Nav List Desktop */}
        <div className="hidden lg:block">{navList}</div>

        {/* Hamburger Icon */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      {/* Mobile Menu using Collapse */}
      <Collapse open={openNav} className="lg:hidden bg-black">
        <div className="container mx-auto py-4 px-8">{navList}</div>
      </Collapse>
    </div>
  );
}
