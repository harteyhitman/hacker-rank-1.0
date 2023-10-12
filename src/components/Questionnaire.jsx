import React, { useState } from "react";
import SuccessChecked from "../Assets/green-checked.png";
import SuccesfulMan from "../Assets/successful-man.png";
import { useNavigate } from "react-router-dom";

const Questionnaire = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <form className="questionnaire-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" /> <br /> <br />
        <input type="text" placeholder=" Mail" /> <br /> <br />
        <textarea name="message" id="" cols="40" rows="10">
          Message
        </textarea>
        <div className="questionaire-btn">
          <button type="submit">Submit</button>
        </div>
      </form>

      {isModalOpen && (
        <div className="success-modal">
          <div className="modal-content-questionaire">
            <div className="succesful-img">
              <img className="single2" src={SuccessChecked} alt="" />
              <img className="single1" src={SuccesfulMan} alt="" />
            </div>
            <div className="modal-texts">
              <h2>
                Congratulations <br /> you have successfully Registered!
              </h2>
              <p>
                Yes, it was easy and you did it! <br /> check your mail box for
                next step
              </p>
            </div>
            <div onClick={handleClick}>
              <button className="success-btn" onClick={handleCloseModal}>
              Welcome
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
