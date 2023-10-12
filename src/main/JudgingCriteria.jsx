import React from "react";
import ProjectManagers from "../Assets/project-managers.png";
import { JudgingCriteriaData } from "../components/Data";
import Button from "../components/Button";

const JudgingCriteria = () => {
  return (
    <div className="criteria">
      <div className="project-managers">
        <img src={ProjectManagers} alt="" />
      </div>
      <div className="judging-criteria-text">
        <h2>
          Judging Criteria <br /> <span>Key attributes</span>         
        </h2>
          {JudgingCriteriaData.map((criteria)=>(
            <div key={criteria.id}><p>{criteria.pinkText} <span>{criteria.whiteText}</span> </p></div>            
          ))}
          <Button className="primary read-more" label="Read More"/>
      </div>
    </div>
  );
};

export default JudgingCriteria;
