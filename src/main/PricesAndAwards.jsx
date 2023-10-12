import React from "react";
import SilvaMedal from "../Assets/silver_medal 1.png";
import GoldMedal from "../Assets/gold_medal 1.png";
import BronzeMedal from "../Assets/bronze_medal 1.png";
import GoldTrophy from "../Assets/gold-trophy.png";
const PricesAndAwards = () => {
  return (
    <div className="con-price">
       <div className="price-medals">
          <h2>
            Prizes and <br /> <span>Rewards</span>
          </h2>
          <p>
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
    <div className="prices-and-rewards">
      <div className="gold-trophy">
        <img src={GoldTrophy} alt="" />
      </div>
      <div className="prices-highlight">

        <div className="medals-container">
          <div className="medals-boders-contain">
            <img className="medals silva-medal" src={SilvaMedal} alt="" />
            <div className="medals-border medals-silva">
              <div className="medals-and-prices">
              <div className="grade">2nd</div>
              <div className="runner">Runner</div>
              <div className="money">N300,000</div>
              </div>
            </div>
          </div>
          <div className="medals-boders-contain">
            <img className="medals gold-medal" src={GoldMedal} alt="" />
            <div className="medals-border medals-gold">
              <div className="medals-and-prices">
              <div className="grade">1st</div>
              <div className="runner">Runner</div>
              <div className="money">N500,000</div>
              </div>
            </div>
          </div>
          <div className="medals-boders-contain bronze-con">
            <img className="medals bronze-medal" src={BronzeMedal} alt="" />
            <div className="medals-border medals-bronze">
              <div className="medals-and-prices">
              <div className="grade">3rd</div>
              <div className="runner">Runner</div>
              <div className="money">N150,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PricesAndAwards;
