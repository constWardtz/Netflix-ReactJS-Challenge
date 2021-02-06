import React from "react";

import { HomeScreen } from "./pages";

import "./style/app.css";

const App = () => {
  return (
    <div className="app">
      <div className="content">
        <HomeScreen />
      </div>
    </div>
  );
};

export default App;
