import React from "react";
import PartnersSponsorsImg from '../Assets/Partner and Sponsors.png'

const PartnersSponsors = () => {
  return (
    <div className="sponsors-partners">
      <div className="sponsors-header">
        <h2>Partners and Sponsors</h2>
        <p>
          Getlinked Hackathon 1.0
           is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
        <div className="partners-sponsors">
            <img src={PartnersSponsorsImg} alt="" />
        </div>
    </div>
  );
};

export default PartnersSponsors;
