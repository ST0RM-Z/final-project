import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";
import Footer from "./components/Footer";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="detail" element={<Details />} />
        <Route path="*" elemecnt={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
