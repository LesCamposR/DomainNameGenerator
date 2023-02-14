/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Pura Vida");
  document.querySelector("button").addEventListener("click", execute);
};

let pronoun = ["the", "our", "his", "her"];
let adj = ["great", "big", "best"];
let noun = ["jogger", "racoon", "home"];
let dom = [".com", ".net", ".co.cr"];

const execute = () => {
  console.log("clicked");
  let paragraph;
  let text;
  for (let i = 0; i < pronoun.length; i++) {
    for (let l = 0; l < adj.length; l++) {
      for (let n = 0; n < noun.length; n++) {
        for (let d = 0; d < dom.length; d++) {
          console.log(pronoun[i] + adj[l]);
          paragraph = document.createElement("h4");
          text = document.createTextNode(
            pronoun[i] + adj[l] + noun[n] + dom[d]
          );
          paragraph.appendChild(text);
          document.querySelector("#result").appendChild(paragraph);
        }
      }
    }
  }
};
