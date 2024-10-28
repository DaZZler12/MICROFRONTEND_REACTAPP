import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FirstAppPage from "./pages/FirstAppPage";
import SecondAppPage from "./pages/SecondAppPage";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";

const App: React.FC = () => (
  <Router>
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/firstApp" element={<FirstAppPage />} />
        <Route path="/secondApp" element={<SecondAppPage />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
