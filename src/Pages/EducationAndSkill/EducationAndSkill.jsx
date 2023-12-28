import React from "react";
import "./EducationAndSkill.css";

const EducationAndSkill = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto border-2 border-red-500 py-10">
        <div className="text-white text-center">
          <p className="xl:text-3xl text-emerald-400 text-xl font-bold pb-5">
            EDUCATION & SKILL
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 xl:gap-16 py-10">
          <div className="w-full ">
            <button className="border border-emerald-400  px-4 py-3 ">
              <span className="teext-emerald-400">Science 2022</span>
            </button>
            <p className="py-5 text-3xl font-bold">Web Developer</p>
            <p className="text-gray-400">
              I joined programming hero course in 2020. After completing that
              course, now I&apos;m working for their Level-2.
            </p>
          </div>

          <div className="w-full ">
            <button className="border border-emerald-400  px-4 py-3 ">
              <span>2019 - 2023</span>
            </button>
            <p className="py-5 text-3xl font-bold">B.Sc in CSE</p>
            <p className="text-gray-400">
              I admitted to Daffodil International University in 2019 and
              completed my B.Sc program in 2023. It is located in Birulia,
              Savar, Dhaka-1216.
            </p>
          </div>

          <div className="w-full ">
            <button className="border border-emerald-400  px-4 py-3 ">
              <span>2016 - 2018</span>
            </button>
            <p className="py-5 text-3xl font-bold">
              Higher Secondary Certificate
            </p>
            <p className="text-gray-400">
              After SSC, I admitted to Sreemongle Government College in 2016 and
              completed my HSC program in 2018. It is located in Sreemongle,
              Moulvibazar, Sylhet.
            </p>
          </div>

          <div className="w-full ">
            <button className="border border-emerald-400  px-4 py-3 ">
              <span>2014 - 2016</span>
            </button>
            <p className="py-5 text-3xl font-bold">
              Secondary Secondary Certificate
            </p>
            <p className="text-gray-400">
              I was a student of The Buds Residential Model School And College
              in 2014 and completed my SSC program in 2016. It is located in
              Sreemongle, Moulvibazar, Sylhet.
            </p>
          </div>
        </div>
        {/* /////// */}
        <div className="py-20">
          <div className="skill grid grid-cols-2 gap-4">
            <div className="pb-5">
              <p className="bg-gray-900 p-3">HTML5</p>
              <span className="bar">
                <span className="html"></span>
              </span>
            </div>
            <div className="pb-5">
              <p className="bg-gray-900 p-3">CSS3</p>
              <span className="bar">
                <span className="css"></span>
              </span>
            </div>
            <div className="pb-5">
              <p className="bg-gray-900 p-3">JAVASCRIPT</p>
              <span className="bar">
                <span className="js"></span>
              </span>
            </div>
            <div className="pb-5">
              <p className="bg-gray-900 p-3">REACT</p>
              <span className="bar">
                <span className="react"></span>
              </span>
            </div>
            <div className="pb-5">
              <p className="bg-gray-900 p-3">GIT</p>
              <span className="bar">
                <span className="git"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAndSkill;
