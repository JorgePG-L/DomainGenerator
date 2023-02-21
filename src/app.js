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
let end = [".com", ".es", ".net", ".org"];

pronoun.forEach(word1 => {
  adj.forEach(word2 => {
    noun.forEach(word3 => {
      end.forEach(word4 => {
        console.log(`${word1}${word2}${word3}${word4}`);
      });
    });
  });
});
