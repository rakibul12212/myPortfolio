import React from "react";

const About = () => {
  const DownloadCV = () => {
    const cvUrl = "/rakibResume.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "rakibResume.pdf";

    link.target = "_blank";
    link.rel = "noopener noreferrer";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="bg-black px-10">
      <div className="container mx-auto space-x-10 py-10 lg:py-20 flex flex-col lg:flex-row justify-between items-center">
        <div className="text-white lg:w-1/2">
          <p className="xl:text-3xl text-emerald-400 text-xl font-bold pb-5">
            ABOUT ME
          </p>
          <p className="text-4xl font-bold pb-2">Transforming visions into</p>
          <p className="text-4xl font-bold">exceptional portfolios.</p>
          <p className="text-slate-300 py-5 lg:py-10">
          I enjoy being up to date on the latest technological trends. Recently I completed web development course from Programming Hero. Now I’m focusing on learning the newest technologies like TypeScript , Redux , Next Js. I`m putting a lot of effort into learning these new technologies since I really think that one should never stop growing. My goal is to stay ahead of the game and help shape the future of technology.
          </p>
          <button
            id="btn"
            onClick={DownloadCV}
            className="bg-emerald-400 hover:bg-emerald-500 px-5 py-4 "
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
        <div id="about-img" className="bg-emerald-400 rounded-2xl relative lg:w-1/2">
          <img
            src="https://i.ibb.co/C0whtzK/photo-2023-12-28-06-35-45-removebg-preview-1-1.png"
            alt=""
            className="w-full lg:mt-2 lg:mr-2 relative lg:top-6 lg:right-6 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
