import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Introduction_Section from "./components/Introduction_Section";
import Carrier_mood from "./components/Carrier_mood";
const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Introduction_Section />
      <Carrier_mood />
    </>
  );
};

export default App;
