import React from "react";

const date = new.Date();
const currentTime = date.getHour();

let greetingTime;

if (currentTime < 12) 


export default function Home() {
  return <div>
    <h1>Hello</h1>
    <p>{greetingTime}</p>
  </div>
}
