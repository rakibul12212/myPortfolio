import React from "react";
import Banner from "../Banner/Banner";
import RecentPortfolio from "../RecentPortfolio/RecentPortfolio";
import About from "../About/About";
import EducationAndSkill from "../EducationAndSkill/EducationAndSkill";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RecentPortfolio></RecentPortfolio>
      <About></About>
      <EducationAndSkill></EducationAndSkill>
    </div>
  );
};

export default Home;
