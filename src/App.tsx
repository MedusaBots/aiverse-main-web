import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tokenomics from "./pages/Tokenomics";

function App() {
  return (
    <div className="App">
      {/* React router for routing pages. Add a route here and a page in pages/ directory to add new page */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tokenomics" element={<Tokenomics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
