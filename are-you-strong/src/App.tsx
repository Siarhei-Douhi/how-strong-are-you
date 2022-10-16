import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "./router";
import { createContext, useEffect, useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <RootRouter />
    </BrowserRouter>
  );
}
export default App;
