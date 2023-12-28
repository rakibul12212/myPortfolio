// import { useState } from "react";
// import { Button, Drawer } from "antd";
// import { DownOutlined } from "@ant-design/icons";
// import { Dropdown, Space } from "antd";

// const items = [
//   {
//     key: "1",
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="#">
//         BLOG
//       </a>
//     ),
//   },
//   {
//     key: "2",
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="#">
//         BLOG DETAILS
//       </a>
//     ),
//   },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const showDrawer = () => {
//     setOpen(true);
//   };
//   const onClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div className="bg">
//       <div className=" container mx-auto">
//         <header className="text-white  flex justify-between items-center  sticky top-0">
//           <div className="flex items-center ">
//             <h1 className="text-6xl font-extrabold font-semibold text-black bg-emerald-400 px-8 py-3">
//               R
//             </h1>
//             <h1 className="text-3xl ps-4">Rakib</h1>
//           </div>
//           <nav className="flex space-x-5 px-20 ">
//             <a
//               className="p-2 text-text-white text-large font-semibold hover:text-green-400 "
//               href="/"
//             >
//               HOME
//             </a>
//             <a
//               className="p-2 text-text-white text-large font-semibold hover:text-green-400 "
//               href="/about"
//             >
//               ABOUT
//             </a>
//             <a
//               className="p-2 text-text-white text-large font-semibold hover:text-green-400 "
//               href="/latest-ai-news"
//             >
//               SERVICE
//             </a>
//             <a
//               className="p-2 text-text-white text-large font-semibold hover:text-green-400 "
//               href="/latest-ai-news"
//             >
//               PROJECTS
//             </a>
//             <Dropdown menu={{ items }}>
//               <a
//                 onClick={(e) => e.preventDefault()}
//                 className="p-2 text-white text-large font-semibold hover:text-green-400 "
//               >
//                 <Space>
//                   BLOGS
//                   <DownOutlined />
//                 </Space>
//               </a>
//             </Dropdown>
//             <a
//               className="p-2 text-white text-large font-semibold hover:text-green-400 "
//               href="/latest-ai-news"
//             >
//               CONTACT
//             </a>
//           </nav>
//           <Button
//             onClick={showDrawer}
//             className="bg-emerald-400 py-10 px-6 rounded-none flex items-center"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke-width="2"
//               stroke="currentColor"
//               className="w-10 h-10"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//               />
//             </svg>
//           </Button>
//           <Drawer
//             title="RAKIB'S PORTFOLIO"
//             placement="right"
//             onClose={onClose}
//             open={open}
//             style={{ backgroundColor: "gray" }}
//           >
//             <div>
//               <p className="font-bold text-xl text-gray-800">ABOUT ME</p>
//               <p className="text-large py-5 text-gray-300">
//                 I’m a Frontend Web Developer(MERN).I complete my B. Sc degree
//                 from Daffodil International University dept. CSE. I have been
//                 learning web development for a year & still learning. As aMERN
//                 developer, I’m able to design & develop a full stack website.My
//                 aim to be a senior Frontend Web Developer in the next 2 years &
//                 also try to update myself with new technologies.
//               </p>
//             </div>
//             <div>
//               <p className="font-bold text-xl py-5 text-gray-800">
//                 GET IN TOUCH
//               </p>
//               <form id="contactForm">
//                 <div className="py-2">
//                   <input
//                     type="text"
//                     placeholder="Name"
//                     className="w-full h-5 p-5 bg-transparent border-2  border-emerald-500"
//                   />
//                 </div>
//                 <div className="">
//                   <input
//                     type="email"
//                     placeholder="email"
//                     className="w-full h-5 p-5 bg-transparent border-2  border-emerald-500"
//                   />
//                 </div>
//                 <div className="py-2">
//                   <input
//                     type="textarea"
//                     placeholder="massage"
//                     className="w-full h-36 pb-20 pl-5 bg-transparent border-2  border-emerald-500"
//                   />
//                 </div>
//               </form>
//               <button className="p-3 px-16 bg-emerald-500  hover:bg-emerald-500 hover:text-white ">
//                 Submit now
//               </button>
//             </div>
//           </Drawer>
//         </header>
//       </div>
//     </div>
//   );
// };
// export default Navbar;
import { useState } from "react";
import { Button } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        BLOG
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        BLOG DETAILS
      </a>
    ),
  },
];

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <div className="bg">
      <div className="container mx-auto">
        <header className="text-white flex flex-col-2 lg:flex-row justify-between items-center sticky top-0">
          <div className="flex items-center">
            <h1 className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold font-semibold text-black bg-emerald-400 px-5 py-3">
              R
            </h1>
            <h1 className="text-3xl ps-4">Rakib</h1>
          </div>
          <nav
            className={`${
              openMobileMenu ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row lg:space-x-5 px-0 lg:px-20 mt-4 lg:mt-0`}
          >
            <a
              className="p-2 text-text-white text-large font-semibold hover:text-green-400 "
              href="/"
            >
              HOME
            </a>
            <a
              className="p-2 text-text-white text-large font-semibold hover:text-green-400 "
              href="/about"
            >
              ABOUT
            </a>
            <a
              className="p-2 text-text-white text-large font-semibold hover:text-green-400 "
              href="/latest-ai-news"
            >
              SERVICE
            </a>
            <a
              className="p-2 text-text-white text-large font-semibold hover:text-green-400 "
              href="/latest-ai-news"
            >
              PROJECTS
            </a>
            <Dropdown menu={{ items }}>
              <a
                onClick={(e) => e.preventDefault()}
                className="p-2 text-white text-large font-semibold hover:text-green-400 "
              >
                <Space>
                  BLOGS
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <a
              className="p-2 text-white text-large font-semibold hover:text-green-400 "
              href="/latest-ai-news"
            >
              CONTACT
            </a>
          </nav>
          <div className="lg:hidden">
            <Button
              onClick={toggleMobileMenu}
              className="bg-emerald-400 py-10 px-6 rounded-none flex  items-center"
            >
              <MenuOutlined className="w-6 h-6" />
            </Button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
