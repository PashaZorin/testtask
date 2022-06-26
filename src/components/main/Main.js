import React from "react";
import AboutSection from "./aboutSection/AboutSection";
import GetSection from "./getSection/GetSection";
import PostSection from "./postsSection/PostSection";

const Main = () => {
  return (
    <main className="main">
      <div className="outer-container">
        <AboutSection />
        <GetSection />
        <PostSection />
      </div>
    </main>
  );
};

export default Main;
