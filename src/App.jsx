import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./pages/components/Layout/Layout";
import QuportPage from "./pages/Quport";
import PadelaiPage from "./pages/PadelAi";
import SoccerAiPage from "./pages/SoccerAi";
import RealTokenPage from "./pages/RealToken";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<QuportPage />} />
          <Route path="/padel-Ai" element={<PadelaiPage />} />
          <Route path="/soccerAi" element={<SoccerAiPage />} />
          <Route path="/real-token" element={<RealTokenPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
