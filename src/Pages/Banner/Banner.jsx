import  { useEffect } from "react";
import "./Banner.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg sm:px-6 md:px-10" id="font">
      <div className="container xl:ps-20 xl:pb-20 mx-auto flex flex-col-reverse sm:flex-row xl:space-x-40 lg:space-x-40 pt-10 sm:pt-100">
        <div
          data-aos="fade-right"
          id="right-container"
          className="md:my-auto sm:w-1/3 "
        >
          <div className="relative flex justify-center items-center ">
            <img
              src="https://i.ibb.co/VWQw84Q/banner-shape.png"
              alt=""
              className="max-w-full h-auto  "
              id="shape"
            />
            <img
              src="https://i.ibb.co/R3qZDy9/portfolio-img.png"
              alt=""
              className="absolute  max-w-full  xl:w-70% xl:h-2/3  h-64 xl:h-70% top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div
          data-aos="fade-left"
          id="header-left"
          className="py-4 sm:py-20 sm:w-1/2"
        >
          <div id="heading">
            <h1 className="font-bold text-3xl sm:text-6xl items-center tracking-wide text-white pb-4 ">
              <span className="bg-gray-800 ">
                HI, <span className="text-emerald-400 "> I&apos;M RAKIB</span>
              </span>
            </h1>
            <h1 className="font-bold text-3xl sm:text-5xl items-center tracking-wide text-white pb-4">
              CREATIVE
            </h1>
            <div>
              <h1 className="fancy-wipe">
                <span className="text">FRONT END DEVELOPER</span>
                <span className="wipe-in">FRONT END DEVELOPER</span>
              </h1>
            </div>
            <div className="space-x-5 flex py-2">
              <a href="https://www.facebook.com/rakib698/">
                <img
                  src="https://img.icons8.com/color/48/facebook-new.png"
                  alt=""
                  className="w-10 h-10"
                />
              </a>
              <a href="https://www.linkedin.com/in/rakibul-islam-36582620b/">
                {" "}
                <img
                  src="https://img.icons8.com/color/48/linkedin.png"
                  alt=""
                  className="w-10 h-10"
                />
              </a>
              <a href="https://github.com/rakibul12212">
                {" "}
                <img
                  src="https://img.icons8.com/ios-filled/100/github.png"
                  alt=""
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>
          <div id="about-myself">
            <p className="text-slate-300 py-5 w-full">
              I&apos;m a passionate Front End Developer with a mission to create
              delightful and intuitive digital experiences. With a strong
              foundation in developing principles and a keen eye for detail, I
              specialize in translating complex ideas into user-friendly
              interfaces that captivate and engage.
            </p>
          </div>

          <button id="btn" className="pt-5">
            <a href="#" className="flex justify-between">
              <span className="text-emerald-400 hover:text-white border border-emerald-400 hover:bg-emerald-500  px-5 py-4">
                Get In Touch
              </span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
