import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
  <div className="nav">
    <Link to="/">Home</Link>
    <Link to={{ // to 에는 다른 props가 들어갈 수 있다.
      pathname:"/about",
      // state:{
      //   fromNavigation: true
      // }
    }}>About</Link>
  </div>
  );
}

export default Navigation;