import React from "react";
import "./Navbar.css";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "About", "Projects", "Blogs", "Contact"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-gray-900 " id="font">
      <NavbarContent className="flex items-center justify-between py-2">
        <NavbarBrand>
          <a href="#">
            <div className="hexagon-container">
              <div className="hexagon flex justify-center items-center text-2xl font-bold bg-emerald-400 border-4 border-emerald-600 ">
                <p>R</p>
              </div>
            </div>
          </a>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden px-5 text-white font-bold"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-x-16" justify="end">
        <NavbarItem>
          <Link
            className="text-gray-400 font-medium hover:text-emerald-400 hover:border-b-2 hover:pb-2 hover:border-emerald-400"
            href="#"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href="#"
            className="text-gray-400 font-medium hover:text-emerald-400 hover:border-b-2 hover:pb-2 hover:border-emerald-400"
          >
            Blogs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-gray-400 font-medium hover:text-emerald-400 hover:border-b-2 hover:pb-2 hover:border-emerald-400"
            href="#"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-gray-400 font-medium hover:text-emerald-400 hover:border-b-2 hover:pb-2 hover:border-emerald-400"
            href="#"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu
        className="bg-black
      "
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              // color={
              //   index === 2 ? "black" : index === menuItems.length -1 ? "red" : "green"
              // }
              className="w-full hover:text-emerald-700 text-emerald-500 font-medium "
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
