import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Introduction_Section from "./components/Introduction_Section";
import Carrier_mood from "./components/Carrier_mood";
import Services_Section from "./components/Services_Section";
import New_Gameplay from "./components/New_Gameplay";
import USEFUL_TIPS from "./components/USEFUL_TIPS";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Introduction_Section />
      <Carrier_mood />
      <Services_Section />
      <New_Gameplay />
      <USEFUL_TIPS />
      <Footer />
    </>
  );
};

export default App;
