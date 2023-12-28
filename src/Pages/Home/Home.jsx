import React from "react";
import Banner from "../Banner/Banner";
import RecentPortfolio from "../RecentPortfolio/RecentPortfolio";
import About from "../About/About";
import EducationAndSkill from "../EducationAndSkill/EducationAndSkill";
import Blogs from "../Blogs/Blogs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RecentPortfolio></RecentPortfolio>
      <About></About>
      <EducationAndSkill></EducationAndSkill>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
