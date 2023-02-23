import React from "react";
import "./Topbar.css";

function Topbar() {
  return (
    <header class="header">
      <h1 class="logo">
        <a href="#">Assetwarranty</a>
      </h1>
      <ul class="main-nav">
        <li>
          <a href="#">Profile</a>
        </li>
      </ul>
    </header>
  );
}

export default Topbar;
