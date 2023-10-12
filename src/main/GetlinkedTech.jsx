import React from "react";
import ManWearing from "../Assets/glow-sun.png";
import SmallBulb from "../Assets/small-bulb.png";
import Stripe from '../Assets/stripe.png'
import CountdownTimer from "../components/CountDownTimer";
import Button from "../components/Button";


const GetlinkedTech = () => {
  return (
    <div className="getlinked-container">
      <div className="ignite-a-revolution">
        Igniting a Revolution in HR Innovation
        <img src={Stripe} alt="" />
      </div>
      <div className="getlinked">
        <div className="getlinked-text">
          <div className="bulb-light">
            <img src={SmallBulb} alt="" />
          </div>
          <h2>getlinked Tech</h2>
          <h2>
            Hackathon <span>1.0</span>
          </h2>
          <p>
            Participate in getlinked tech Hackathon 2023 stand <br /> a chance
            to win a Big prize
          </p>
         
           <Button className="primary not-clicking" label="Register" />
          
         
          <div  className='count-down-timer'>
            <CountdownTimer />
          </div>
          
        </div>
        <div className="getlinked-img">
          <img src={ManWearing} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GetlinkedTech;
