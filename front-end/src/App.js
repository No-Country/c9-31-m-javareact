import React from "react";
import "./App.css";
import { AppRoutes } from "../src/router/index";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
