import React from "react";
import Button from "../../Button";

const AboutSection = () => {
  return (
    <div className="about">
      <div className="about__content">
        <div className="inner-container">
          <h2 className="title">Test assignment for front-end developer</h2>
          <p className="about__content-text">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <Button text="Sign up" />
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
