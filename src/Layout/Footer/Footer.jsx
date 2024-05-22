import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black px-10">
      <div className="container mx-auto pb-10">
        <div className="flex flex-col md:flex-row justify-between py-10 ">
          <div className="flex justify-between sm:justify-center space-x-2 items-center mb-6 md:mb-0">
            <div className="bg-emerald-400 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

            </div>
            <div className="text-white">
              <p className="font-bold py-1">Address</p>
              <p>Mohammadpur,Dhaka</p>
              
            </div>
          </div>

          <div className="flex justify-between sm:justify-center space-x-2 items-center mb-6 md:mb-0">
            <div className="bg-emerald-400 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

            </div>
            <div className="text-white">
              <p className="font-bold py-1">Lets talk me</p>
              <p>+888 01795400372</p>
            </div>
          </div>

          <div className="flex justify-between sm:justify-center space-x-2 items-center">
            <div className="bg-emerald-400 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path s d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

            </div>
            <div className="text-white">
              <p className="font-bold py-1">Send us email</p>
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
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
