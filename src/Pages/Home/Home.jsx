import React from "react";
import Banner from "../Banner/Banner";
import RecentPortfolio from "../RecentPortfolio/RecentPortfolio";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RecentPortfolio></RecentPortfolio>
      <About></About>
    </div>
  );
};

export default Home;
