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
              href="#"
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
              href="#"
            >
              SERVICE
            </a>
            <a
              className="p-2 text-text-white text-large font-semibold hover:text-green-400 "
              href="#"
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
              href="#"
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
