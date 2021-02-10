import * as React from "react";

const date = Date();
const currentTime = date.getHour();

let greetingTime;

if (currentTime < 12) {
  greetingTime = "Good Morning";
} else if (currentTime < 18) {
  greetingTime ="Good Afternoon"
} else {
  greetingTime = "Good Night"
}

const Home = () => {
  return (
<div>
    <h1>Hello</h1>
    <p>{greetingTime}</p>
  </div>
  )
}


export default Home;