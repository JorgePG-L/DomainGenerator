/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

const nameGenerator = () => {};
pronoun.forEach = word1 => {
  word1.forEach = word2 => {
    word2.forEach = word3 => {
      console.log(word1 + word2 + word3 + ".com");
    };
  };
};
