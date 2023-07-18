import React from "react";
import { name, city } from "../data/data.js";

function Home(props) {
  // update the JSX being returned!
  const {name,city}=props;
  return(
    <div id="home">
      <h1 style={{color:"firebrick"}}>{name} is a Web Developer from {city}</h1>
    </div>
  )
}

export default Home;
