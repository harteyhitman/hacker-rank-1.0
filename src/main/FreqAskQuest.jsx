import React from "react";
import { FAQ } from "../components/Data";
import ManAskingQuest from "../Assets/man-asking-questions.png";
import QuestionsMark from "../Assets/questions-mark.png";

const FreqAskQuest = () => {
  return (
    <div id="faq-container">
      <div className="faq-texts">
        <h2>
          Frequently Ask <br /> <span>Question</span>
        </h2>
        <p>
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
        {FAQ.map((question) => (
          <div key={question.id} className="quetions">
            {question.faqText} <span>{question.plus}</span>
          </div>
        ))}
      </div>
      
      <img
        className="question-mark small-mark right-mark"
        src={QuestionsMark}
        alt=""
      />
      <img className="question-mark middle-mark" src={QuestionsMark} alt="" />
      <img
        className="question-mark small-mark left-mark"
        src={QuestionsMark}
        alt=""
      />

      <div className="man-asking-questions">
        <img src={ManAskingQuest} alt="" />
      </div>
    </div>
  );
};

export default FreqAskQuest;
