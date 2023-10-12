import React from "react";
import TechWoman from '../Assets/tech-woman.png'
const RulesAndGuildelines = () => {
  return (
    <div className="rules-and-guidlines-container">
      <div className="rules-guidelines">
        <h2>
          Rules and <br /> 
          <span>Guidelines</span>
          
        </h2>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <div className="tech-woman">
        <img src={TechWoman} alt="" />
      </div>
    </div>
  );
};

export default RulesAndGuildelines;
