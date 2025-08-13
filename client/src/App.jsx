import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
};

export default App;
