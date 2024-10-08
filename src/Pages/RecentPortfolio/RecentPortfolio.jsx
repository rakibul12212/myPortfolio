import "./RecentPortfolio.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const RecentPortfolio = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-black sm:px-6 md:px-10">
      <div className="container mx-auto py-20">
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          className="text-white "
        >
          <p className=" xl:text-3xl text-emerald-400 text-xl font-bold pb-5">
            MY RECENT PORTFOLIO
          </p>
          <p className="text-4xl font-bold pb-2">Elevate your brand to new</p>
          <p className="text-4xl font-bold">
            heights with our portfolio expertise.
          </p>
        </div>
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 rounded-2xl py-10 md:py-20">
          <div className="card">
            <img
              src="https://i.ibb.co/JcSXvjD/Screenshot-7.png"
              alt="Card Image"
            />
            <div className="card-text">
              <p className="pb-2 md:pb-5 font-bold">Shopcart</p>
              <a href="https://shopcart-red.vercel.app/">
                <button className="border-2 border-green-400 hover:bg-emerald-400 p-2 w-full md:w-36">
                  Live Site
                </button>
              </a>
              <br />
              <a href="https://github.com/rakibul12212/shopcart">
                <button className="border-2 border-emerald-400 hover:bg-green-400 p-2 w-full md:w-36 mt-2 md:mt-0">
                  Details
                </button>
              </a>
            </div>
          </div>

          <div className="card">
            <img
              src="https://i.ibb.co/fpnygPL/Screenshot-9.png"
              alt="Card Image"
            />
            <div className="card-text">
              <p className="pb-2 md:pb-5 font-bold">PlayStorm</p>
              <a href="https://playstorm.vercel.app/">
                <button className="border-2 border-emerald-400 hover:bg-emerald-400 p-2 w-full md:w-36">
                  Live Site
                </button>
              </a>
              <br />
              <a href="https://github.com/rakibul12212/playstorm">
                <button className="border-2 border-emerald-400 hover:bg-emerald-400 p-2 w-full md:w-36 mt-2 md:mt-0">
                  Details
                </button>
              </a>
            </div>
          </div>

          <div className="card">
            <img
              src="https://i.ibb.co/q0HYgZ9/planoroma.png"
              alt="Card Image"
            />
            <div className="card-text">
              <p className="pb-2 md:pb-5 font-bold">Planoroma</p>
              <a href="https://planoroma-client.vercel.app/">
                <button className="border-2 border-emerald-400 hover:bg-emerald-400 p-2 w-full md:w-36">
                  Live Site
                </button>
              </a>
              <br />
              <a href="https://github.com/rakibul12212/planoroma-client">
                <button className="border-2 border-emerald-400 hover:bg-emerald-400 p-2 w-full md:w-36 mt-2 md:mt-0">
                  Details
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="text-white flex justify-center">
          <a href="https://github.com/rakibul12212">
            <button className="border border-emerald-400 hover:bg-emerald-400 p-2 w-36 ">
              See more
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentPortfolio;
