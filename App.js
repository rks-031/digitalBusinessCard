import React from "react";
import ImageBox from "./components/ImageBox";
import AfterImage from "./components/AfterImage";
import About from "./components/About";
import Interests from "./components/Interests";
import Icons from "./components/Icons";

function App() {
  return (
    <div className="container">
      <ImageBox />
      <AfterImage />
      <About />
      <Interests />
      <Icons />
    </div>
  );
}

export default App;
