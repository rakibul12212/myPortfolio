import React from "react";
import Banner from "../Banner/Banner";
import RecentPortfolio from "../RecentPortfolio/RecentPortfolio";
import About from "../About/About";
import EducationAndSkill from "../EducationAndSkill/EducationAndSkill";
import Contact from "../Contact/Contact";
import Blog from "../Blog/Blog";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Contact></Contact>
      <EducationAndSkill></EducationAndSkill>
      <RecentPortfolio></RecentPortfolio>
      <Blog></Blog>
    </div>
  );
};

export default Home;
