import React from "react";
import s from "./App.module.scss";
import "./custom.css";

const App = () => {
  return <div className={s.header}>
    This is <span className="color">App Component!</span>
  </div>;
};

export default App;
