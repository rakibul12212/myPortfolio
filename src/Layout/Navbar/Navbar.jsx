// import { useState } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className="bg-black sticky top-0 px-10">
//       <div className="container mx-auto">
//         <nav>
//           <div className="text-black flex flex-col-2 lg:flex-row justify-between items-center sticky top-0  ">
//             <div className="flex justify-between ">
//               {/* Logo */}
//               <div className="py-2">
//                 <a href="/">
//                   <h1 className=" font-semibold text-emerald-400 text-3xl px-4 py-2 border-2 border-emerald-400 rounded-full  ">R</h1>
//                 </a>
//               </div>
//               {/* Mobile Menu Toggle Button */}
//               <div className="md:hidden flex ps-40 items-center">
//                 <button
//                   onClick={toggleMobileMenu}
//                   className="text-black focus:outline-none"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     className="h-8 w-8 "
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16M4 18h16"
//                       color="white"
//                     ></path>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//             {/* Desktop Navigation Links */}
//             <div className="hidden md:flex space-x-2 ">
//               <a
//                 href="/home"
//                 className="p-2 text-gray-500 text-large font-semibold hover:text-green-400 "
//                 aria-current="page"
//               >
//                 HOME
//               </a>
//               <a
//                 href="#"
//                 className="p-2 text-gray-500 text-large font-semibold hover:text-green-400 "
//               >
//                 ABOUT
//               </a>
//               <a
//                  href="#"
//                 className="p-2 text-gray-500 text-large font-semibold hover:text-green-400 "
//               >
//                 PROJECTS
//               </a>
//               <a
//                  href="#"
//                 className="p-2 text-gray-500 text-large font-semibold hover:text-green-400 "
//               >
//                 BLOGS
//               </a>
//               <a
//                 href="#"
//                 className="p-2 text-gray-500 text-large font-semibold hover:text-green-400 "
//               >
//                 CONTACT
//               </a>
//             </div>
//           </div>

//           {/* Mobile Navigation Menu (Initially Hidden) */}
//           <div
//             className={`md:hidden ${
//               isMobileMenuOpen ? "block" : "hidden"
//             } bg-gray-900`}
//           >
//             <div className="container  mx-auto p-4 space-y-4">
//               <a href="#" className="text-white hover:text-emerald-400 block">
//                 HOME
//               </a>
//               <a href="#" className="text-white hover:text-emerald-400 block">
//                 ABOUT
//               </a>
//               <a href="#" className="text-white hover:text-emerald-400 block">
//                 PROJECTS
//               </a>
//               <a href="#" className="text-white hover:text-emerald-400 block">
//                 BLOG
//               </a>
//               <a href="#" className="text-white hover:text-emerald-400 block">
//                 CONTACT
//               </a>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

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
      <NavbarContent className="flex items-center justify-between  py-2">
        
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
      
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "black" : index === menuItems.length - 1 ? "red" : "green"
              }
              className="w-half"
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
