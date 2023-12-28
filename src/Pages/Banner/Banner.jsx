import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    // <div className="bg">
    //   <div className="container mx-auto border-2 border-red-500 flex space-x-10 pt-100">
    //     <div id="header-left" className=" py-8 sm:py-20 ">
    //       <div id="heading">
    //         <h1 className="font-bold text-3xl sm:text-6xl items-center tracking-wide text-white pb-4 ">
    //           <span className="bg-gray-800">HI,I'M RAKIB</span>
    //         </h1>
    //         <h1 className="font-bold text-3xl sm:text-5xl items-center tracking-wide text-white pb-4">
    //           CREATIVE
    //         </h1>
    //         <h1 className="font-bold text-2xl sm:text-3xl items-center tracking-wide text-white ">
    //           FRONT END DEVELOPER
    //         </h1>
    //       </div>
    //       <div id="about myself">
    //         <p className="text-slate-300 py-10 w-3/4">
    //           I'm a passionate Front End Developer with a mission to create
    //           delightful and intuitive digital experiences. With a strong
    //           foundation in developing principles and a keen eye for detail, I
    //           specialize in translating complex ideas into user-friendly
    //           interfaces that captivate and engage.
    //         </p>
    //       </div>

    //       <button id="btn" className="bg-green-400 px-5 py-4 ">
    //         <a href="#" className="flex justify-between">
    //           <span>Download CV</span>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke-width="1.5"
    //             stroke="currentColor"
    //             className="w-6 h-6"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
    //             />
    //           </svg>
    //         </a>
    //       </button>
    //     </div>
    //     <div id="right container" className="md:my-auto">
    //       <div className="relative flex justify-center items-center">
    //         <img
    //           src="https://wp.shsarker.xyz/zyan/wp-content/themes/zyan/assets/img/shapes/banner_shape.png"
    //           alt=""
    //           className="max-w-full h-auto"
    //         />
    //         <img
    //           src="https://i.ibb.co/m5Ccg9d/rakib.png"
    //           alt=""
    //           className="absolute border-b-1  border-green-400 max-w-full xl:w-full xl:h-2/3 xl:pb-10 h-64 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="bg">
      <div className="container xl:ps-20 xl:pb-20 mx-auto border-2 border-red-500 flex flex-col-reverse sm:flex-row xl:space-x-40 lg:space-x-40 pt-10 sm:pt-100">
        <div id="right-container" className="md:my-auto sm:w-1/3">
          <div className="relative flex justify-center items-center">
            <img
              src="https://wp.shsarker.xyz/zyan/wp-content/themes/zyan/assets/img/shapes/banner_shape.png"
              alt=""
              className="max-w-full h-auto"
            />
            <img
              src="https://i.ibb.co/R3qZDy9/portfolio-img.png"
              alt=""
              className="absolute border-b-1 border-green-400 max-w-full xl:w-70% xl:h-2/3  h-64 xl:h-70% top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div id="header-left" className="py-8 sm:py-20 sm:w-1/2">
          <div id="heading">
            <h1 className="font-bold text-3xl sm:text-6xl items-center tracking-wide text-white pb-4 ">
              <span className="bg-gray-800">HI, I'M RAKIB</span>
            </h1>
            <h1 className="font-bold text-3xl sm:text-5xl items-center tracking-wide text-white pb-4">
              CREATIVE
            </h1>
            <h1 className="font-bold text-2xl sm:text-3xl items-center tracking-wide text-white ">
              FRONT END DEVELOPER
            </h1>
          </div>
          <div id="about-myself">
            <p className="text-slate-300 py-10 w-full">
              I'm a passionate Front End Developer with a mission to create
              delightful and intuitive digital experiences. With a strong
              foundation in developing principles and a keen eye for detail, I
              specialize in translating complex ideas into user-friendly
              interfaces that captivate and engage.
            </p>
          </div>

          <button
            id="btn"
            className="bg-emerald-400 hover:bg-emerald-500 hover:bg-emerald-500 px-5 py-4 "
          >
            <a href="#" className="flex justify-between">
              <span>Download CV</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
