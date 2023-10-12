import React from 'react'
import Navbar from "./components/Navbar";
import GetlinkedTech from "./main/GetlinkedTech";
import BigIdea from "./main/BigIdea";
import RulesAndGuildelines from "./main/RulesAndGuidelines";
import JudgingCriteria from "./main/JudgingCriteria";
import FreqAskQuest from "./main/FreqAskQuest";
import TimeLine from "./main/TimeLine";
import PricesAndAwards from "./main/PricesAndAwards";
import PartnersSponsors from "./main/PartnersSponsors";
import PrivacyPolicy from "./main/PrivacyPolicy";
import Footer from "./main/Footer";
import AllRightReserved from "./main/AllRightReserved";

const Home = () => {
  return (
    <>
         <Navbar />
        <GetlinkedTech />
        <BigIdea />
        <RulesAndGuildelines />
        <JudgingCriteria />
        <FreqAskQuest />
        <TimeLine />
        <PricesAndAwards />
        <PartnersSponsors />
        <PrivacyPolicy />
        <Footer />
        <AllRightReserved />
    </>
  )
}

export default Home