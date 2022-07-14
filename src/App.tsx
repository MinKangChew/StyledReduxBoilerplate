import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, TestHeader } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/table" element={<TestHeader />}>
        <Route path=":project" element={<TestHeader />}>
          <Route path=":buildMilestone" element={<TestHeader />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
