import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="bg-black text-white px-10">
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 items-center">
          <div className="contact-form bg-gray-950 p-5">
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
              <button className="p-3 px-5 bg-emerald-400  hover:bg-emerald-500 hover:text-white ">
                Submit now
              </button>
            </div>
          </div>
          <div>
            <div>
              <p className="text-8xl font-bold">Design</p>
              <p className="text-6xl font-bold">and</p>
              <p className="text-5xl font-bold">Innovation</p>
            </div>
            <p className="w-full text-xl text-gray-400 py-4">
            "My goal is to craft captivating frontend designs that not only captivate users but also provide seamless navigation and intuitive interaction. I aim to blend creativity with functionality, ensuring every user enjoys a delightful experience while prioritizing accessibility and compatibility across different platforms."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
