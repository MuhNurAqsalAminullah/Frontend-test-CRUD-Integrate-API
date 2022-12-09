import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// import "react-datepicker/dist/react-datepicker.css";

if (localStorage.getItem("token")) {
  axios.defaults.headers.common["Authorization"] =
    "bearer " + localStorage.getItem("token");
}

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Router />
    </BrowserRouter>
  );
}

export default App;
