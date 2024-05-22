import React from "react";
import "./RecentPortfolio.css";
const RecentPortfolio = () => {
  return (
    <div className="bg-black px-10">
      <div className="container mx-auto py-20">
        <div className="text-white ">
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
              <a href="https://exquisite-basbousa-e447ab.netlify.app/">
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
              <a href="https://playful-muffin-25454c.netlify.app/">
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
              src="https://i.ibb.co/KDHNMJK/Screenshot-10.png"
              alt="Card Image"
            />
            <div className="card-text">
              <p className="pb-2 md:pb-5 font-bold">Toy Land</p>
              <a href="https://toy-shop-827ff.web.app">
                <button className="border-2 border-emerald-400 hover:bg-emerald-400 p-2 w-full md:w-36">
                  Live Site
                </button>
              </a>
              <br />
              <a href="https://github.com/rakibul12212/toy-Land-client">
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
