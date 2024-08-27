import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Blog.css";
const Blog = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-black sm:px-6 md:px-10" id="font">
      <div className="container mx-auto py-20">
        <div className="flex justify-between items-center">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-white pb-20"
          >
            <p className="xl:text-3xl text-emerald-400 text-xl font-bold pb-5">
              MY BLOG
            </p>
            <p className="text-4xl font-bold ">
              Unlocking the potential of your
            </p>
            <p className="text-4xl font-bold ">personal brand</p>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <button className="hidden sm:inline-block p-2 px-4 sm:p-3 sm:px-6 md:p-3 md:px-8 lg:text-xl text-lg bg-emerald-400 hover:bg-emerald-500 hover:text-white">
              More Blog +
            </button>
          </div>
        </div>
        <div className="articles sm:px-0">
          <article>
            <figure>
              <img
                src="https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703721600&semt=ais"
                alt="Lavender Fields"
              />
            </figure>
            <div className="article-preview">
              <h2>Lavender Fields</h2>
              <p className="text-white pb-4">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Praesent in mauris eu tortor porttitor accumsan.
              </p>
              {/* <!-- button --> */}
              <span className="background">
                <button className="py-2 px-4 md:p-2 md:px-8 bg-emerald-400 hover:bg-emerald-500 hover:text-white">
                  Submit now
                </button>
              </span>
            </div>
          </article>
          <article>
            <figure>
              <img
                src="https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703721600&semt=ais"
                alt="Snowy Mountains"
              />
            </figure>
            <div className="article-preview">
              <h2>Snowy Mountains</h2>
              <p className="text-white pb-4">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Praesent in mauris eu tortor porttitor accumsan.
              </p>
              {/* <!-- button --> */}
              <span className="background">
                <button className="py-2 px-4 md:p-2 md:px-8 bg-emerald-400 hover:bg-emerald-500 hover:text-white">
                  Submit now
                </button>
              </span>
            </div>
          </article>
          <article>
            <figure>
              <img
                src="https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703721600&semt=ais"
                alt="Wooden Bridge"
              />
            </figure>
            <div className="article-preview">
              <h2>Wooden Bridge</h2>
              <p className="text-white pb-4">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Praesent in mauris eu tortor porttitor accumsan.
              </p>
              {/* <!-- button --> */}
              <span className="background">
                <button className="py-2 px-4 md:p-2 md:px-8 bg-emerald-400 hover:bg-emerald-500 hover:text-white">
                  Submit now
                </button>
              </span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
