import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto  py-10 border-2 border-red-500">
        <div className=" grid sm:grid-rows-2 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2  items-center">
          <div>
            <div className="py-5">
              <p className="text-6xl font-bold">Design</p>
              <p className="text-4xl font-bold">and</p>
              <p className="text-5xl font-bold">Innovation</p>
            </div>
            <p className="w-2/3 text-gray-400">
              I’m a Frontend Web Developer(MERN).I complete my B. Sc degree from
              Daffodil Internation University dept. CSE. I have been learning
              web development for a year & still learning. As aMERN developer,
              I’m able to design & develop a full stack website.My aim to be a
              senior Frontend Web Developer in the next 2 years & also try to
              update myself with new technologies.
            </p>
          </div>
          <div className="contact-form bg-gray-950 p-20">
            <p className="heading text-3xl pb-5">GET TOUCH ME?</p>
            <p className="pb-5 text-gray-400">
              For your car we will do everything advice design in us repairs and
              maintenance We are the some preferred.
            </p>
            <div>
              <form id="contactForm">
                <div className="py-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full h-5 p-5 bg-transparent border-2  border-emerald-500"
                  />
                </div>
                <div className="">
                  <input
                    type="email"
                    placeholder="email"
                    className="w-full h-5 p-5 bg-transparent border-2  border-emerald-500"
                  />
                </div>
                <div className="py-2">
                  <input
                    type="textarea"
                    placeholder="massage"
                    className="w-full h-36 pb-20 pl-5 bg-transparent border-2  border-emerald-500"
                  />
                </div>
              </form>
              <button className="p-3 px-16 bg-emerald-500  hover:bg-emerald-500 hover:text-white ">
                Submit now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
