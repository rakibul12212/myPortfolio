import React from "react";
import "./Banner.css";

const Banner = () => {
  const DownloadCV = () => {
    const cvUrl = "/md-rakibul-islam-Resume.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "md-rakibul-islam-Resume.pdf";

    link.target = "_blank";
    link.rel = "noopener noreferrer";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="bg px-10">
      <div className="container xl:ps-20 xl:pb-20 mx-auto flex flex-col-reverse sm:flex-row xl:space-x-40 lg:space-x-40 pt-10 sm:pt-100">
        <div id="right-container" className="md:my-auto sm:w-1/3 ">
          <div className="relative flex justify-center items-center">
            <img
              src="https://i.ibb.co/VWQw84Q/banner-shape.png"
              alt=""
              className="max-w-full h-auto  "
              id="shape"
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
              <span className="bg-gray-800">HI, I&apos;M RAKIB</span>
            </h1>
            <h1 className="font-bold text-3xl sm:text-5xl items-center tracking-wide text-white pb-4">
              CREATIVE
            </h1>
            <h2
              className="title font-bold text-2xl sm:text-3xl items-center tracking-wide text-white "
              data-text="FRONT END DEVELOPER"
            >
              FRONT END DEVELOPER
            </h2>
            <div className="space-x-5 flex py-2">
              <a href="https://www.facebook.com/rakib698/">
                <img
                  src="https://dwglogo.com/wp-content/uploads/2016/06/facebook_emblem.png"
                  alt=""
                  className="w-10 h-10"
                />
              </a>
              <a href="https://www.linkedin.com/in/rakibul-islam-36582620b/">
                {" "}
                <img
                  src="https://pngimg.com/d/linkedIn_PNG17.png"
                  alt=""
                  className="w-10 h-10"
                />
              </a>
              <a href="https://github.com/rakibul12212">
                {" "}
                <img
                  src="https://assets-global.website-files.com/61d1b6e84887f53fef1dcdf2/631b45e07d98cfb364e5951f_github-white.png"
                  alt=""
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>
          <div id="about-myself">
            <p className="text-slate-300 py-10 w-full">
              I&apos;m a passionate Front End Developer with a mission to create
              delightful and intuitive digital experiences. With a strong
              foundation in developing principles and a keen eye for detail, I
              specialize in translating complex ideas into user-friendly
              interfaces that captivate and engage.
            </p>
          </div>

          <button
            id="btn"
            className="bg-emerald-400 hover:bg-emerald-500 hover:bg-emerald-500 px-5 py-4 "
            onClick={DownloadCV}
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
