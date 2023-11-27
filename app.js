import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Home from "./src/components/Home";
const root = ReactDOM.createRoot(document.querySelector(".root"));
const heading = <h1>Hello World</h1>;
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};
root.render(<AppLayout />);
