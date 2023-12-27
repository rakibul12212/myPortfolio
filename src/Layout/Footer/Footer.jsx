import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black">
      <div className="container mx-auto border-2 border-red-500 pb-10">
        <div className="flex flex-col md:flex-row justify-between py-10 ">
          <div className="flex justify-between sm:justify-center space-x-4 items-center mb-6 md:mb-0">
            <div className="bg-green-400 p-5 rounded-full">
              <img
                src="https://wp.shsarker.xyz/zyan/wp-content/themes/zyan/assets/svg/map.svg"
                alt=""
              />
            </div>
            <div className="text-white">
              <p className="font-bold py-3">Address</p>
              <p>2118 Thornridge Cir.</p>
              <p>Syracuse, Connecticut 35624</p>
            </div>
          </div>

          <div className="flex justify-between sm:justify-center space-x-4 items-center mb-6 md:mb-0">
            <div className="bg-green-400 p-5 rounded-full">
              <img
                src="https://wp.shsarker.xyz/zyan/wp-content/themes/zyan/assets/svg/phone.svg"
                alt=""
              />
            </div>
            <div className="text-white">
              <p className="font-bold py-3">Lets talk me</p>
              <p>+888 01795400372</p>
            </div>
          </div>

          <div className="flex justify-between sm:justify-center space-x-4 items-center">
            <div className="bg-green-400 p-5 rounded-full">
              <img
                src="https://wp.shsarker.xyz/zyan/wp-content/themes/zyan/assets/svg/envelope.svg"
                alt=""
              />
            </div>
            <div className="text-white">
              <p className="font-bold py-3">Send us email</p>
              <p>rakibulislamr83@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-white mb-6 md:mb-0">
            <p>&copy;{currentYear} | All Rights Reserved</p>
          </div>
          <div className="text-white flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Sitemap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
