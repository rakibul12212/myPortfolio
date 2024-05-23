
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "About",
    "Projects",
    "Blogs",
    "Contact",
    
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-gray-900">
      <NavbarContent className="flex items-center justify-between py-2">
        
        <NavbarBrand >
          
        <a href="/" className=" font-semibold text-emerald-400 text-3xl px-4 py-2 border-2 border-emerald-400 rounded-full  ">R</a>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden bg-emerald-400 px-5   "
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link className="text-gray-400 font-medium hover:text-emerald-400" href="#">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" className="text-gray-400 font-medium hover:text-emerald-400">
            Blogs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-400 font-medium hover:text-emerald-400" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-400 font-medium hover:text-emerald-400" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarMenu className="bg-gray-700">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              // color={
              //   index === 2 ? "black" : index === menuItems.length -1 ? "red" : "green"
              // }
              className="w-full hover:text-emerald-700 text-emerald-500 font-medium"
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
