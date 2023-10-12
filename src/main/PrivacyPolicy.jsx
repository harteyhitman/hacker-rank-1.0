import React from "react";
import ManLock from "../Assets/lock-padlock.png";
import Button from "../components/Button";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-header">
        <h2>
          Privacy Policy and <br /> <span>Terms</span>
        </h2>
        <p>Last updated on September 12, 2023</p>
        <p>
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>
      </div>

      <div className="policy-and-image">
        <div className="policy-texts">
          <p>
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <h3>
            Licensing Policy <br />
            <span>Here are terms of our Standard License:</span>
          </h3>
          <p>
            The Standard License grants you a non-exclusive right to navigate
            and register for our event
          </p>
          <p>
            You are licensed to use the item available at any free source sites,
            for your project developement
          </p>
          <Button className="primary read-more" label="Read More" />
        </div>
        <div className="policy-image">
          <img src={ManLock} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
