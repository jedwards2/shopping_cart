import React from "react";
import "./HomeCSS.css";

function Home() {
  return (
    <div className="home--element">
      <div className="header--home">
        <a href="/catalog">Shop for Beans</a>
      </div>
      <div className="home--content">
        <h1>We Have Beans.</h1>
        <h2>so many beans.</h2>
      </div>
    </div>
  );
}

export default Home;
