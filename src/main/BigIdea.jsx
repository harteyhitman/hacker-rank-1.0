import React from "react";
import BigIdeaImg from "../Assets/the big idea 1.png";
import PurpleStar from "../Assets/purple-star.png";
import SpiralArrow from "../Assets/spiral-arrow.png";

const BigIdea = () => {
  return (
    <div className="bulb-container">
      <div className="bulb">
        <img className="bulb-1" src={BigIdeaImg} alt="" />
        <img className="bulb-2" src={SpiralArrow} alt="" />
      </div>
      <div className="bulb-text">
        
        <h3>
          Introduction to getlinked  <br />
          <span> tech Hackathon 1.0 <img src={PurpleStar} alt="" /></span> 
        </h3>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </div>
  );
};

export default BigIdea;
