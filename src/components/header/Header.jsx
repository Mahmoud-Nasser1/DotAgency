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
            end={path === "/"}
            className={({ isActive }) =>
              `relative inline-flex w-fit items-center gap-2 text-sm font-medium tracking-wide uppercase
             transition-colors duration-300
             ${
               isActive
                 ? "text-primary-foreground" 
                 : "text-primary-foreground/80" 
             }
             hover:text-primary-foreground      /* لون عند hover */
             after:content-[''] after:absolute after:left-0 after:-bottom-1
             after:h-[2px] after:bg-primary-foreground
             after:w-0 hover:after:w-full
             after:transition-all after:duration-300`
            }
          >
            <Icon size={16} />
            <span>{name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="fixed top-0 left-0 right-0 z-10 w-full bg-primary/95 backdrop-blur-md text-white">
      <div className="container mx-auto flex items-center justify-between px-6">
        <Typography as="a" href="#" className="cursor-pointer font-medium">
          <img src="/logo.png" className="h-20 w-32" />
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
      <Collapse
        open={openNav}
        className="lg:hidden bg-primary/95 backdrop-blur-md"
      >
        <div className="container mx-auto py-4 px-8">{navList}</div>
      </Collapse>
    </div>
  );
}
