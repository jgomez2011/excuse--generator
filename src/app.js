/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let action = ["ate", "peed", "crushed", "broke"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  console.log("Hello Rigo from the console!");
  let excuse = document.querySelector("#excuse");
  excuse.innerHTML = `${who[Math.floor(Math.random() * who.length)]} ${
    what[Math.floor(Math.random() * what.length)]
  } ${action[Math.floor(Math.random() * action.length)]} ${
    when[Math.floor(Math.random() * when.length)]
  }`;
};
